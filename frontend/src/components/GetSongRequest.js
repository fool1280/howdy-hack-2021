import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GetSpotifySong from './GetSpotifySong';

const access_token ='BQC8HD4ph9POKC2bm-K_t8QkPLUPSfsUSO5_chycwDmQI_idLwAGireMj9VyMcHEkC2kSTYZ9Oh1kip2qgN5R3C8Ht_dCySCmwJT5nU8-CQLUe-HXS6v_b_DAP4G_QZzMDp2JdNKYLSx7iG-k_n91DijVlDJ9T1ndlQBPxOoFnE'
function GetSongRequest() {
    const mood = 'sad'
    const allMood =             ['sad', 'angry', 'fear', 'happy', 'disgust', 'neutral', 'surprise']
    const allGerne =            [ ]
    const allMinDanceability =  [ 0.35,    0.63,   0.20,    0.64,      0.21,      0.29,          1]
    const allMaxDanceability =  [ 0.50,    0.85,   0.45,    0.80,      0.40,      0.40,          1]
    const allMinEnergy =        [ 0.20,    0.50,    0.0,    0.65,      0.70,      0.00,          1]
    const allMaxEnergy =        [ 0.60,       1,    0.2,    1.00,      0.90,      0.60,          1]
    const allMinLoudness =      [-10.0,     -10,  -40.0,   -10.0,       -10,       -25,          1]
    const allMaxLoudness =      [  0.0,     0.0,  -15.0,    0.00,       0.0,        -5,          1]  
    //const allMinPopularity =    [ 0.5 ]
    //const allMaxPopularity =    [ 1] 
    const allMinValence =       [ 0.10,    0.25,    0.0,    0.70,      0.10,       0.00,         1]
    const allMaxValence =       [ 0.50,    0.50,    0.5,    1.00,      0.40,       0.40,         1]
    const allMinTempo =         [   50,      80,     90,      90,        80,         60,         1]                 
    const allMaxTempo =         [  200,     150,    180,     180,       170,        200,         1]      

    const [moodID, setMoodID] = useState(0);
    const [suggestSong, setSuggestSong] = useState([]);
    const [market, setMarket] = useState('UK')
    const [gernes, setGernes] = useState('')
    const [minDanceability, setMinDanceability] = useState(0);
    const [minEnergy, setMinEnergy] = useState(0);
    const [minLoudness, setMinLoudness] = useState(-50);
    const [minValence, setMinValence] = useState(0);
    const [minTempo, setMinTempo] = useState(0);

    const minPopularity = 0.00;
    const maxPopularity = 1;            //need more research
    // const getMood = async() => {
    //     let url = "placeholder" //fix later

    // } 

    const getInfoPlaceHolder = async() => {
        setMarket('US');
        setGernes('country');
        setMoodID(allMood.findIndex(element => element = 'sad')); // fix this later
        setMinDanceability(allMinDanceability[moodID])
        setMinEnergy(allMinEnergy[moodID])
        setMinLoudness(allMinLoudness[moodID])
        setMinValence(allMinValence[moodID])
        setMinTempo(allMinTempo[moodID])
    }

    const getSuggestSong = async() => {
        let url = 'https://api.spotify.com/v1/recommendations?limit=1&market='+market
        +'&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres='+gernes
        +'&seed_tracks=0c6xIDDpzE81m2q797ordA';
        //+'&min_danceability='+minDanceability
        //+'&min_energy='+minEnergy
        //+'&min_loudness='+minLoudness
        //+'&min_popularity='+minPopularity
        //+'&min_tempo='+minTempo
        //+'&min_valence='+minValence;
        let result = await axios.get(url, {headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                }
        }).then((res) => res.data.tracks);
        console.log('result',result)
        setSuggestSong(result);
        
    }
    const returnfromSpot = GetSpotifySong(suggestSong);
    useEffect(() => {
        getInfoPlaceHolder(); //fix to get info later
        //getSuggestSong();
    }, [market, suggestSong])
    if (suggestSong.length === 0) {
        return (
            <a>
                Loading .........
            </a>
        )
    } else { 
        console.log("trong ko",suggestSong);
        return (
        <div>
            {suggestSong.map((item) => <p>{item.name}</p>)}
        </div>
        )
    }
}
//{suggestSong.map((item) => <p>{item}</p>)}
export default GetSongRequest;
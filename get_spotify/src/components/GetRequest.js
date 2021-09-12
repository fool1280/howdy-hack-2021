import React, { useEffect, useState } from 'react';
import axios from 'axios';

const access_token ='BQBC11-b0-QbeXk2QvcGkJgpAAmIzsep88zGCHRfK8KsKm1Dd93WsdK_qrQU-HPlsGcfDUce3oSJjw6zgB203eNRdjCPtodL77OxhNfb12HYj0FQb6NVTGi0zBWsTUeYFHBTf-VD3M_dQtyz6EERWWjzy6h70FFyalJgTe18HZY'

function GetRequest() {
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
    const [limit, setLimit] = useState(1);
    const [suggestSong, setSuggestSong] = useState([]);
    const [market, setMarket] = useState('US')
    const [gernes, setGernes] = useState('')
    const [minDanceability, setMinDanceability] = useState(0);
    const [maxDanceability, setMaxDanceability] = useState(0);
    const [minEnergy, setMinEnergy] = useState(0);
    const [maxEnergy, setMaxEnergy] = useState(0);
    const [minLoudness, setMinLoudness] = useState(0);
    const [maxLoudness, setMaxLoudness] = useState(0);
    const [minPopularity, setMinPopularity] = useState(0.5);
    const [maxPopularity, setMaxPopularity] = useState(1);
    const [minValence, setMinValence] = useState(0);
    const [maxValence, setMaxValence] = useState(0);
    const [minTempo, setMinTempo] = useState(0);
    const [maxTempo, setMaxTempo] = useState(200);
    // const getMood = async() => {
    //     let url = "placeholder" //fix later

    // } 

    const getInfoPlaceHolder = async() => {
        setMarket('US');
        setGernes('country');
        getSuggestSong();
        setMoodID(allMood.findIndex(element => element = 'sad'));
        setMinDanceability(allMinDanceability[moodID])
        setMaxDanceability(allMinDanceability[moodID])
        setMinEnergy(allMinEnergy[moodID])
        setMaxEnergy(allMaxEnergy[moodID])
        setMinLoudness(allMinLoudness[moodID])
        setMaxLoudness(allMaxLoudness[moodID])
        setMinValence(allMinValence[moodID])
        setMaxValence(allMaxValence[moodID])
        setMinTempo(allMinTempo[moodID])
        setMaxTempo(allMaxTempo[moodID])
    }

    const getSuggestSong = async() => {
        console.log(market);
        let url = 'https://api.spotify.com/v1/recommendations?limit=1&market='+market
        +'&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres='+gernes
        +'&seed_tracks=0c6xIDDpzE81m2q797ordA'
        +'&min_danceability='+minDanceability
        +&max_danceability=1&min_energy=1&max_energy=1&min_loudness=1&max_loudness=1&min_popularity=1&max_popularity=1&min_tempo=1&max_tempo=1&min_valence=1&max_valence=1
        ;
        let result = await axios.get(url, {headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                }
        }).then((res) => res.data.tracks);
        setSuggestSong(result);
        console.log("suggestSong: ", suggestSong);
    }
    useEffect(() => {
        getInfoPlaceHolder(); //fix to get info later
    }, [])
    if (suggestSong.length === 0) {
        return (
            <a>
                Loading .........
            </a>
        )
    } else return (
        <div>
            {suggestSong.map((item) => <p>{item.name}</p>)}
        </div>
    )
}
//{suggestSong.map((item) => <p>{item}</p>)}
export default GetRequest;
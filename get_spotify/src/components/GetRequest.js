import React, { useEffect, useState } from 'react';
import axios from 'axios';

const access_token ='BQDPKlgHNjB2sxJ9m7UzUChDQRzTts80Iyl2YiMgJdTLS2qJNf7D-wNkVnJ4axHXgyZrmhpB1kPJQJZ8dLtzWqKFUEwDD_boP6lyif695srUBOGsi_WVV_cpOoluLS8LpYtUnoYgYYzCymmDkkfz_ni_03yWsfm7Llhtm8ni44E'

function GetRequest() {
    const [suggestSong, setSuggestSong] = useState([]);
    const [market, setMarket] = useState('US')
    const [gernes, setGernes] = useState('')
    const [minDanceability, setMinDanceability] = useState(0);
    const [maxDanceability, setMaxDanceability] = useState(0);
    const [minEnergy, setMinEnergy] = useState(0);
    const [maxEnergy, setMaxEnergy] = useState(0);
    const [minLoudness, setMinLoudness] = useState(0);
    const [maxLoudness, setMaxLoudness] = useState(0);
    const [minPopularity, setMinPopularity] = useState(0);
    const [maxPopularity, setMaxPopularity] = useState(0);
    const [minValence, setMinValence] = useState(0);
    const [maxValence, setMaxValence] = useState(0);
    
    // const getMood = async() => {
    //     let url = "placeholder" //fix later

    // } 

    const getInfoPlaceHolder = async() => {
        setMarket('US');
        setGernes('country');
        getSuggestSong();
    }

    const getSuggestSong = async() => {
        console.log(market);
        let url = 'https://api.spotify.com/v1/recommendations?limit=3&market='+market+'&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres='+gernes+'&seed_tracks=0c6xIDDpzE81m2q797ordA';
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
            <a style={{display: "table-cell"}} href="https://open.spotify.com/album/6VolTYHN9P3gZS1ugOkI1K" target="_blank">text</a>
        </div>
    )
}
//{suggestSong.map((item) => <p>{item}</p>)}
export default GetRequest;
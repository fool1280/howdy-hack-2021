import React, { useEffect, useState } from 'react';
import axios from 'axios';

const access_token ='BQBC11-b0-QbeXk2QvcGkJgpAAmIzsep88zGCHRfK8KsKm1Dd93WsdK_qrQU-HPlsGcfDUce3oSJjw6zgB203eNRdjCPtodL77OxhNfb12HYj0FQb6NVTGi0zBWsTUeYFHBTf-VD3M_dQtyz6EERWWjzy6h70FFyalJgTe18HZY'

function GetRequest() {
    const mood = 'sad'
    const allMood = ['sad', 'angry', 'fear', 'happy', 'disgust', 'neutral', 'surprise']
    const [limit, setLimit] = useState('1');
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
    const [maxPopularity, setMaxPopularity] = useState(1);
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
        let url = 'https://api.spotify.com/v1/recommendations?limit=1&market='+market+'&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres='+gernes+'&seed_tracks=0c6xIDDpzE81m2q797ordA';
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
            {allMood[0]}
            asd
        </div>
    )
}
//{suggestSong.map((item) => <p>{item}</p>)}
export default GetRequest;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const access_token ='BQAVUnCAZRz0fjlmJ4N_QTUb95OB9rk8zTbZwNXNQzDpLdaeRnF9dAV366tqAQiLnN-BaZ_rrVFOW5ke-dty4Mn_8ISehlAD-FBRUKG_gPUeRWiqK-39gO2XxZ2Pj4YIl4leNMkj3HL4jFMN4PpnKuPEXHCNfmpGSxRnSuFJ1dc'

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
            <p>{market}</p>
        </div>
    )
}
//{suggestSong.map((item) => <p>{item}</p>)}
export default GetRequest;
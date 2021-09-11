import React, { useEffect, useState } from 'react';
import axios from 'axios';

const access_token ='BQD417-aQtsPjQ17yzaom4D9GhBwjXrUMKuDbCV4Ha0pOann5yBKG1JdA0559zo6B1mqh14qk1ISrHtrwVca-FmGx4nc7viPeVWMY_7APR2is5MsV-tL4im5F9Gtiv41pozfPLVBWywjZE0YEfjDsnMdW7ieP-J79Ek'

function GetRequest() {
    const [suggestSong, setSuggestSong] = useState([]);


    const getSuggestSong = async() => {
        let url = 'https://api.spotify.com/v1/recommendations?limit=3&market=ES&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA';
        let result = await axios.get(url, {headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                }
        }).then((res) => res.data.tracks);
        console.log("result: ", result);
        setSuggestSong(result);
        console.log("suggestSong: ", suggestSong);
    }
    useEffect(() => {
        getSuggestSong();
    }, [])
    if (suggestSong.length == 0) {
        return (
            <a>
                Loading .........
            </a>
        )
    } else return (
        <div>
            temp
            {suggestSong.map((item) => <p>{item.name}</p>)}
        </div>
    )
}
//{suggestSong.map((item) => <p>{item}</p>)}
export default GetRequest;
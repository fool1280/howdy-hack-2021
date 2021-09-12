import React, { useEffect, useState } from 'react';
//import GetSongRequest from './GetSongRequest';
import SpotifyPlayer from "react-spotify-player";


function GetSpotifySong(suggestSong) {
    const test = suggestSong;
    console.log('this is from getspotifysong', test)
    const songID = "temp"
    console.log("ID", songID)
    return (
        <div>
            <SpotifyPlayer uri="spotify:track:4cOdK2wGLETKBW3PvgPWqT" width="100%" view="coverart" theme="black" />
        </div>
    )
}

export default GetSpotifySong;
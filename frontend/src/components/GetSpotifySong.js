import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GetSongRequest from './GetSongRequest';
import SpotifyPlayer from "react-spotify-player";


function GetSpotifySong() {
    const songID = {GetSongRequest}
    console.log("ID", songID.name)
    return (
        <div>
            <SpotifyPlayer uri="spotify:track:4cOdK2wGLETKBW3PvgPWqT" width="100%" view="coverart" theme="black" />
        </div>
    )
}

export default GetSpotifySong;
import React, { useRef, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Webcam from "react-webcam";
import axios from "axios";
import "./App.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import SpotifyPlayer from "react-spotify-player";
import GetSongRequest from "./components/GetSongRequest";
// import SpotifyPlayer from "react-spotify-web-playback";

const access_token =
    "BQBbE9FdjKQ97KLfbsVcKmBmlapBMAw_JhYSme7trxROwwuVqhZMDZpcxckbd0XhqBtyUdFjxbL1RznHgIeuFdxG5Xz172YidddD6j7U9KvkJigvPWbeWz4kgi3WXidMKfTagTksiTX-_5_EfaSDZcHd3WPaN_19SwbAt0fBCUs";

const App = () => {
    const [buttonStatus, setButton] = useState(false);
    const [mood, setMood] = useState("");
    const webcamRef = React.useRef(null);
    const [imgSrc, setimgSrc] = useState(null);
    const allMood = [
        "sad",
        "angry",
        "fear",
        "happy",
        "disgust",
        "neutral",
        "surprise",
    ];
    const allGerne = [];
    const allMinDanceability = [0.35, 0.63, 0.2, 0.64, 0.21, 0.29, 1];
    const allMaxDanceability = [0.5, 0.85, 0.45, 0.8, 0.4, 0.4, 1];
    const allMinEnergy = [0.2, 0.5, 0.0, 0.65, 0.7, 0.0, 1];
    const allMaxEnergy = [0.6, 1, 0.2, 1.0, 0.9, 0.6, 1];
    const allMinLoudness = [-10.0, -10, -40.0, -10.0, -10, -25, 1];
    const allMaxLoudness = [0.0, 0.0, -15.0, 0.0, 0.0, -5, 1];
    //const allMinPopularity =    [ 0.5 ]
    //const allMaxPopularity =    [ 1]
    const allMinValence = [0.1, 0.25, 0.0, 0.7, 0.1, 0.0, 1];
    const allMaxValence = [0.5, 0.5, 0.5, 1.0, 0.4, 0.4, 1];
    const allMinTempo = [50, 80, 90, 90, 80, 60, 1];
    const allMaxTempo = [200, 150, 180, 180, 170, 200, 1];

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setButton(true);
        setimgSrc(imageSrc);
    }, [webcamRef, setimgSrc]);

    const sendData = async () => {
        let data = JSON.stringify({
            title: "test",
            content: imgSrc,
        });
        let url = "http://localhost:8000/ferapp/posts/create/";
        let headers = {
            "Content-Type": "application/json",
            Accept: "application/json",
        };
        let result = await axios
            .post(url, data, { headers })
            .then((result) => result.data);
        setMood(result);
        setButton(false);
    };
    useEffect(() => {
        if (!(imgSrc === null)) {
            sendData(imgSrc);
        }
        if (!(mood === "")) {
            console.log("mood:", mood);
        }
    }, [imgSrc, mood]);
    return (
        <div style={{ alignItems: "center", textAlign: "center" }}>
            <h1>mello.</h1>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                <div
                    style={{
                        width: "50%",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                        }}
                    >
                        <Webcam
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/png"
                            style={{
                                width: "45%",
                                height: "40%",
                                display: "flex",
                                margin: "auto",
                                marginBottom: "5px",
                                flexWrap: "wrap",
                                justifyContent: "center",
                                border: "2px solid",
                                borderColor: "#312545",
                                borderRadius: "10px",
                                transform: "rotateY(180deg)",
                            }}
                        />
                    </div>
                    <div
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Button
                            disabled={buttonStatus}
                            variant="contained"
                            color="secondary"
                            onClick={capture}
                            style={{
                                display: "flex",
                                margin: "auto",
                                marginBottom: "5px",
                                width: 300,
                                flexWrap: "wrap",
                                justifyContent: "center",
                            }}
                        >
                            Take photo
                        </Button>
                    </div>
                    {imgSrc && (
                        <img
                            src={imgSrc}
                            style={{
                                borderRadius: "10px",
                                border: "2px solid",
                                width: "45%",
                                height: "40%",
                                display: "flex",
                                margin: "auto",
                                flexWrap: "wrap",
                                justifyContent: "center",
                                borderColor: "#312545",
                                transform: "rotateY(180deg)",
                            }}
                            alt="face capture"
                        />
                    )}
                </div>
                {/* <div
                    style={{
                        width: "50%",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <SpotifyPlayer
                        uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk"
                        width="100%"
                        view="coverart"
                        theme="black"
                    />
                </div> */}
                <div
                    style={{
                        width: "50%",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div>
                        <SpotifyPlayer
                            uri="spotify:track:4cOdK2wGLETKBW3PvgPWqT"
                            width="100%"
                            view="coverart"
                            theme="black"
                        />
                    </div>
                </div>
                <a href="https://github.com/fool1280/howdy-hack-2021">
                    <GitHubIcon
                        style={{
                            margin: "12px",
                            position: "fixed",
                            bottom: "0px",
                            right: "0px",
                            color: "whitesmoke",
                        }}
                    />{" "}
                </a>
            </div>
            <GetSongRequest />
        </div>
    );
};

export default App;

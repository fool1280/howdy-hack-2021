import React, { useRef, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Webcam from "react-webcam";
import axios from "axios";
import "./App.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import SpotifyPlayer from "react-spotify-player";
// import SpotifyPlayer from "react-spotify-web-playback";

const access_token =
    "BQBZnqf0yzNC0oNrA6O4_nt_gl6aJIyX-L_0Xn1_IViJXDp3LcGyLSYy6y4Ia3T-ZGwlXBPoAOKQrCeHlOs1F9TMEM1rGgwMOdC8RmM3L3NfvLtKTlqdYczi5ncgMsk9jhtqHjqQ2jTPAA05HjWMGu5sqdtNDdrFNH1rHiBM7W0";

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
    const allMinValence = [0.1, 0.25, 0.0, 0.7, 0.1, 0.0, 1];
    const allMaxValence = [0.5, 0.5, 0.5, 1.0, 0.4, 0.4, 1];
    const allMinTempo = [50, 80, 90, 90, 80, 60, 1];
    const allMaxTempo = [200, 150, 180, 180, 170, 200, 1];
    const minPopularity = 0.0;
    const maxPopularity = 1;

    const [moodID, setMoodID] = useState(0);
    const [suggestSong, setSuggestSong] = useState([]);
    const [market, setMarket] = useState("UK");
    const [gernes, setGernes] = useState("");
    const [minDanceability, setMinDanceability] = useState(0);
    const [minEnergy, setMinEnergy] = useState(0);
    const [minLoudness, setMinLoudness] = useState(-50);
    const [minValence, setMinValence] = useState(0);
    const [minTempo, setMinTempo] = useState(0);

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
    const getInfoPlaceHolder = async () => {
        setMarket("US");
        setGernes("country");
        setMoodID(allMood.findIndex((element) => (element = mood))); // fix this later
        setMinDanceability(allMinDanceability[moodID]);
        setMinEnergy(allMinEnergy[moodID]);
        setMinLoudness(allMinLoudness[moodID]);
        setMinValence(allMinValence[moodID]);
        setMinTempo(allMinTempo[moodID]);
    };
    const getSuggestSong = async () => {
        let url =
            "https://api.spotify.com/v1/recommendations?limit=1&market=" +
            market +
            "&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=" +
            gernes +
            "&seed_tracks=0c6xIDDpzE81m2q797ordA" +
            "&min_danceability=" +
            minDanceability +
            "&min_energy=" +
            minEnergy +
            "&min_loudness=" +
            minLoudness +
            "&min_popularity=" +
            minPopularity +
            "&min_tempo=" +
            minTempo +
            "&min_valence=" +
            minValence;
        let result = await axios
            .get(url, {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
            .then((res) => res.data.tracks);
        console.log("result", result);
        setSuggestSong(result);
    };
    useEffect(() => {
        if (!(imgSrc === null)) {
            sendData(imgSrc);
        }
        if (!(mood === "")) {
            console.log("mood:", mood);
            getInfoPlaceHolder();
            if (minTempo !== 0) {
                getSuggestSong();
            }
        }
    }, [
        imgSrc,
        mood,
        minDanceability,
        minEnergy,
        minLoudness,
        minPopularity,
        minTempo,
        minValence,
    ]);
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
                <div
                    style={{
                        width: "50%",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div>
                        <h1>{mood === "" ? "Hello..." : mood}</h1>
                    </div>
                    {suggestSong.length !== 0 ? (
                        mood === "surprise" ? (
                            <div>
                                <SpotifyPlayer
                                    uri="spotify:track:4cOdK2wGLETKBW3PvgPWqT"
                                    width="100%"
                                    view="coverart"
                                    theme="black"
                                />
                            </div>
                        ) : (
                            <div>
                                <SpotifyPlayer
                                    uri={suggestSong[0].uri}
                                    width="100%"
                                    view="coverart"
                                    theme="black"
                                />
                            </div>
                        )
                    ) : (
                        <div>
                            <SpotifyPlayer
                                uri="spotify:track:0mHyWYXmmCB9iQyK18m3FQ"
                                width="100%"
                                view="coverart"
                                theme="black"
                            />
                        </div>
                    )}
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
        </div>
    );
};

export default App;

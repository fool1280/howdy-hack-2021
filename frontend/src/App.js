import React, { useRef, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Webcam from "react-webcam";
import axios from "axios";
import "./App.css";

const App = () => {
    const [buttonStatus, setButton] = useState(false);
    const [mood, setMood] = useState("");
    const webcamRef = React.useRef(null);
    const [imgSrc, setimgSrc] = useState(null);

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
        console.log("Result:", result);
        setMood(result);
        setButton(false);
    };
    useEffect(() => {
        if (!(imgSrc === null)) {
            sendData(imgSrc);
        }
    }, [imgSrc]);
    return (
        <div>
            <div
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                <h1>mello.</h1>
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/png"
                    style={{
                        width: "30%",
                        height: "30%",
                        display: "flex",
                        margin: "auto",
                        marginBottom: "5px",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        border: "2px solid",
                        borderColor: "#312545",
                        borderRadius: "10px",
                    }}
                />
            </div>
            <div
                class="Button"
                style={{ justifyContent: "center", alignItems: "center" }}
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
                        width: "30%",
                        height: "30%",
                        display: "flex",
                        margin: "auto",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        borderColor: "#312545",
                    }}
                />
            )}
        </div>
    );
};

export default App;

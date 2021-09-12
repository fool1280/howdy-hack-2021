import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Webcam from "react-webcam";
import "./App.css";
import axios from "axios";
import GitHubIcon from "@material-ui/icons/GitHub";

function postImage(image, title) {
    let form_data = new FormData();
    form_data.append("title", title);
    form_data.append("image", image);
    let url = "http://localhost:8000/uploads";
    axios
        .post(url, form_data, {
            headers: {
                "content-type": "multipart/form-data",
            },
        })
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => console.log(err));
}

const App = () => {
    const [buttonStatus, setButton] = useState(false);
    const webcamRef = React.useRef(null);
    const [imgSrc, setimgSrc] = useState(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setButton(true);
        // const data = imageSrc;
        postImage(imageSrc, "capture.png");
        setimgSrc(imageSrc);
    }, [webcamRef, setimgSrc]);

    return (
        <div>
            <div style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
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
                        transform: 'rotateY(180deg)'
                    }}
                />
            </div>
            <div style={{ justifyContent: "center", alignItems: "center" }}>
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
                        transform: 'rotateY(180deg)'
                    }}
                    alt="face capture"
                />
            )}
            <a href="https://github.com/fool1280/howdy-hack-2021">
                <GitHubIcon style={{ margin: "12px", position: "fixed", bottom: "0px", right: "0px", color: "whitesmoke" }} />{" "}
            </a>
        </div>
    );
};

export default App;

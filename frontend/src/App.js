import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import Webcam from "react-webcam";
import "./App.css";


const App = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setimgSrc] = React.useState(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        //const data = imageSrc;
        setimgSrc(imageSrc);
    }, [webcamRef, setimgSrc]);

    return (
        <div>
            <div style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                <h1>Welcome</h1>
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
                        borderRadius: "10px",
                    }}
                />
            </div>
            <div class="Button" style={{ justifyContent: "center", alignItems: "center" }}>
                <Button
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
            <div
                style={{
                    width: 300,
                    display: "flex",
                    margin: "auto",
                    marginBottom: "5px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {imgSrc && <img style={{borderRadius: "10px"}} src={imgSrc} />}
            </div>
        </div>
    );
};

export default App;

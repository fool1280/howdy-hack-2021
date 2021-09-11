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
                <h1>TODO</h1>
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

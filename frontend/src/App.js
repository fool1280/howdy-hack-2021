import React, { useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import Webcam from "react-webcam";

const App = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setimgSrc] = React.useState(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setimgSrc(imageSrc);
    }, [webcamRef, setimgSrc]);

    return (
        <div style={{ backgroundImage: imgSrc }}>
            <div style={{ justifyContent: "center", alignItems: "center", textAlign:"center" }}>
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
                        border: "2px solid",
                        borderColor: "#312545",
                    }}
                />
            </div>
            <div style={{ justifyContent: "center", alignItems: "center" }}>
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
                    width: "30%",
                    height: "30%",
                    display: "flex",
                    margin: "auto",
                    marginBottom: "5px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    // border: "2px solid",
                    // borderColor: "#312545",
                }}
            >
                {imgSrc && <img src={imgSrc} />}
            </div>
        </div>
    );
};

export default App;

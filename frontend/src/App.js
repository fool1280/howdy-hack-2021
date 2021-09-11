import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import Webcam from "react-webcam";
import background from "./background.jpg";

const App = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setimgSrc] = React.useState(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        //const data = imageSrc;
        setimgSrc(imageSrc);
    }, [webcamRef, setimgSrc]);

    return (
        
        <div style={{backgroundImage: `url(${background})` }}>
            <div style={{ justifyContent: "center", alignItems: "center" }}>
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
                        borderColor: "purple",
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
            <div style={{
                        width: "30%",
                        height: "30%",
                        display: "flex",
                        margin: "auto",
                        marginBottom: "5px",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        border: "2px solid",
                        borderColor: "purple",
                    }}>
                  {imgSrc && <img src={imgSrc} />}
            </div>
        </div>
    );
};

export default App;

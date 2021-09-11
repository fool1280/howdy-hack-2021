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
        <div>
            <Webcam audio={false} height={720} ref={webcamRef} screenshotFormat="image/jpeg" width={1280} />
            <Button variant="contained" color="secondary" onClick={capture}>
                Take photo
            </Button>
            {imgSrc && <img src={imgSrc} />}
        </div>
    );
};

export default App;

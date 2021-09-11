import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import Webcam from "react-webcam";

const App = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setimgSrc] = React.useState(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        //const data = imageSrc;
        setimgSrc(imageSrc);
    }, [webcamRef, setimgSrc]);

    return (
        <div style={{justifyContent: 'center'}}>
            <Webcam audio={false} ref={webcamRef} screenshotFormat="image/png"  />
            <br/>
            <Button variant="contained" color="secondary" onClick={capture}>
                Take photo
            </Button>.
            <br/>
            {imgSrc && <img src={imgSrc} />}
        </div>
    );
};

export default App;

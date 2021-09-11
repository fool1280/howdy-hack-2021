import React from "react";
import Button from "@material-ui/core/Button";
import Webcam from "react-webcam";

const App = () => {
    return (
        <div
            style={{
                display: "flex",
                margin: "auto",
                width: 400,
                flexWrap: "wrap",
                justifyContent: "center",
            }}
        >
            <Button variant="contained" color="secondary" onClick={WebcamCapture}>
                Secondary Button
            </Button>
        </div>
    );
};

export default App;

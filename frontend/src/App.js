import React, { useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";

const App = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        getVideo();
    }, [videoRef]);

    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({ video: { width: 300 } })
            .then((stream) => {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            })
            .catch((err) => {
                console.error("error:", err);
            });
    };

    return (
        <div>
            <div>
                <Button variant="contained" color="secondary">
                    Take a photo
                </Button>
                <video ref={videoRef} />
            </div>
        </div>
    );
};

export default App;

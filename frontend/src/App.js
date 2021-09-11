import React, { useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";

const App = () => {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const stripRef = useRef(null);

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 1 } })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error("error:", err);
      });
  };

  const paintToCanvas = () => {
    let video = videoRef.current;
    let photo = photoRef.current;
    let ctx = photo.getContext("2d");

    const width = 320;
    const height = 240;
    photo.width = width;
    photo.height = height;

    return setInterval(() => {
      ctx.drawImage(video, 0, 0, width, height);
    }, 1);
  };

  const takePhoto = () => {
    let photo = photoRef.current;
    let strip = stripRef.current;

    console.warn(strip);

    const data = photo.toDataURL("image/jpeg");

    console.warn(data);
    const link = document.createElement("a");
    link.href = data;
    link.innerHTML = `<img src='${data}' alt='thumbnail'/>`;
    strip.insertBefore(link, strip.firstChild);
  };

  return (
    <div>
      <video onCanPlay={() => paintToCanvas()} ref={videoRef} />
      <canvas ref={photoRef} />
      <br/>
      <Button variant="contained" color="secondary" onClick={() => takePhoto()}>Take a photo</Button>
      <div>
        <div ref={stripRef} />
      </div>
    </div>
  );
};

export default App;


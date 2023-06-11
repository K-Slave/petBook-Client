import localConsole from "@lib/utils/localConsole";
import dynamic from "next/dynamic";
import React, { MouseEventHandler, useEffect, useRef, useState } from "react";

const WebRTCEx = () => {
  // const [] = useState();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const photoRef = useRef<HTMLImageElement>(null);
  const startButtonRef = useRef<HTMLButtonElement>(null);
  const shotButtonRef = useRef<HTMLButtonElement>(null);

  const [width, setWidth] = useState<number>(320);
  const [height, setHeight] = useState<number>(300);

  localConsole?.log(navigator.mediaDevices);

  async function getMedia(constraints: MediaStreamConstraints) {
    try {
      if (navigator.mediaDevices === undefined) {
        // @ts-ignore
        navigator.mediaDevices = {};
      }

      if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = function (constraints) {
          // First get ahold of the legacy getUserMedia, if present
          const getUserMedia =
            // @ts-ignore
            navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

          // Some browsers just don't implement it - return a rejected promise with an error
          // to keep a consistent interface
          if (!getUserMedia) {
            return Promise.reject(
              new Error("getUserMedia is not implemented in this browser")
            );
          }

          // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
          return new Promise(function (resolve, reject) {
            getUserMedia.call(navigator, constraints, resolve, reject);
          });
        };
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });

      localConsole?.log(stream, "stream");

      if (videoRef.current === null) return;
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    } catch (err) {
      /* 오류 처리 */

      localConsole?.log(err);
    }

    // try {
    //   stream = await navigator.mediaDevices.getUserMedia(constraints);
    //   /* 스트림 사용 */

    //   localConsole?.log(stream, 'stream');

    //   stream.srcObject = stream;
    //   stream.play();
    // } catch (err) {
    //   /* 오류 처리 */
    // }
  }

  function clearphoto() {
    if (canvasRef.current === null || photoRef.current === null) return;

    const context = canvasRef.current.getContext("2d");
    if (!context) return;
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    const data = canvasRef.current.toDataURL("image/png");
    photoRef.current.setAttribute("src", data);
  }

  function takepicture() {
    if (
      canvasRef.current === null ||
      videoRef.current === null ||
      photoRef.current === null
    )
      return;

    const context = canvasRef.current.getContext("2d");

    if (width && height && context) {
      canvasRef.current.width = width;
      canvasRef.current.height = height;
      context.drawImage(videoRef.current, 0, 0, width, height);

      const data = canvasRef.current.toDataURL("image/png");
      photoRef.current.setAttribute("src", data);
    } else {
      clearphoto();
    }
  }

  const onClick = () => {
    // getMedia({ audio: true, video: { facingMode: { exact: 'environment' } } });
    getMedia({ audio: true, video: true });
  };

  const onShot: MouseEventHandler = (e) => {
    takepicture();
    e.preventDefault();
  };

  return (
    <div>
      <video
        id="video"
        ref={videoRef}
        autoPlay
        onCanPlay={(e) => {
          // if (!streaming) {
          //   height = (video.videoHeight / video.videoWidth) * width;
          //   video.setAttribute("width", width);
          //   video.setAttribute("height", height);
          //   canvas.setAttribute("width", width);
          //   canvas.setAttribute("height", height);
          //   streaming = true;
          // }
        }}
      ></video>
      <canvas
        id="canvas"
        ref={canvasRef}
        width={width}
        height={height}
      ></canvas>
      <div className="output">
        <img
          id="photo"
          ref={photoRef}
          alt="The screen capture will appear in this box."
        />
      </div>
      <button ref={startButtonRef} onClick={onClick}>
        카메라 사용하기
      </button>
      ;
      <button ref={shotButtonRef} onClick={onShot}>
        사진찍기
      </button>
      ;
    </div>
  );
};

export default dynamic(() => Promise.resolve(WebRTCEx), {
  ssr: false,
});

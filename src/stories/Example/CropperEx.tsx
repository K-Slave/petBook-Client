import dynamic from "next/dynamic";
import React, { useRef } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
// eslint-disable-next-line import/no-unresolved
import "cropperjs/dist/cropper.css";

const CropperEx = () => {
  const cropperRef = useRef<ReactCropperElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const onCrop = () => {
    const cropper = cropperRef.current?.cropper;
    // @ts-ignore

    if (cropper) {
      // console.log(cropper.getCroppedCanvas().toDataURL());
    }
  };

  const onClick = () => {
    const cropper = cropperRef.current?.cropper;

    if (cropper && imgRef.current) {
      imgRef.current.src = cropper.getCroppedCanvas().toDataURL();
    }
  };

  return (
    <div>
      <Cropper
        src="https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg"
        style={{ height: 400, width: "100%" }}
        // Cropper.js options
        initialAspectRatio={16 / 9}
        guides={false}
        crop={onCrop}
        ref={cropperRef}
      />
      <button onClick={onClick}>Crop</button>
      <div>
        result:
        <img ref={imgRef}></img>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(CropperEx), {
  ssr: false,
});

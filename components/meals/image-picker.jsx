"use client";

import React, { useRef, useState } from "react";
import classes from "./iamge-picker.module.css";
import Image from "next/image";
const ImagePicker = ({ label, name }) => {
  const imageRef = useRef();

  const [pickedImage, setPickedImage] = useState();
  function handlePickClick() {
    imageRef.current.click();
  }

  function handleIMageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="the selected iamge" fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageRef}
          onChange={handleIMageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          pick an image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;

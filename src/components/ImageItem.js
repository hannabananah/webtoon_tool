import { useStyles } from "~/styles/ImageItem";
// import "~/styles/itemSetting.css";
import { Resizable } from "re-resizable";
import { able, able_img, enable } from "~/util/resize_option.js";
import { ImgEditableBox } from "~/components/EditableBox";
import React, { useState } from "react";

const ImageItem = ({
  imageId,
  onMouseDown,
  imageSrc,
  edit,
  goUp,
  imgReverse,
  deleteImage,
  onClose,
  onDoubleClick,
  onLoad,
  figureWidth,
  onResizeStop,
  top,
  left,
  scaleX,
  onResize,
}) => {
  const classes = useStyles();

  return (
    <figure
      className={
        edit ? `${classes.editFigure} figure` : `${classes.figure} figure`
      }
      id={imageId}
      onMouseDown={onMouseDown}
      onDoubleClick={onDoubleClick}
      style={{
        width: figureWidth,
        top: top,
        left: left,
      }}
    >
      <Resizable enable={edit ? able_img : enable} onResizeStop={onResizeStop} onResize={onResizeStop}>
        <img
          src={imageSrc}
          alt=""
          style={{ width: "100%", transform: `scaleX(${scaleX})`}}
          // className="webToonImage"
          onLoad={onLoad}
        />
      </Resizable>

      {edit && (
        <ImgEditableBox
          goUp={goUp}
          deleteImage={deleteImage}
          onClose={onClose}
          imgReverse={imgReverse}
        />
      )}
    </figure>
  );
};
export default ImageItem;

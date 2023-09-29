import React from "react";
// import "~/styles/input.css";
import Tooltip from "@mui/material/Tooltip";
import { ImagesOutline } from "react-ionicons";
import { useStyles } from "~/styles/Header";
import Images from "~/assets/js/images.js";

const Input = ({ onSelectFile, fileRef }) => {
  const classes = useStyles();
  return (
    <Tooltip title="Upload Photo" placement="bottom" followCursor>
      {/* <label className="label"> */}
      <label className={classes.toolBarBtn}>
        {/* 이미지를 첨부해주세요 */}
        <input
          type="file"
          name="file"
          accept="image/* svg"
          multiple
          onChange={onSelectFile}
          ref={fileRef}
          style={{ display: "none" }}
        />
        <img src={Images.icons.UPLOAD_IMAGES} className={classes.btnImg} />
      </label>
    </Tooltip>
  );
};
export default Input;

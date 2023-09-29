import React, { useState } from "react";
import { useStyles } from "~/styles/Header";
import Images from "~/assets/js/images.js";
import Input from "~/components/Input";
import Tooltip from "@mui/material/Tooltip";
import BubbleOption from "~/components/BubbleOption"

const Header = (props) => {
  const {
    onSelectFile,
    fileRef,
    onClickEdit,
    addInput,
    onSubmit,
    showOption,
    setShowOption,
  } = props
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.btnWrap}>
        <Input onSelectFile={onSelectFile} fileRef={fileRef} />

        <Tooltip title="Edit" placement="bottom" followCursor>
          <button 
            className={classes.toolBarBtn}
            onClick={onClickEdit}
            >
            <img src={Images.icons.EDIT} 
              className={classes.btnImg}
            />
            {/* Edit */}
          </button>  
        </Tooltip>

        <div style={{position:'relative'}}>
          <Tooltip title="Add Speech Bubbles" placement="bottom" followCursor>
            <button 
              className={classes.toolBarBtn}
              // onClick={addInput}
              // onMouseEnter={()=>setShowOption(true)}>
              onClick={()=>setShowOption(!showOption)}>
              <img src={Images.icons.ADD_BUBBLES} 
                className={classes.btnImg}
              />
              <img src={Images.icons.ARROW} 
                className={classes.arrow}
              />
            </button>  
          </Tooltip>

       
          {showOption && 
            <BubbleOption 
              addInput={addInput} />
          }
        </div>

        <Tooltip title="Download" placement="bottom" followCursor>
          <button 
            className={classes.toolBarBtn}
            onClick={onSubmit}
            >
            <img src={Images.icons.DOWNLOAD} 
              className={classes.btnImg}
            />
          </button>  
        </Tooltip>
      </div>

      <button className={classes.download} onClick={onSubmit}>Download</button>
    </div>
  )
}
export default Header;
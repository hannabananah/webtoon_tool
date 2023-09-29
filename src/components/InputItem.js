import React, { useState } from "react";
import { useStyles } from "~/styles/InputItem";
import EditableBox from "~/components/EditableBox";
// import "~/styles/itemSetting.css";
import "~/styles/inputItem.css";
import TextareaAutosize from "@mui/material/TextareaAutosize";
// import { ReactComponent as Tail } from "~/assets/images/tail.svg";
import { Resizable } from "re-resizable";
import { able, enable } from "~/util/resize_option.js";
import ContentEditable from "react-contenteditable";
import BubbleTail from "~/components/BubbleTail";

const InputItem = ({
  bubbleId,
  onMouseDown,
  inputName,
  inputId,
  value,
  edit,
  goUp,
  rotate,
  deleteInput,
  onClose,
  onDoubleClick,
  item,
  index,
  content,
  onChange,
  inputWidth,
  clearInput,
  rotateTail,
  onResizeStop,
}) => {
  const classes = useStyles();

  return (
    // <div
    //   className={`bubble bubble_${index} ${classes.root}`}
    //   id={bubbleId}
    //   onMouseDown={onMouseDown}
    //   onDoubleClick={onDoubleClick}
    //   style={{
    //     left: item.positionX,
    //     top: item.positionY,
    //     width: inputWidth,
    //   }}
    // >
    //   <Resizable
    //     enable={ edit ? able : enable}
    //     className={`${classes.resizeable} resizeable`}
    //     onResizeStop={onResizeStop}
    //     style={{
    //       borderColor: edit ? "red" : "transparent",
    //       padding:`${item.paddingVertical}px 0`,
    //     }}
    //     // size={{ w, h }}
    //     // onResizeStop={(e, direction, ref, d) => {
    //     //   setW(w + d.width);
    //     //   setH(h + d.height);
    //     // }}
    //   >
    //     <div className="contentEditableWrap">
    //       <View
    //         content={content}
    //         inputId={inputId}
    //         handleChanges={handleChanges}
    //       />
    //     </div>
    //   </Resizable>

    //   <BubbleTail item={item}/>

    //   {edit &&
    //     <EditableBox
    //       goUp={goUp}
    //       rotate={rotate}
    //       deleteInput={deleteInput}
    //       onClose={onClose}
    //       clearInput={clearInput}
    //       rotateTail={rotateTail}
    //     />}
    // </div>

    <div
      className={`bubble bubble_${index} ${classes.root}`}
      id={bubbleId}
      onMouseDown={onMouseDown}
      onDoubleClick={onDoubleClick}
      style={{
        left: item.positionX,
        top: item.positionY,
        width: inputWidth,
        right: item.positionRight,
      }}
    >
      <div
        style={{
          position: 'relative',
          cursor: edit ? 'move' : 'text', 
        }}>
    
        <Resizable
          enable={edit ? able : enable}
          className={`${classes.resizeable} resizeable`}
          onResize={onResizeStop}
          onResizeStop={onResizeStop}
          style={{
            visibility: edit ? "visible" : "hidden",
            position:'absolute',
          }}
        >
          <div className="contentEditableWrap">
            <View
              content={item.content}
              // inputId={inputId}
              disabled={true}
            />
          </div>
        </Resizable>

        <div
          className="contentWrap"
          style={{
            padding:`${item.paddingVertical}px 0`,
            width: item.width == 'auto' ? item.width : `${item.width}px`,
            visibility: edit ? "hidden" : "visible",
            // position:'absolute',
            // left:"0",
            // top:'50%',
            // transform:' translateY(-50%)',
            // width: "100%",

            boxSizing: "border-box",
          }}
        >
          <View
            inputId={inputId}
            content={content}
            onChange={onChange}
          />
        </div>
      </div>

      <BubbleTail item={item} />

      {edit && (
        <EditableBox
          goUp={goUp}
          rotate={rotate}
          deleteInput={deleteInput}
          onClose={onClose}
          clearInput={clearInput}
          rotateTail={rotateTail}
        />
      )}
    </div>
  );
};

const View = ({ inputId, content, onChange, disabled }) => {
  const classes = useStyles();
  return (
    <ContentEditable
      id={inputId}
      className={`${inputId} ta ${classes.textarea}`}
      placeholder="내용을 입력해주세요."
      onChange={onChange}
      html={content}
      disabled={disabled}
    />
  );
};
export default InputItem;

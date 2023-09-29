import React, { useState } from "react";
import Input from "~/components/Input";
import { useStyles } from "~/styles/SideMenu";
import Tooltip from "@mui/material/Tooltip";
import { ChatbubblesOutline } from "react-ionicons";
import { CloudUploadOutline } from "react-ionicons";
import { ConstructOutline } from "react-ionicons";
import OptionBar from "~/components/OptionBar";

const SideMenu = ({
  onSelectFile,
  fileRef,
  onClickEdit,
  addInput,
  onSubmit,
}) => {
  const classes = useStyles();
  const [barClick, setBarClick] = useState();
  return (
    <section className={classes.root}>
      <Input onSelectFile={onSelectFile} fileRef={fileRef} />
      <Tooltip title="Edit" placement="left" arrow>
        <button onClick={onClickEdit} className="label">
          <ConstructOutline color={"white"} />
        </button>
      </Tooltip>
      <Tooltip title="Add Speech Bubble" placement="left" arrow>
        <button onClick={() => setBarClick(!barClick)} className="label">
          <ChatbubblesOutline color={"white"} />
        </button>
      </Tooltip>
      <Tooltip title="Save" placement="left" arrow>
        <button onClick={onSubmit} className="label">
          <CloudUploadOutline color={"white"} />
        </button>
      </Tooltip>
      {barClick && <OptionBar addInput={addInput} />}
    </section>
  );
};
export default SideMenu;

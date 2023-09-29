import Tooltip from "@mui/material/Tooltip";
import { useStyles } from "~/styles/EditableBox";
import { SwapVerticalOutline } from "react-ionicons";
import { CameraReverseOutline } from "react-ionicons";
import { SwapHorizontalOutline } from "react-ionicons";
import { CloseOutline } from "react-ionicons";
import { TrashOutline } from "react-ionicons";
import Images from "~/assets/js/images";

const EditableBox = ({
  goUp,
  deleteInput,
  onClose,
  clearInput,
  rotateTail,
}) => {
  const classes = useStyles();
  return (
    <span className={classes.root}>
      <Tooltip title="to the front" placement="top" arrow>
        <button onClick={goUp} className={classes.editBtn}>
          <img
            src={Images.icons.LIFT_UP}
            alt=""
            className={classes.editBtnIcon}
          />
        </button>
      </Tooltip>
      <Tooltip title="Delete" placement="top" arrow>
        <button onClick={deleteInput} className={classes.editBtn}>
          <img
            src={Images.icons.DELETE}
            alt=""
            className={classes.editBtnIcon}
          />
        </button>
      </Tooltip>
      <Tooltip title="Tail Rotation" placement="top" arrow>
        <button onClick={rotateTail} className={classes.editBtn}>
          <img
            src={Images.icons.ROTATE}
            alt=""
            className={classes.editBtnIcon}
          />
        </button>
      </Tooltip>
      <Tooltip title="Clear text" placement="top" arrow>
        <button onClick={clearInput} className={classes.editBtn}>
          <img
            src={Images.icons.CLEAR_INPUT}
            alt=""
            className={classes.editBtnIcon}
          />
        </button>
      </Tooltip>
      <Tooltip title="Close" placement="top" arrow>
        <button onClick={onClose} className={classes.editBtn}>
          <img
            src={Images.icons.CLOSE}
            alt=""
            className={classes.editBtnIcon}
          />
        </button>
      </Tooltip>
    </span>
  );
};
export default EditableBox;

export const ImgEditableBox = ({ goUp, deleteImage, onClose, imgReverse }) => {
  const classes = useStyles();
  return (
    <span className={classes.root}>
      <Tooltip title="to the front" placement="top" arrow>
        <button onClick={goUp} className={classes.editBtn}>
          <img
            src={Images.icons.LIFT_UP}
            alt=""
            className={classes.editBtnIcon}
          />
        </button>
      </Tooltip>
      <Tooltip title="Delete" placement="top" arrow>
        <button onClick={deleteImage} className={classes.editBtn}>
          <img
            src={Images.icons.DELETE}
            alt=""
            className={classes.editBtnIcon}
          />
        </button>
      </Tooltip>
      <Tooltip title="Reverse" placement="top" arrow>
        <button onClick={imgReverse} className={classes.editBtn}>
          <img
            src={Images.icons.REVERSAL}
            alt=""
            className={classes.editBtnIcon}
          />
        </button>
      </Tooltip>
      <Tooltip title="Close" placement="top" arrow>
        <button onClick={onClose} className={classes.editBtn}>
          <img
            src={Images.icons.CLOSE}
            alt=""
            className={classes.editBtnIcon}
          />
        </button>
      </Tooltip>
    </span>
  );
};

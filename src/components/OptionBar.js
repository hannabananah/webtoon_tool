import { useStyles } from "~/styles/OptionBar";
import Tooltip from "@mui/material/Tooltip";
import { ReactComponent as SVGBubble1 } from "~/assets/images/bubbleIcon.svg";
import { ReactComponent as SVGBubble2 } from "~/assets/images/bubbleCloud.svg";
import { ReactComponent as SVGBubble3 } from "~/assets/images/bubbleStar.svg";

const OptionBar = ({ addInput }) => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.buttonLayout}>
          <Tooltip title="normal" placement="bottom" arrow>
            <button onClick={addInput} className={classes.buttonStyle}>
              <SVGBubble1 width={50} height={50} />
            </button>
          </Tooltip>
          <Tooltip title="thinking" placement="bottom" arrow>
            <button onClick={addInput} className={classes.buttonStyle}>
              <SVGBubble2 width={50} height={50} />
            </button>
          </Tooltip>
          <Tooltip title="star shape" placement="bottom" arrow>
            <button onClick={addInput} className={classes.buttonStyle}>
              <SVGBubble3 width={50} height={50} />
            </button>
          </Tooltip>
      </div>
    </section>
  );
};
export default OptionBar;

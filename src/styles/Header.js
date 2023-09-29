import { makeStyles } from "@material-ui/styles";
import Images from "~/assets/js/images.js";

export const useStyles = makeStyles({
  root: {
    position: "sticky",
    top: 0,
    zIndex: 999,
    backgroundColor: "#353E50",
    display: "flex",
    justifyContent: "center",
    // padding:'20px 30px',
    // position: "relative",
  },
  download: {
    backgroundColor: "transparent",
    border: "1px solid #fff",
    color: "#fff",
    borderRadius: "20px",
    lineHeight: "15px",
    padding: "6px 25px",
    fontSize: "12px",
    position: "absolute",
    right: "30px",
    top: "50%",
    transform: "translateY(-50%)",
  },
  btnWrap: {
    height: "100%",
    display: "flex",
  },
  toolBarBtn: {
    backgroundColor: "transparent",
    width: "30px",
    padding: "20px 20px",
    boxSizing: "content-box",
    border: "none",
    "&:hover": {
      backgroundColor: "#1D222C",
    },
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  arrow: {
    position: "absolute",
    right: "6px",
    top: "50%",
    transform: "translateY(-50%)",
  },
  btnImg: {
    width: "100%",
  },

  bubbleOptionWrap: {
    position: "absolute",
    zIndex: "999999",
    top: "calc(100% + 20px)",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#353E50",
    padding: "10px",
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    width: "80px",
    "&:before": {
      content: `''`,
      position: "absolute",
      width: "16px",
      height: "16px",
      backgroundColor: "transparent",
      left: "50%",
      bottom: "calc(100% - 8px)",
      transform: "translateX(-50%) rotate(-45deg)",
      border: "8px solid",
      boxSizing: "border-box",
      borderColor: "#353E50 #353E50 transparent transparent",
    },
  },
  bubble_tail_left_top: {
    width: "20px",
    // "&:hover":{
    //   backgroundColor:'salmon'
    // }
  },
  bubble_tail_center_top: {
    width: "20px",
  },
  bubble_tail_right_top: {
    width: "20px",
    transform: "scaleX(-1)",
  },
  bubble_tail_left_bottom: {
    width: "20px",
    transform: "scaleY(-1)",
  },
  bubble_tail_center_bottom: {
    width: "20px",
    transform: "scaleY(-1)",
  },
  bubble_tail_right_bottom: {
    width: "20px",
    transform: "scaleX(-1) scaleY(-1)",
  },
});

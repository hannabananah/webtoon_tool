import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  editFigure: {
    display: "inline-block",
    position: "absolute",
    "&::before": {
      content: `''`,
      position: 'absolute',
      backgroundColor: 'transparent',
      left: '50%',
      top: '50%',
      transform:'translate(-50%,-50%)',
      border: "2px dashed rgba(124, 77, 255, 0.5)",
      width:'calc(100% + 20px)',
      height:'calc(100% + 20px)',
    }
  },
  figure: {
    display: "inline-block",
    position: "absolute",
    cursor: "grab",
    // padding: 10,
    // border: "2px dashed transparent",
  },
});

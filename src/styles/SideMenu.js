import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  root: {
    display: "inline-flex",
    padding:"50px 10px 0",
    flexDirection: "column",
    rowGap: 20,
    position: "sticky",
    background:'#333',
    position: "fixed",
    left:0,
    top:0,
    bottom:0,
    zIndex:1,
  },
});

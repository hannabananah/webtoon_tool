import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
    width: 200,
    height: "100vh",
    position: "absolute",
    top: 54.39,
    left: 72,
    borderRight: "1px solid #bebebe",
  },
  buttonLayout: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  buttonStyle: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    border: "none",
    cursor: "pointer",
    margin: "10px 5px",
    padding: 0,
  },
});

import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    bottom: "calc(100% + 10px)",
    right: "0",
    gap: "5px",
    backgroundColor: '#353E50'
  },
  resizeable: {
    display: "flex",
    flexDirection:'column',
    alignItems: "center",
    justifyContent: "center",
  },
  textarea: {
    position:'relative',
    width:'100%',
    height:'100%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    outline:'none',
    wordBreak:'break-all',
    lineHeight:'22px'
  },
  editorBar: {
    display: "flex",
    gap: "5px",
    justifyContent: "flex-end",
    position: "absolute",
    right: 0,
    bottom: "calc(100% + 5px)",
  },
  editBtn: {
    height:'18px',
    backgroundColor:'transparent',
    border:'none',
    padding:'7px',
    boxSizing:'content-box'
  },
  editBtnIcon: {
    height:'100%',
  }
});

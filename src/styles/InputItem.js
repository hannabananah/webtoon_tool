import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  root: {
    border:'1px solid #000',
    padding:'20px',
    display:'inline-block',
    position: 'absolute',
    backgroundColor:'#fff',
    borderRadius:'50%',
  },
  // resizeable: {
  //   display: "flex",
  //   flexDirection:'column',
  //   alignItems: "center",
  //   justifyContent: "center",
    
  //   borderWidth: "2px",
  //   borderStyle: "dashed",

  //   // boxSizing: "content-box !important",
  // },

  resizeable: {
    display: "flex",
    flexDirection:'column',
    alignItems: "center",
    justifyContent: "center",

    top:'50%',
    transform:' translateY(-50%)',
    width: "100%",

    "&:before": {
      content:`''`,
      position:'absolute',
      width:'100%',
      height:'100%',
      left:'50%',
      top:'50%',
      transform:'translate(-50%,-50%)',
      backgroundColor:'transparent',
      border:'1.5px dashed red',
    },
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
    wordBreak:'break-word',
    lineHeight:'22px'
  },
});

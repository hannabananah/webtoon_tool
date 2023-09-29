import { makeStyles } from "@material-ui/styles";
import Images from "~/assets/js/images.js";

export const useStyles = makeStyles({
  root: {
    position:'fixed', 
    left:0,
    right:0,
    top:0,
    bottom:0, 
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(255,255,255,.3)',
    zIndex:'9999999'
  },
  iconContainer: {
    position:'relative'
  }
});

export const checkFavSx = {
  backgroundColor: "green"
}
export const saveFavSx = {
  backgroundColor: "rgba(25,118,210)"
}
export const circularSx = {
  position: "absolute",
  top: -6,
  left: -6,
  zIndex: 1,
}

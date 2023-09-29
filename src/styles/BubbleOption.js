import { makeStyles } from "@material-ui/styles";
import Images from "~/assets/js/images.js";

export const useStyles = makeStyles({
  root:{
    position:'absolute', 
    zIndex:'999999',
    top:'calc(100% + 20px)',
    left:'50%', 
    transform:'translateX(-50%)', 
    backgroundColor:'#353E50',
    padding:'10px',
    display:'flex',
    gap:'10px',
    flexWrap:'wrap',
    // width:'80px', // 초기 디자인
    width:'50px',
    "&:before": {
      content:`''`,
      position:'absolute',
      width: '16px',
      height: '16px',
      backgroundColor: 'transparent',
      left: '50%',
      bottom: 'calc(100% - 10px)',
      transform: 'translateX(-50%) rotate(-45deg)',
      border:'8px solid',
      boxSizing:'border-box',
      borderColor:'#353E50 #353E50 transparent transparent',
    }
  },
  bubble_tail_left_top:{
    width:'20px',
    // "&:hover":{
    //   backgroundColor:'salmon'
    // }
  },
  bubble_tail_center_top:{
    width:'20px'
  },
  bubble_tail_right_top:{
    width:'20px',
    transform:'scaleX(-1)',
  },
  bubble_tail_left_bottom:{
    width:'20px',
    transform:'scaleY(-1)',
  },
  bubble_tail_center_bottom:{
    width:'20px',
    transform:'scaleY(-1)',
  },
  bubble_tail_right_bottom:{
    width:'20px',
    transform:'scaleX(-1) scaleY(-1)',
  },

  
  bottom:{
    width:'20px',
  },
  top:{
    width:'20px',
    transform:'scaleY(-1)',
  },
  left:{
    width:'20px',
    transform:'rotate(90deg)',
  },
  right:{
    width:'20px',
    transform:'rotate(-90deg)',
  }
});

import { useStyles } from "~/styles/BubbleOption";
import Images from "~/assets/js/images.js";

const bubbleShapeMap = {
  circle: "circle",
  square: "square",
}

const bubbleTailMap = {
  bottom_triangle: "bottom_triangle",
  top_triangle: "top_triangle",
  left_triangle: "left_triangle",
  right_triangle: "right_triangle",
  none:"none",
}
const option = (shape, pos_type) => {
  return (
    {
      shape: shape,
      pos_type: pos_type,
    }
  )
}

// const bubbleTailMap = {
//   bubbleShape: {
//     basic_circle: "basic_circle",
//   },
//   position: {
//     tail_tail_left_top: "tail_tail_left_top",
//     tail_center_top: "tail_center_top",
//     tail_right_top: "tail_right_top",
//     tail_left_bottom: "tail_left_bottom",
//     tail_center_bottom: "tail_center_bottom",
//     tail_right_bottom: "tail_right_bottom",
//     none: "none",
//   },
//   type: {
//     right_triangle: "right_triangle", // 직삼각형
//     equilateral_triangle: "equilateral_triangle", //정삼각형
//     none:"none",
//   },
//   shape: {
//     inclined_left: "inclined_left",
//     inclined_right: "inclined_right",
//     none:"none",
//   }
// }

// const option = (position,type,shape) => {
//   return (
//     {
//       position: position,
//       type: type,
//       shape: shape,
//     }
//   )
// }

console.log(bubbleTailMap)

const BubbleOption = ({addInput}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img 
        src={Images.icons.SELECT_BUBBLE_TAIL} 
        className={classes.bottom}
        onClick={()=>addInput(option(
          bubbleShapeMap.circle,
          bubbleTailMap.bottom_triangle
        ))}
      />
      <img 
        src={Images.icons.SELECT_BUBBLE_TAIL} 
        className={classes.top}
        onClick={()=>addInput(option(
          bubbleShapeMap.circle,
          bubbleTailMap.top_triangle
        ))}
      />
      <img 
        src={Images.icons.SELECT_BUBBLE_TAIL} 
        className={classes.left}
        onClick={()=>addInput(option(
          bubbleShapeMap.circle,
          bubbleTailMap.left_triangle
        ))}
      />
      <img 
        src={Images.icons.SELECT_BUBBLE_TAIL} 
        className={classes.right}
        onClick={()=>addInput(option(
          bubbleShapeMap.circle,
          bubbleTailMap.right_triangle
        ))}
      />
      


      {/* <img 
        src={Images.icons.SELECT_BUBBLE_TAIL_EDGE} 
        className={classes.bubble_tail_left_top}
        onClick={()=>addInput(option(
          bubbleTailMap.position.tail_center_bottom, 
          bubbleTailMap.type.right_triangle, 
          bubbleTailMap.shape.inclined_left
        ) )}
      />
      <img 
        src={Images.icons.SELECT_BUBBLE_TAIL_CENTER} 
        className={classes.bubble_tail_center_top}
        onClick={()=>addInput(option(
          bubbleTailMap.position.tail_center_bottom, 
          bubbleTailMap.type.right_triangle, 
          bubbleTailMap.shape.inclined_left
        ) )}
      />
      <img 
        src={Images.icons.SELECT_BUBBLE_TAIL_EDGE} 
        className={classes.bubble_tail_right_top}
        onClick={()=>addInput(option(
          bubbleTailMap.position.tail_center_bottom, 
          bubbleTailMap.type.right_triangle, 
          bubbleTailMap.shape.inclined_left
        ) )}
      />
      <img 
        src={Images.icons.SELECT_BUBBLE_TAIL_EDGE} 
        className={classes.bubble_tail_left_bottom}
        onClick={()=>addInput(option(
          bubbleTailMap.position.tail_center_bottom, 
          bubbleTailMap.type.right_triangle, 
          bubbleTailMap.shape.inclined_left
        ) )}
      />
      <img 
        src={Images.icons.SELECT_BUBBLE_TAIL_CENTER} 
        className={classes.bubble_tail_center_bottom}
        onClick={()=>addInput(option(
          bubbleTailMap.position.tail_center_bottom, 
          bubbleTailMap.type.right_triangle, 
          bubbleTailMap.shape.inclined_left
        ) )}
      />
      <img 
        src={Images.icons.SELECT_BUBBLE_TAIL_EDGE} 
        className={classes.bubble_tail_right_bottom}
        onClick={()=>addInput(option(
          bubbleTailMap.position.tail_center_bottom, 
          bubbleTailMap.type.right_triangle, 
          bubbleTailMap.shape.inclined_left
        ) )}
      /> */}
    </div>
  )
}
export default BubbleOption;
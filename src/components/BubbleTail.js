import { useStyles } from '~/styles/BubbleTail'

const BubbleTail = ({item}) => {
    const classes = useStyles();
    console.log(item)

    // const root = () =>{
    //    if (item.tailTypeAndPosition == "bottom_triangle") {
    //     return classes.root_bottom
    //    } else if (item.tailTypeAndPosition == "top_triangle") {
    //     return classes.root_top
    //    } else if (item.tailTypeAndPosition == "left_triangle") {
    //     return classes.root_left
    //    } else if (item.tailTypeAndPosition == "right_triangle") {
    //     return classes.root_right
    //    }
    // }

    let root
    if (item.tailTypeAndPosition == "bottom_triangle") {
        root = classes.root_bottom
    } else if (item.tailTypeAndPosition == "top_triangle") {
        root = classes.root_top
    } else if (item.tailTypeAndPosition == "left_triangle") {
        root = classes.root_left
    } else if (item.tailTypeAndPosition == "right_triangle") {
        root = classes.root_right
    }
   
    return (
        <div className={root}></div>
    )
}
export default BubbleTail;
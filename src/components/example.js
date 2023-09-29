import React from "react";
import Draggable from "react-draggable";
import "~/assets/css/drag.css";
import { useState, useRef } from "react";

const Example = () => {
  // const [el, setEl] = useState([])
  const nodeRef = useRef(null);
  const [positionImg, setPositionImg] = useState({ x: 0, y: 0 });
  const [positionText, setPositionText] = useState({ x: 0, y: 0 });

  const trackPosImg = (data) => {
    setPositionImg({ x: data.x, y: data.y });
  };
  const trackPosText = (data) => {
    setPositionText({ x: data.x, y: data.y });
  };
  const handleStart = () => {
    // setOpacity(true);
  };
  const handleEnd = () => {
    // setOpacity(false);
  };

  console.log(nodeRef)
  
  return (
    <div style={{ height: "100vh" }}>
      <Draggable
        nodeRef={nodeRef}
        onStart={handleStart}
        onDrag={(e, data) => trackPosImg(data)}
        onStop={handleEnd}
        bounds="parent"
      >
        <div ref={nodeRef} className="box1">
          x: {positionImg.x.toFixed(0)}, y: {positionImg.y.toFixed(0)}
        </div>
        {/* <img ref={nodeRef} className="box" src="https://picsum.photos/200/300" /> */}
      </Draggable>

      <Draggable
        nodeRef={nodeRef}
        onStart={handleStart}
        onDrag={(e, data) => trackPosText(data)}
        onStop={handleEnd}
        bounds="parent"
      >
        <div ref={nodeRef} className="box2">
          {/* x: {positionText.x.toFixed(0)}, y: {positionText.y.toFixed(0)} */}
          이것은 말풍선이고 이곳에 텍스트가 위치합니다. 이것은 말풍선이고 이곳에
          텍스트가 위치합니다. 이것은 말풍선이고 이곳에 텍스트가 위치합니다.
          이것은 말풍선이고 이곳에 텍스트가 위치합니다.
        </div>
        {/* <img ref={nodeRef} className="box" src="https://picsum.photos/200/300" /> */}
      </Draggable>
    </div>
  );
};

// class Example extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       width: 202,
//       height: 302,
//       x: 0,
//       y: 300,
//     };
//   }
//   render() {

//     return (
//       <div>
//         <Draggable
//           // axis="both"
//           // handle=".handle"
//           defaultPosition={{ x: 0, y: 0 }}
//           // position={null}
//           grid={[1, 1]}
//           // scale={1}
//           onStart={this.handleStart}
//           onDrag={this.handleDrag}
//           onStop={this.handleStop}
//         >
//           <div>
//             <div className="handle box"></div>
//           </div>
//           {/* <img className="handle box" src="https://picsum.photos/200/300" /> */}
//         </Draggable>
//       </div>
//     );

//   }
// }
export default Example;

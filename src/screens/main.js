import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  createRef,
} from "react";
import axios from "axios";
// import "~/styles/input.css";
import { useStyles } from "~/styles/Main";
// import "~/styles/main.css";
import Draggable from "react-draggable";
import "~/assets/css/drag.css";
import "~/assets/css/scrollTop.css";
import html2canvas from "html2canvas";
import InputItem from "~/components/InputItem";
import ImageItem from "~/components/ImageItem";
// import SideMenu from "./layout/SideMenu";
import Header from "~/screens/layout/Header";
import g from "~/util/global";
import LoadingOverlay from "~/components/LoadingOverlay";
import ScrollTop from "react-scrolltop-button";

const Main = () => {
  const classes = useStyles();
  const fileRef = useRef();
  const [files, setFiles] = useState([]); // 서버로 보낼 이미지 데이터
  const [previewFiles, setPreviewFiles] = useState([]); // 프리뷰 보여줄 이미지 데이터
  const [inputItems, setInputItems] = useState([]);
  const [edit, setEdit] = useState(false); // 편집 여부 state
  const [tool, setTool] = useState(true); // 사이드 툴바 state
  const [currZIndex, setCurrZIndex] = useState(1);
  const imageId = useRef(0);
  const nextId = useRef(0);
  const [transRes, setTransRes] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showOption, setShowOption] = useState(false);
  const [shape, setShape] = useState(false);

  const root = document.querySelector("#root");
  const canvasRoot = document.querySelector("#canvasRoot");
  const layer = document.getElementById("layer");
  const windowScrollTop = document.documentElement.scrollTop;
  const windowScrollHeight = document.documentElement.clientHeight;

  // 말풍선 추가
  const addInput = (option) => {
    // console.log("option---------------", option);
    const input = {
      id: nextId.current,
      content: "",
      zIndex: "auto",
      width: "auto",
      positionX: eval(`300+${nextId.current * 10}`) + "px",
      positionY: eval(`200+${nextId.current * 10 + window.pageYOffset}`) + "px",
      positionRight: 'auto',
      visible: true,
      paddingVertical: 0,
      paddingHorizontal: 0,
      transLang: "",
      bubbleShape: option.shape,
      tailTypeAndPosition: option.pos_type,
      // bubbleShape: "circle",
      // tailPosition: option.position,
      // tailType: option.type,
      // tailShape: option.shape,
    };
    setInputItems([...inputItems, input]);
    nextId.current += 1;
  };
  // 말풍선 input onChange
  const handleChanges = (e, index, id) => {
    const inputItemsCopy = JSON.parse(JSON.stringify(inputItems));
    inputItemsCopy[index].content = e.target.value;
    inputItemsCopy[index].width = "auto";
    setInputItems(inputItemsCopy);
  };
  // 사진 선택
  const onSelectFile = (e) => {
    Array.from(e.target.files).map((file, index) => {
      if (file.type.split("/")[0] === "image") {
        let images = [];
        images.push({
          id: imageId.current,
          src: URL.createObjectURL(file),
          type: file.type.split("/")[0],
          visible: true,
          positionX: eval(`200+${imageId.current * 10}`) + "px",
          positionY:
            eval(`100+${imageId.current * 10 + window.pageYOffset}`) + "px",
          zIndex: "auto",
          scaleX: 1,
        });
        setPreviewFiles((pre) => pre.concat(images));
        setFiles((pre) => pre.concat(file));
      }
      imageId.current += 1;
    });
    fileRef.current.value = "";
  };
  // 이미지 로드 함수
  const onLoad = (e, index) => {
    const new_data = JSON.parse(JSON.stringify(previewFiles));
    new_data[index].width = e.target.naturalWidth + "px";
    setPreviewFiles(new_data);
  };
  // 말풍선 삭제
  const deleteInput = (id) => {
    setInputItems(inputItems.filter((i) => i.id !== id));
    setShape(!shape);
  };
  //
  const shaping = () => {
    // 삭제 후 남아있는 말풍선들 중
    const resizeables = document.querySelectorAll(".resizeable");
    for (let i = 0; i < resizeables.length; i++) {
      resizeables[i].style.width =
        resizeables[i].parentElement.clientWidth + 0.13 + "px";
      resizeables[i].style.height =
        resizeables[i].nextSibling.clientHeight + "px";
    }
  };
  useEffect(() => {
    const resizeables = document.querySelectorAll(".resizeable");
    if (resizeables) {
      shaping();
    }
  }, [shape]);

  // 이미지 삭제
  const deleteImage = (index, id) => {
    setFiles(files.filter((item, idx) => index !== idx));
    setPreviewFiles(previewFiles.filter((item, idx) => item.id !== id));
  };
  // 이미지 리사이즈
  const onResizeStopImage = (e, direction, ref, d, index, id) => {
    const new_data = JSON.parse(JSON.stringify(previewFiles));
    new_data[index].width = ref.style.width;
    setPreviewFiles(new_data);
  };
  // 인풋 리사이즈
  const onResizeStopInput = (e, direction, ref, d, index, id) => {
    const width = ["right", "left"];
    const height = ["top", "bottom"];
    const widthAndHeight = ["bottomRight", "bottomLeft", "topLeft", "topRight"];
    // 콘솔에는 86 스크립트에는 90으로 나옴 (콘솔대로 하면 됨)
    // const contentsHeight = document.querySelector('.contentEditableWrap').clientHeight
    // console.log('contentEditableWrap height -------------',contentsHeight)

    const resizeables = document.querySelectorAll(".resizeable");
    const contents = document.querySelectorAll(".contentEditableWrap");
    const contentWrap = document.querySelectorAll(".contentWrap");

    const inputItemsCopy = JSON.parse(JSON.stringify(inputItems));
    const targetIdx = inputItemsCopy.findIndex((item) => item.id == id);
    const resizeableHeight = resizeables[targetIdx].clientHeight;
    const contentHeight = contents[targetIdx].clientHeight;
    const paddingVertical = (resizeableHeight - contentHeight) / 2;
    const resizeableWidth = resizeables[targetIdx].clientWidth;

    if (width.includes(direction)) {
      // 가로 길이
      inputItemsCopy[targetIdx].width = resizeableWidth;
      setInputItems(inputItemsCopy);
    }
    if (height.includes(direction)) {
      // 세로 길이
      inputItemsCopy[targetIdx].paddingVertical = paddingVertical;
      setInputItems(inputItemsCopy);
    }
    if (widthAndHeight.includes(direction)) {
      // 가로 세로 길이
      inputItemsCopy[targetIdx].width = resizeableWidth;
      inputItemsCopy[targetIdx].paddingVertical = paddingVertical;
      setInputItems(inputItemsCopy);
    }
  };
  // 말풍선 내용 지우기
  const clearInput = (index, id) => {
    const inputItemsCopy = JSON.parse(JSON.stringify(inputItems));
    inputItemsCopy[index].content = "";
    setInputItems(inputItemsCopy);

    setEdit(false);
    // input focus 주기
    // 나중에 setTimeout 없애고 동기적으로 해결해야함.
    setTimeout(() => {
      document.querySelector(`#textarea_${id}`).focus();
    }, 100);
  };
  // 이미지 좌우반전
  const imgReverse = (index) => {
    const new_data = JSON.parse(JSON.stringify(previewFiles));
    new_data[index].scaleX = new_data[index].scaleX == 1 ? -1 : 1;
    setPreviewFiles(new_data);
  };
  // 말풍선 꼬리 위치 변경
  const rotateTail = (index) => {
    // 1. 이동 순서
    const posMap = [
      "bottom_triangle",
      "left_triangle",
      "top_triangle",
      "right_triangle",
    ];
    // posMap에 4번째는 없기 때문에 에러가 남

    // 2. 현재 tailTypeAndPosition 이 뭔지 알아야 함
    const curr = inputItems[index].tailTypeAndPosition;
    const currNum = posMap.indexOf(inputItems[index].tailTypeAndPosition);

    let rotateNum;
    if (currNum > 2) {
      rotateNum = 0;
    } else {
      rotateNum = currNum + 1;
    }
    const inputItemsCopy = JSON.parse(JSON.stringify(inputItems));
    inputItemsCopy[index].tailTypeAndPosition = posMap[rotateNum];
    setInputItems(inputItemsCopy);
  };
  // 이미지,말풍선 위로 올리기 (z-index 올리기)
  const goUp = (id, type) => {
    setCurrZIndex((pre) => pre + 1);
    if (type == "input") {
      document.querySelector(`#speechBubble_${id}`).style.zIndex = currZIndex;
    } else if (type == "image") {
      document.querySelector(`#image_${id}`).style.zIndex = currZIndex;
    }
  };

  let img_L = 0;
  let img_T = 0;
  let targetObj;

  // 이미지 움직이기
  const moveDrag = (e) => {
    let e_obj = window.event ? window.event : e;
    let dmvx = parseInt(e_obj.clientX + img_L);
    let dmvy = parseInt(e_obj.clientY + img_T);
    targetObj.style.left = dmvx + "px";
    targetObj.style.top = dmvy + "px";
    return false;
  };

  // 드래그 멈추기
  const stopDrag = () => {
    document.onmousemove = null;
    document.onmouseup = null;

    canvasRoot.style.height = windowScrollTop + windowScrollHeight + 800 + "px";
    trackPos();
  };

  const trackPos = () => {
    // if (targetObj == document.querySelectorAll(".bubble")) {
    const new_data = inputItems.map((item, index) => {
      const speechBubble = document.defaultView
      .getComputedStyle(document.querySelector(`#speechBubble_${item.id}`));

      const { ...other } = item;
      return {
        ...other,
        positionX: speechBubble.getPropertyValue("left"),
        positionY: speechBubble.getPropertyValue("top"),
      };
    });
    setInputItems(new_data);
    // } else {
    const new_preview = previewFiles.map((item, index) => {
      const image = document.defaultView
      .getComputedStyle(document.querySelector(`#image_${item.id}`));

      const { ...other } = item;
      return {
        ...other,
        positionX: image.getPropertyValue("left"),
        positionY: image.getPropertyValue("top"),
      };
    });
    setPreviewFiles(new_preview);
    // }
  };

  const getLeft = (o) => {
    console.log("o--------------------------------", o);
    return window.pageXOffset + o.getBoundingClientRect().left;
    // parseInt(o.style.left.replace('px', ''));
  };

  const getTop = (o) => {
    return window.pageYOffset + o.getBoundingClientRect().top;
    // parseInt(o.style.top.replace('px', ''));
  };

  // 드래그 시작
  const startDrag = (e, id, type) => {
    // e.preventDefault();
    let obj;

    if (type == "input") {
      obj = document.querySelector(`#speechBubble_${id}`);
    } else if (type == "image") {
      obj = document.querySelector(`#image_${id}`);
    }

    targetObj = obj;
    let e_obj = window.event ? window.event : e;
    img_L = getLeft(obj) - e_obj.clientX;
    img_T = getTop(obj) - e_obj.clientY;

    document.onmousemove = moveDrag;
    document.onmouseup = stopDrag;

    // if(e_obj.preventDefault)e_obj.preventDefault();
  };

  // 편집 모드
  const onClickEdit = () => {
    setEdit(!edit);
  };

  // 편집 모드
  const onDoubleClick = (e, index) => {
    setEdit(true);
  };

  useEffect(() => {
    if (edit) {
      const resizeables = document.querySelectorAll(".resizeable");
      for (let i = 0; i < resizeables.length; i++) {
        resizeables[i].style.width =
          resizeables[i].parentElement.clientWidth + 0.13 + "px";
      }
    }
  }, [edit]);

  // 편집 모드 해제
  const handleOutsideClick = (e) => {
    if (e.target == layer) {
      setEdit(false);
      setShowOption(false);
    }
  };

  // esc 누를시 편집 모드 해제
  document.addEventListener("keydown", (e) => {
    if (e.key == "Escape") setEdit(false);
  });

  // 3. 번역 api
  const transData = async (text) => {
    const src_text = text.map((i, index) => {
      const arr = {
        id: `txt_${index}`,
        src_text_each: i.content
          .replace(/<(\/div|div)([^>]*)>/gi, "")
          .replace("&nbsp;", ""), // div(줄바꿈) 태그,&nbsp; 제거
      };
      return arr;
    });
    console.log("src_text-------------------------", src_text);

    const response = await axios
      .post(
        g.url.multiple_trans,
        {
          src_lang: "ko",
          src_text: src_text,
          tgt_lang: g.multiple_lang,
        },
        {
          headers: {
            Authorization: g.Authorization,
          },
        }
      )
      .then((response) => {
        setTransRes(response.data.tgt_text);
        setTool(false); // --> 캡쳐
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log("transRes::::::::::::::::::::::::::::::::", transRes);

  // 1. 저장
  const onSubmit = async () => {
    // 1. 말풍선 width를 지정해 주고 (height는 지정하면 안 됨) 
    // 2. 번역을 하고 
    // 3. 말풍선에 번역된 텍스트를 넣어주고 
    // 4. 캡쳐를 해야함 (3->4 동기적으로 반복)

    setIsloading(true); // 로딩
    setEdit(false); // 편집 모드 해제

    // 줄바꿈(div태그) 때문에 강제로 말풍선 width값 줌, 줄바꿈이 없다면 width는 auto
    // 꼬리가 오른쪽인 말풍선 일 때 기준점 오른쪽으로 잡아주기
    const confirmInput = inputItems.map((item, index) => {
      const { ...other } = item;
      return {
        ...other,
        width: item.content.includes("<div>")
          ? document.defaultView
              .getComputedStyle(document.querySelectorAll(`.bubble`)[index])
              .getPropertyValue("width")
          : "auto",
        positionX: item.tailTypeAndPosition == "right_triangle" ? 'auto' : document.defaultView
        .getComputedStyle(document.querySelector(`#speechBubble_${item.id}`))
        .getPropertyValue("left"),
        positionRight: item.tailTypeAndPosition == "right_triangle" && 
        document.defaultView
          .getComputedStyle(document.querySelector(`#speechBubble_${item.id}`))
          .getPropertyValue("right"),
      };
    });
    setInputItems(confirmInput);
    setSubmit(true);
  };

  // 2. 번역 함수 실행
  useEffect(() => {
    if (submit) transData(inputItems); // --> 번역 api 실행
    // return () => {
    //   setSubmit(false);
    // };
  }, [submit]);

  // 4.
  useEffect(() => {
    if (!tool) {
      canvasRoot.style.height =
        root.scrollHeight + 200 + "px";
      makingPic();
    }
    // return () => {
    //   setTool(true);
    // };
  }, [tool]);

  const capture = async (target_lang, index) => {
    console.log(
      `capture ----------------------->>>>>>>>>> ${index}`
    );
    // const layer = document.getElementById("layer");
    let link = document.createElement("a");
    await html2canvas(layer).then((canvas) => {
      document.body.appendChild(link);
      link.href = canvas.toDataURL("image/png");
      link.download = `image-download-${target_lang}.png`;
      link.click();
      document.body.removeChild(link);
    });
  };

  const insertTrans = (idx, result) => {
    const new_data = inputItems.map((item, index) => {
      const { ...other } = item;
      return {
        ...other,
        content: result[idx].trans[index][0],
      };
    });
    setInputItems(new_data);
  };

  const transObj = (lang) => {
    const eachLang = transRes.filter(
      (item, index) => item.tgt_lang_each == lang
    );
    const langArr = eachLang.map((item, index) => {
      return [item.tgt_text_each];
    });
    const res = {
      lang: lang,
      trans: langArr,
    };
    return res;
  };

  // 5. 말풍선에 번역 텍스트 insert -> 캡쳐 반복
  const makingPic = () => {
    const result = g.multiple_lang.map((lang, index) => {
      return transObj(lang.id);
    });
    console.log("result--------------", result);

    capture("ko") // 한국어 캡쳐
      .then(async () => {
        for (const [index, item] of result.entries()) {
          await fetch(insertTrans(index, result));
          await fetch(capture(item.lang, index));
        }
      })
      .then(() => {
        setSuccess(true);

        const new_data = inputItems.map((item, index) => {
          const { ...other } = item;
          return {
            ...other,
            positionX: item.tailTypeAndPosition == "right_triangle" && 
            document.defaultView
              .getComputedStyle(document.querySelector(`#speechBubble_${item.id}`))
              .getPropertyValue("left"),
            positionRight: 'auto',
          };
        });
        setInputItems(new_data);
      });
  };
  // console.log("files=======================", files);
  console.log("previewFiles=======================", previewFiles);
  console.log("inputItems-------------------------", inputItems);

  return (
    <div id="canvasRoot" className={classes.root} onClick={handleOutsideClick}>
      {isLoading && (
        <LoadingOverlay
          isLoading={isLoading}
          setIsloading={setIsloading}
          success={success}
          setSuccess={setSuccess}
        />
      )}

      <section id="container" className={classes.container}>
        <Header
          onSelectFile={onSelectFile}
          fileRef={fileRef}
          onClickEdit={onClickEdit}
          addInput={addInput}
          onSubmit={onSubmit}
          files={files}
          showOption={showOption}
          setShowOption={setShowOption}
        />

        <div className={classes.layerContainer}>
          <div
            className={`${classes.layer} layer`}
            id="layer"
            style={{ marginLeft: "12px" }} // 스크롤바 width
          >
            {previewFiles.map((item, index) => {
              return (
                <ImageItem
                  key={index}
                  imageId={`image_${item.id}`}
                  onMouseDown={(e) => startDrag(e, item.id, "image")}
                  imageSrc={item.src}
                  edit={edit}
                  goUp={() => goUp(item.id, "image")}
                  imgReverse={() => imgReverse(index)}
                  deleteImage={() => deleteImage(index, item.id)}
                  onClose={() => setEdit(false)}
                  onDoubleClick={(e) => onDoubleClick(e, item.id)}
                  onLoad={(e) => onLoad(e, index)}
                  figureWidth={item.width}
                  onResizeStop={(e, direction, ref, d) =>
                    onResizeStopImage(e, direction, ref, d, index, item.id)
                  }
                  top={item.positionY}
                  left={item.positionX}
                  scaleX={item.scaleX}
                />
              );
            })}

            {inputItems.map((item, index) => {
              return (
                <InputItem
                  key={index}
                  bubbleId={`speechBubble_${item.id}`}
                  // onMouseDown={
                  //   !edit ? (e) => startDrag(e, item.id, "input") : null
                  // }
                  onMouseDown={(e) => startDrag(e, item.id, "input")}
                  onDoubleClick={(e) => onDoubleClick(e, item.id)}
                  // inputName={`textarea_${item.id}`}
                  inputId={`textarea_${item.id}`}
                  content={item.content}
                  value={item.content}
                  onClose={() => setEdit(false)}
                  goUp={() => goUp(item.id, "input")}
                  deleteInput={() => deleteInput(item.id)}
                  edit={edit}
                  item={item}
                  index={index}
                  onChange={(e) => handleChanges(e, index, item.id)}
                  inputWidth={item.width}
                  clearInput={() => clearInput(index, item.id)}
                  rotateTail={() => rotateTail(index)}
                  onResizeStop={(e, direction, ref, d) =>
                    onResizeStopInput(e, direction, ref, d, index, item.id)
                  }
                />
              );
            })}
          </div>
        </div>
        <ScrollTop />
      </section>
    </div>
  );
};

export default Main;

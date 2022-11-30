import React from "react";
import style from "./CanvasInterface.module.css";

import canvasImages from "./CanvasImg";

function CanvasOption(props) {
    const img = props.img === 0 ? canvasImages[0] : canvasImages[1];
    return (<div className={style.button} onClick={props.func}>
        <h1 className="unselectable">{props.text}</h1>
        <img className="unselectable" src={img} />
    </div>);
}

export default CanvasOption;
import React from "react";
import style from "./AiBar.module.css";

function AiIcon(props) {
    const select = () => {
        props.setSelected(props.index);
    }
    return (<div className={style.icon + ' ' + (props.selected ? style.selected : '')} onClick={select}>
        <div className="unselectable">{props.name}</div>
    </div>);
}

export default AiIcon;
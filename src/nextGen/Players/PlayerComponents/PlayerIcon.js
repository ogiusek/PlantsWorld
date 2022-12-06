import React from "react";
import style from "./PlayerIcon.module.css";

function PlayerIcon(props) {
    return (<div className={style.icon + ' ' + (props.selected && style.selected)} onClick={props.setPlayer}>
        <div className="unselectable">
            {props.name}<br />({props.index})
        </div>
    </div>);
}

export default PlayerIcon;
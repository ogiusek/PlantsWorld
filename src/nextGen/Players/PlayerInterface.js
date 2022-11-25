import React from "react";
import style from "./Players.module.css";

function PlayerInterface(props) {
    // console.log(props.players[props.player].name);
    return (<div className={style.interface}>
        <div>{props.players[props.player].code.name}</div>
        <div>{props.players[props.player].name}</div>
    </div>);
}

export default PlayerInterface;
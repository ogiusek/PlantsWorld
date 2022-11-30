import React from "react";
import style from "./AiInterface.module.css";
import Trash from "./Blocks/Trash";

function AiSpecifications(props) {
    return (<div className={style.specifications}>
        <label htmlFor="name">name</label>
        <input value={props.name} onChange={(event) => {
            event.target.value !== '' && props.rename(event.target.value);
        }} />
        <div className={style.trash}>
            <Trash remove={props.remove} />
        </div>
    </div>);
}

export default AiSpecifications;
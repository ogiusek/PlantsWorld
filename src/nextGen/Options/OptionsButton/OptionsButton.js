import React from "react";
import style from "./Button.module.css";

import buttonImages from "./ButtonImages";

function OptionsButton(props) {
    const setPosition = () => {
        props.setPosition(props.value);
    }
    return (
        <button className={style.button} onClick={setPosition}>
            <img src={buttonImages[props.value - 1]} />
            <div>{props.text}</div>
        </button>
    );
}

export default OptionsButton;
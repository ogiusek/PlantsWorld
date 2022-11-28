import React from "react";
import style from "./BackButton.module.css";

import AuthContext from "../../../additionalFiles/AuthContext";
import url from "./imgUrl";

function BackButton() {
    const ctx = React.useContext(AuthContext);
    const back = () => {
        ctx.setPosition(0);
    };

    return (
        <button className={style.button} onClick={back}>
            <img src={url} />
        </button>
    )
}

export default BackButton;
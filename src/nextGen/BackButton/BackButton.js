import React from "react";
import style from "./BackButton.module.css";

import AuthContext from "../../additionalFiles/AuthContext";
import url from "./imgUrl";

function BackButton() {
    const ctx = React.useContext(AuthContext);
    const back = () => {
        ctx.position === 3 && (document.getElementById("canvas").style.zIndex = -1);
        ctx.setPosition(0);
    };

    return (
        <button className={style.button} onClick={back}>
            <img src={url} className={'unselectable'} />
        </button>
    )
}

export default BackButton;
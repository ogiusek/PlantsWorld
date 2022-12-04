import React from "react";
import style from "./AiBar.module.css";

import AiIcon from "./AiIcon";
import AiAddIcon from "./AiAddIcon";
import defaultAi from "../../../additionalFiles/defaultAi";

function AiBar(props) {
    const addAi = (name) => {
        let array = Array.from(props.codes);
        array.push({
            name: name,
            ai: Array.from(defaultAi.ai)
        });
        props.setCodes(array);
    }
    return (<div className={style.bar}>
        {props.codes.map((element, index) => {
            return (<AiIcon name={element.name} selected={index === props.selected} setSelected={props.setSelected} index={index} key={index} />);
        })}
        <AiAddIcon addAi={addAi} />
    </div>)
}

export default AiBar;
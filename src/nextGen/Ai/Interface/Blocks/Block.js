import React from "react";
import style from "./AiBlocks.module.css";

import aiEnum from "../../../../additionalFiles/aiEnum";
import Trash from "./Trash";

function Block(props) {
    let className = '';
    let text = '';
    const replace = (direction) => {
        props.replace(props.index, props.index + direction);
    }
    switch (props.value) {
        case aiEnum.plant:
            className = style.plant;
            text = "Plant";
            break;
        case aiEnum.sell:
            className = style.sell;
            text = "Sell";
            break;
        case aiEnum.transport:
            className = style.transport;
            text = "Transport";
            break;
        case aiEnum.collect:
            className = style.collect;
            text = "Collect";
            break;
    }
    const block = (
        <div className={className + ' ' + style.block}>
            <div className={style.arrows}>
                {props.upArrow && (<button className={style.up} onClick={() => { replace(-1) }}></button>)}
                {props.downArrow && (<button className={style.down} onClick={() => { replace(1) }}></button>)}
            </div>
            <h1 className="unselectable">{text}</h1>
            <Trash remove={() => { props.remove(props.index) }} />
        </div>);
    return block;
}

export default Block;
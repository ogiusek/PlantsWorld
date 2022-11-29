import React from "react";
import style from "./AiBlocks.module.css";

function DefaultBlocks(props) {
    // const props.addBlock = (value) => {

    // };
    return (<div className={style.blocks}>
        <div className={style.plant + ' ' + style.block} onClick={() => { props.addBlock('plant') }}>
            <h1 className="unselectable">Plant</h1>
        </div>
        <div className={style.sell + ' ' + style.block} onClick={() => { props.addBlock('sell') }}>
            <h1 className="unselectable">Sell</h1>
        </div>
        <div className={style.transport + ' ' + style.block} onClick={() => { props.addBlock('transport') }}>
            <h1 className="unselectable">Transport</h1>
        </div>
        <div className={style.collect + ' ' + style.block} onClick={() => { props.addBlock('collect') }}>
            <h1 className="unselectable">Collect</h1>
        </div>
    </div>);
}

export default DefaultBlocks;
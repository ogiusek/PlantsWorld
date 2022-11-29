import React, { useState } from 'react';
import style from "./Ai.module.css";

import AiBar from './AiBar/AiBar';
import AiInterface from './Interface/AiInterface';

function Ai(props) {
    const [selected, setSelected] = useState(0);
    return (
        <div className={style.main}>
            <AiBar codes={props.codes} setCodes={props.setCodes} selected={selected} setSelected={setSelected} />
            <AiInterface codes={props.codes} setCodes={props.setCodes} index={selected} />
        </div>
    );
}

export default Ai;
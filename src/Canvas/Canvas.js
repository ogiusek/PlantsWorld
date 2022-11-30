import React, { useState } from 'react';
import style from "./Canvas.module.css";
import CanvasInterface from './CanvasInterface/CanvasInterface';

function Canvas(props) {
    const [sim, setSim] = useState(false);
    const [clock, setClock] = useState(false);
    return (<div className={style.main}>
        {!sim && <CanvasInterface setSim={setSim} setClock={setClock} />}
        {sim && <CanvasInterface setSim={setSim} clock={clock} players={props.players} codes={props.codes} />}
    </div>);
}

export default Canvas;
import React from 'react';
import style from "./CanvasInterface.module.css";

import CanvasOption from './CanvasOption';

function CanvasInterface(props) {
    return (<div className={style.main}>
        <CanvasOption text={'Check score'} img={0} func={() => {
            props.setSim(true);
            props.setClock(true);
        }} />
        <CanvasOption text={'Watch'} img={1} func={() => {
            props.setSim(true);
            props.setClock(false);
        }} />
    </div>);
}

export default CanvasInterface;
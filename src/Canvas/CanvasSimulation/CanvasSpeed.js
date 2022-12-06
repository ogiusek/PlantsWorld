import React, { useState } from "react";
import style from "./CanvasSimulation.module.css";

import canvasImages from "./CanvasImages";

function CanvasSpeed(props) {
    const [speed, setSpeed] = useState(1);

    const forceChange = () => {
        setSpeed(speed + 1);
    }

    const handleSpeedChange = (event) => {
        switch (event.target.src) {
            case canvasImages.pause:
                props.setSpeed(0);
                break;
            case canvasImages.play:
                props.setSpeed(1);
                break;
            case canvasImages.speedTwo:
                props.setSpeed(2);
                break;
            case canvasImages.speedThree:
                props.setSpeed(10);
                break;
        }
        forceChange();
    }
    return (
        <div className={style.arrows}>
            <img className={style.arrow + ' ' + (props.speed() === 0 ? style.selected : '')} onClick={handleSpeedChange} src={canvasImages.pause} />
            <img className={style.arrow + ' ' + (props.speed() === 1 ? style.selected : '')} onClick={handleSpeedChange} src={canvasImages.play} />
            <img className={style.arrow + ' ' + (props.speed() === 2 ? style.selected : '')} onClick={handleSpeedChange} src={canvasImages.speedTwo} />
            <img className={style.arrow + ' ' + (props.speed() === 10 ? style.selected : '')} onClick={handleSpeedChange} src={canvasImages.speedThree} />
        </div>
    );
}

export default CanvasSpeed;
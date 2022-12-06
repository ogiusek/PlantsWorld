import React, { useState } from "react";
import style from "./CanvasSimulation.module.css";

import Main from "./CanvasObjects/main";
import CanvasSpeed from "./CanvasSpeed";

let req;
let speed = 1;

function CanvasSimulation(props) {
    const canvas = document.getElementById('canvas');
    const c = canvas.getContext('2d');
    const setSpeed = (arg) => {
        speed = arg;
    }

    const animate = () => {
        if (!props.sim) {
            document.getElementById("canvas").style.zIndex = -1;
            return;
        }

        req = requestAnimationFrame(animate);

        if (canvas.width !== window.innerWidth ||
            canvas.height !== window.innerHeight) {
            Main.Resize()
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        Main.Update();
        Main.Draw(c);
    }
    if (props.sim) {
        speed = 1;
        cancelAnimationFrame(req);
        document.getElementById("canvas").style.zIndex = 1;
        Main.Reset(props.players, props.clock);
        animate();
    }

    return (<div className={style.main}>
        <CanvasSpeed speed={speed} setSpeed={setSpeed} />
    </div>);
}

export { speed };
export default CanvasSimulation;
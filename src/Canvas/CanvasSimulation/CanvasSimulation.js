import React from "react";
import style from "./CanvasSimulation.module.css";

import Main from "./CanvasObjects/main";

let req;
function CanvasSimulation(props) {
    const canvas = document.getElementById('canvas');
    const c = canvas.getContext('2d');

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
        cancelAnimationFrame(req);
        document.getElementById("canvas").style.zIndex = 1;
        Main.Reset(props.players, props.clock);
        animate();
    }

    return (<div className={style.main}></div>);
}

export default CanvasSimulation;
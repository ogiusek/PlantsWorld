import React from "react";
import style from "./CanvasSimulation.module.css";

import Fields from "./CanvasObjects/fields";
import Main from "./CanvasObjects/main";

function CanvasSimulation(props) {

    const canvas = document.getElementById('canvas');
    const c = canvas.getContext('2d');

    const animate = () => {
        if (!props.sim) {
            document.getElementById("canvas").style.zIndex = -1;
            return;
        }
        requestAnimationFrame(animate);
        if (canvas.width !== window.innerWidth ||
            canvas.height !== window.innerHeight) {

            Main.Resize()

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        Main.Update();
        Main.Draw(c);

        // c.beginPath();
        // c.rect(0, 0, window.innerWidth, window.innerHeight);
        // c.fill();
        // c.stroke();

        // c.beginPath();
        // c.arc(window.innerWidth / 2, window.innerHeight / 2, 50, 0.0, Math.PI * 2, false);
        // c.fillStyle = "red";
        // c.fill();

        // c.beginPath();
        // c.arc(this.xPos, this.yPos, radius, 0.0, Math.PI * 2, false);
        // c.fillStyle = this.color;
        // c.fill();
    }
    if (props.sim) {
        document.getElementById("canvas").style.zIndex = 1;
        animate();
    }

    return (<div className={style.main}></div>);
}

export default CanvasSimulation;
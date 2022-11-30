import React from "react";
import style from "./CanvasSimulation.module.css";

function CanvasSimulation(props) {
    const canvas = document.getElementById('canvas');
    const c = canvas.getContext('2d');

    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    const animate = () => {
        requestAnimationFrame(animate);

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // c.clearRect(0, 0, innerWidth, innerHeight);

        c.beginPath();
        c.arc(window.innerWidth / 2, window.innerHeight / 2, 10, 0.0, Math.PI * 2, false);
        c.fill();

        // drawImage(image, dx, dy, dWidth, dHeight)

        // c.beginPath();
        // c.arc(this.xPos, this.yPos, radius, 0.0, Math.PI * 2, false);
        // c.fillStyle = this.color;
        // c.fill();
    }
    if (props.sim) {
        document.getElementById("canvas").style.zIndex = 1;
        animate();
    }

    return (<div className={style.main} onResize={resize}></div>);
}

export default CanvasSimulation;
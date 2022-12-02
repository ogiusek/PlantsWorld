import React from "react";
import style from "./CanvasSimulation.module.css";

import fields from "./CanvasObjects/fields";

function CanvasSimulation(props) {

    const canvas = document.getElementById('canvas');
    const c = canvas.getContext('2d');

    const animate = () => {
        requestAnimationFrame(animate);
        if (canvas.width !== window.innerWidth ||
            canvas.height !== window.innerHeight) {
            fields.OnResize();
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        fields.Update();
        c.clearRect(0, 0, window.innerWidth, window.innerHeight);
        c.fillStyle = "greenyellow";
        c.fillRect(0, 0, canvas.width, canvas.height);

        fields.Draw(c);
        // c.beginPath();
        // c.rect(0, 0, window.innerWidth, window.innerHeight);
        // c.fill();
        // c.stroke();

        // c.beginPath();
        // c.arc(window.innerWidth / 2, window.innerHeight / 2, 50, 0.0, Math.PI * 2, false);
        // c.fillStyle = "red";
        // c.fill();

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

    return (<div className={style.main}></div>);
}

export default CanvasSimulation;
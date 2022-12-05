import canvasImages from "../CanvasImages";
import Silo from "./silo";

let shopImg = new Image();
shopImg.src = canvasImages.shop;

class Shop {
    static xPos = window.innerWidth / 3;
    static yPos = window.innerHeight / 2;
    static width = window.innerHeight > window.innerWidth ? window.innerWidth / 100 * 5 : window.innerWidth / 100 * 5;

    static #defaultWork = 100;
    static work = this.#defaultWork;

    static Work = () => {
        if (this.work > 0) {
            this.work--;
            return true;
        } else {
            this.work = this.#defaultWork;
            Silo.Sell();
            return false;
            // add score
        }
    }

    // static Update = () => {
    //     if (used && Silo.amount > 0) {
    //         if (this.work > 0) {
    //             this.work--;
    //         } else {
    //             this.work = this.#defaultWork;
    //             Silo.Sell();
    //             // add score
    //         }
    //     }
    // };

    static Draw = (c) => {
        c.drawImage(
            shopImg,
            this.xPos,
            this.yPos,
            this.width,
            this.width);
    };

    static Reset = () => {
        this.work = this.#defaultWork;
        this.selected = false;
        this.used = false;
    }

    static Resize = () => {
        this.xPos = window.innerWidth / 3;
        this.yPos = window.innerHeight / 2;
        this.width = window.innerHeight > window.innerWidth ? window.innerWidth / 100 * 5 : window.innerWidth / 100 * 5;
    }
}

export default Shop;
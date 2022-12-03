import canvasImages from "../CanvasImages";

class Silo {
    static amount = 0;
    static #img = new Image();
    static defaultSize = 10;
    static width = window.innerWidth > window.innerHeight ?
        window.innerHeight / 100 * this.defaultSize :
        window.innerWidth / 100 * this.defaultSize;

    static xPos = (window.innerWidth / 2) - this.width;
    static yPos = (window.innerHeight / 2) - this.width;


    static Init() {
        this.#img.src = canvasImages.silo;
    }

    static AddWheat() {
        this.amount++;
    }

    static Sell() {
        this.amount--;
    }

    static Draw(c) {
        c.strokeText(this.amount, this.xPos, this.yPos);
        c.drawImage(
            this.#img,
            this.xPos,
            this.yPos,
            this.width,
            this.width);
    }

    static Resize(vw, vh) {
        this.width = vw > vh ?
            vh * this.defaultSize :
            vw * this.defaultSize;
        this.xPos = 50 * vw - this.width;
        this.yPos = 50 * vh - this.width;
    }
}

Silo.Init();

export default Silo;
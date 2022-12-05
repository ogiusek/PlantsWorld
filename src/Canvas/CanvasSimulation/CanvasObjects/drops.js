import canvasImages from "../CanvasImages";
import Drop from "./drop";

class Drops {
    static drops = [];
    static #img = new Image();

    static RemoveSiloDrop(follows) {
        this.drops = this.drops.filter((element) => {
            return element.follows !== follows;
        });
    }

    static AddDrop(xPos, yPos) {
        this.#img.src = canvasImages.drop;
        this.drops.push(new Drop(xPos, yPos));
    }

    static Update() {
        this.drops.map((element) => {
            element.Update();
        });
    }

    static Draw(c) {
        this.drops.map((element) => {
            element.Draw(c, this.#img);
        });
    }

    static Reset() {
        this.drops = [];
    }

    static Resize(lastVw, lastVh, vw, vh) {
        this.drops.map((element) => {
            element.Resize(lastVw, lastVh, vw, vh);
        });
    }
}

export default Drops;
import canvasImages from "../CanvasImages";
import Drop from "./drop";

class Drops {
    static drops = [];
    static #img = new Image();

    static RemoveDrop(indexToRemove) {
        this.drops = this.drops.filter((element, index) => {
            return indexToRemove !== index;
        });
    }

    static AddDrop(xPos, yPos) {
        this.#img.src = canvasImages.drop;
        this.drops.push(new Drop(xPos, yPos, this.#img));
    }

    static Take(index, object) {
        this.drops[index].Take(object);
    }

    static Update() {
        this.drops.map((element) => {
            element.Update();
        });
    }

    static Draw(c) {
        this.drops.map((element) => {
            element.Draw(c);
        });
    }

    static Resize(lastVw, lastVh, vw, vh) {
        this.drops.map((element) => {
            element.Resize(lastVw, lastVh, vw, vh);
        });
    }
}

export default Drops;
import field from "./field";
import canvasImages from "../CanvasImages";

class fields {
    static #vw = window.innerWidth / 100;
    static #vh = window.innerHeight / 100;
    static fieldsSize = 10;
    static growSpeed = 0.001;
    static xPos = 50 * this.#vw;
    static xPos = 50 * this.#vh;

    static width = this.#vw > this.#vh ? (4.5 * this.#vh) : (4.5 * this.#vw);
    static #soil = new Image();
    static #grownField = new Image();
    static #ungrownField = new Image();

    static #initFields = () => {
        this.#soil.src = canvasImages.soil;
        this.#grownField.src = canvasImages.grownField;
        this.#ungrownField.src = canvasImages.ungrownField;

        let array = [];
        for (let xIndex = 0; xIndex < this.fieldsSize; xIndex++) {
            let row = [];
            for (let yIndex = 0; yIndex < this.fieldsSize; yIndex++) {
                row.push(new field(this.growSpeed, this.width, xIndex, yIndex));
            }
            array.push(row);
        }
        return array;
    };

    static #fields = this.#initFields();

    static Update() {
        this.#fields.map((element) => {
            element.map((object) => {
                object.update();
            });
        });
    }

    static Draw(c) {
        this.#fields.map((element) => {
            element.map((object) => {
                object.draw(c, this.#grownField, this.#ungrownField, this.#soil);
            });
        });
    }

    static OnResize() {
        this.#vw = window.innerWidth / 100;
        this.#vh = window.innerHeight / 100;

        this.xPos = 50 * this.vw;
        this.xPos = 50 * this.vh;
        this.width = this.#vw > this.#vh ? (4.5 * this.#vh) : (4.5 * this.#vw);
        this.#fields.map((element) => {
            element.map((object) => {
                object.resize(this.width);
            });
        });
    }

    static GetFields() {
        let array = [];
        this.#fields.map((line) => {
            line.map((element) => {
                array.push(element);
            });
        });
        return array;
    }
}
export default fields;
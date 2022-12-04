import Field from "./field";
import canvasImages from "../CanvasImages";

class Fields {
    static fieldsSize = 10;
    static growSpeed = 0.0001;

    static width = window.innerWidth > window.innerHeight ? (4.5 * window.innerHeight / 100) : (4.5 * (window.innerWidth / 100));

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
                row.push(new Field(this.growSpeed, this.width, xIndex, yIndex));
            }
            array.push(row);
        }
        return array;
    };

    static #fields = this.#initFields();

    static Update() {
        this.#fields.map((element) => {
            element.map((object) => {
                object.Update();
            });
        });
    }

    static Draw(c) {
        this.#fields.map((element) => {
            element.map((object) => {
                object.Draw(c, this.#grownField, this.#ungrownField, this.#soil);
            });
        });
    }

    static Resize(vw, vh) {
        this.width = vw > vh ? (4.5 * vh) : (4.5 * vw);
        this.#fields.map((element) => {
            element.map((object) => {
                object.Resize(this.width);
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
export default Fields;
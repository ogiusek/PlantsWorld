import Player from "./player";

class Players {
    static players = [];
    static #defaultWidth = 3;
    static #defaultSpeed = 1.5;

    static Reset(players) {
        this.players = [];
        players.map((element) => {
            this.players.push(new Player(element.name, element.code.ai, this.#defaultSpeed, this.#defaultWidth));
        });
    }

    static Update() {
        this.players.map((element) => {
            element.Update();
        });
    }

    static Draw(c) {
        this.players.map((element) => {
            element.Draw(c);
        });
    }

    static Resize(lastVw, lastvh, vw, vh) {
        this.players.map((element) => {
            element.Resize(lastVw, lastvh, vw, vh);
        });
    }
}

export default Players;
import Player from "./player";

class Players {
    static players = [];
    static #defaultWidth = 5;
    static #defaultSpeed = 1.5;

    static Init(players) {
        this.players = [];
        players.map((element) => {
            this.players.push(new Player(element.name, element.code.ai, this.#defaultSpeed, window.innerWidth / 100 * this.#defaultWidth));
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
}

export default Players;
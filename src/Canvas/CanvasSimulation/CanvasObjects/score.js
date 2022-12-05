import Players from "./players";

class Score {
    static score = 0;
    static #defaultPointsPerSale = 50;

    static Sell() {
        console.log(Players.players.length);
        const score = this.#defaultPointsPerSale - Players.players.length;
        if (score > 0) {
            this.score += score;
        } else {
            this.score += this.#defaultPointsPerSale / Players.players.length;
        }
    }

    static Draw(c) {
        let textScore = this.score;
        textScore = textScore * 100;
        textScore = Math.round(textScore) / 100;
        c.strokeText('Score: ' + textScore, window.innerWidth / 2, 2 * window.innerWidth / 100);
    }

    static Reset() {
        this.score = 0;
    }
}

export default Score;
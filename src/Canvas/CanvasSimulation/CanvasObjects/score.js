import Players from "./players";

class Score {
    static score = 0;
    static #defaultPointsPerSale = 50;

    static Sell() {
        const score = this.#defaultPointsPerSale - Players.players.length;
        if (score > 0) {
            this.score += score;
        } else {
            this.score += this.#defaultPointsPerSale / Players.players.length;
        }
    }

    static Draw(c, timer) {
        let textScore = this.score;
        textScore = textScore * 100;
        textScore = Math.round(textScore) / 100;
        c.strokeText('Score: ' + textScore, window.innerWidth / 2, 2 * window.innerWidth / 100);
        if (typeof timer === typeof 0) {
            let sec = Math.ceil(timer / 60);
            let min = Math.floor(sec / 60);
            sec = sec % 60;
            sec < 10 && (sec = sec = ('0' + sec));
            c.strokeText('Time: ' + min + ':' + sec, window.innerWidth / 2, 4 * window.innerWidth / 100)
        };
    }

    static Reset() {
        this.score = 0;
    }
}

export default Score;
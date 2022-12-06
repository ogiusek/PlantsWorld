import Fields from "./fields";
import Drops from "./drops";
import Silo from "./silo";
import Players from "./players";
import Shop from "./shop";
import Score from "./score";

import { speed } from "../CanvasSimulation";

class Main {
    static vw = window.innerWidth / 100;
    static vh = window.innerHeight / 100;

    static calcTime = false;
    static #defaultTimer = 10800;
    static timer = this.#defaultTimer;

    static Update() {
        for (let index = 0; index < speed; index++) {
            if (this.timer > 0 || this.timer === false) {
                if (this.calcTime) {
                    this.timer--;
                }
                Fields.Update();
                Drops.Update();
                Players.Update();
            }
        }
    }

    static #DrawBackground(c) {
        c.clearRect(0, 0, window.innerWidth, window.innerHeight);
        c.fillStyle = "greenyellow";
        c.fillRect(0, 0, window.innerWidth, window.innerHeight);

        c.font = '2vw serif';
        c.textAlign = 'center';
    }

    static Draw(c) {
        this.#DrawBackground(c);

        Fields.Draw(c);
        Silo.Draw(c);
        Shop.Draw(c);
        Drops.Draw(c);
        Players.Draw(c);
        Score.Draw(c, this.timer);
        if (this.timer <= 0 && this.timer !== false) {
            console.log(this.timer);
            c.strokeText('End Score: ' + Score.score, window.innerWidth / 2, 8 * window.innerWidth / 100);
        }
    }

    static Reset(players, timer) {
        this.calcTime = timer;
        this.timer = timer ? this.#defaultTimer : false;
        Fields.Reset();
        Drops.Reset();
        Shop.Reset();
        Players.Reset(players);
        Silo.Reset();
        Score.Reset();
    }

    static Resize() {
        const lastVw = this.vw * 100;
        const lastVh = this.vh * 100;
        this.vw = window.innerWidth / 100;
        this.vh = window.innerHeight / 100;

        Shop.Resize(this.vw, this.vh);
        Fields.Resize(this.vw, this.vh);
        Silo.Resize(this.vw, this.vh);
        Drops.Resize(lastVw, lastVh, this.vw, this.vh);
        Players.Resize(lastVw, lastVh, this.vw, this.vh);
    }
}

export default Main;
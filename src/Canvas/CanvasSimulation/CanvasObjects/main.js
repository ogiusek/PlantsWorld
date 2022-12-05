import Fields from "./fields";
import Drops from "./drops";
import Silo from "./silo";
import Players from "./players";

class Main {
    static vw = window.innerWidth / 100;
    static vh = window.innerHeight / 100;

    static Update() {
        Fields.Update();
        Drops.Update();
        Players.Update();
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
        Players.Draw(c);
        Drops.Draw(c);
    }

    static Reset(players) {
        Fields.Reset();
        Drops.Reset();
        Players.Reset(players);
        Silo.Reset();
    }

    static Resize() {
        const lastVw = this.vw * 100;
        const lastVh = this.vh * 100;
        this.vw = window.innerWidth / 100;
        this.vh = window.innerHeight / 100;

        Fields.Resize(this.vw, this.vh);
        Silo.Resize(this.vw, this.vh);
        Drops.Resize(lastVw, lastVh, this.vw, this.vh);
        Players.Resize(lastVw, lastVh, this.vw, this.vh);
    }
}

export default Main;
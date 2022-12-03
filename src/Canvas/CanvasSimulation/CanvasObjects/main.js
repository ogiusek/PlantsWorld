import Fields from "./fields";
import Drops from "./drops";
import Silo from "./silo";

class Main {
    static vw = window.innerWidth / 100;
    static vh = window.innerHeight / 100;

    static Update() {
        Fields.Update();
        Drops.Update();
    }

    static Draw(c) {
        c.clearRect(0, 0, window.innerWidth, window.innerHeight);
        c.fillStyle = "greenyellow";
        c.fillRect(0, 0, window.innerWidth, window.innerHeight);
        c.font = '2vw serif';

        Fields.Draw(c);
        Drops.Draw(c);
        Silo.Draw(c);
    }

    static Resize() {
        const lastVw = this.vw * 100;
        const lastVh = this.vh * 100;
        this.vw = window.innerWidth / 100;
        this.vh = window.innerHeight / 100;

        Fields.Resize(this.vw, this.vh);
        Drops.Resize(lastVw, lastVh, this.vw, this.vh);
        Silo.Resize(this.vw, this.vh);
    }
}

export default Main;
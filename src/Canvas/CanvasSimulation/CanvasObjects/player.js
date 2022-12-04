import aiEnum from "../../../additionalFiles/aiEnum";
import Drops from "./drops";
import Fields from "./fields";
import Silo from "./silo";

function CalcDist(oneX, oneY, twoX, twoY) {
    return Math.sqrt(
        Math.abs(Math.pow(oneX, 2) - Math.pow(twoX, 2)) +
        Math.abs(Math.pow(oneY, 2) - Math.pow(twoY, 2)));
}

function Player(name, code, speed, width) {
    this.xPos = window.innerWidth / 2;
    this.yPos = window.innerHeight / 2;

    this.objective = false;

    this.width = width / 2;

    this.FindObjective = () => {
        for (let index = 0; index < code.length; index++) {
            let found = false;
            switch (code[index]) {
                case aiEnum.plant:
                    Fields.GetFields().map((element) => {
                        if (!element.selected &&
                            !element.planted) {
                            if (found) {
                                const lastDist = CalcDist(this.xPos, this.yPos, this.objective.object.xPos, this.objective.object.yPos);
                                const newDist = CalcDist(this.xPos, this.yPos, element.xPos, element.yPos);
                                if (lastDist <= newDist) {
                                    return;
                                }
                            }
                            this.objective = {
                                type: aiEnum.plant,
                                object: element
                            };

                            found = true;
                        }
                    });
                    break;
                case aiEnum.sell:
                    if (Silo.amount > 0
                        // && !Shop.selected
                    ) {
                        // sell
                    }
                    break;
                case aiEnum.transport:
                    Drops.drops.map((element) => {
                        if (!element.selected) {
                            if (found) {
                                const lastDist = CalcDist(this.xPos, this.yPos, this.objective.object.xPos, this.objective.object.yPos);
                                const newDist = CalcDist(this.xPos, this.yPos, element.xPos, element.yPos);
                                if (lastDist <= newDist) {
                                    return;
                                }
                            }
                            this.objective = {
                                type: aiEnum.transport,
                                object: element
                            };
                            found = true;
                        }
                    });
                    break;
                case aiEnum.collect:
                    Fields.GetFields().map((element) => {
                        if (!element.selected &&
                            element.ready) {
                            if (found) {
                                const lastDist = CalcDist(this.xPos, this.yPos, this.objective.object.xPos, this.objective.object.yPos);
                                const newDist = CalcDist(this.xPos, this.yPos, element.xPos, element.yPos);
                                if (lastDist <= newDist) {
                                    return;
                                }
                            }
                            this.objective = {
                                type: aiEnum.collect,
                                object: element
                            };

                            found = true;
                        }
                    });
                    break;
            }
            if (found) {
                this.objective.object.selected = true;
                return;
            }
        }
    }


    this.DoObjective = () => {
        if (this.objective.object.xPos === this.xPos && this.objective.object.yPos === this.yPos) {
            // finish objective
            switch (this.objective.type) {
                case aiEnum.plant:
                    this.objective.object.Plant();
                    this.objective = false;
                    break;
                case aiEnum.sell:
                    this.objective = false;

                    break;
                case aiEnum.transport:
                    if (this.objective.object.silo) {
                        Silo.AddWheat();
                        Drops.RemoveSiloDrop(this);
                        this.objective = false;
                    } else {
                        this.objective.object.Take(this);
                        this.objective = {
                            type: aiEnum.transport,
                            object: Silo
                        };
                    }
                    break;
                case aiEnum.collect:
                    this.objective.object.Collect();
                    this.objective = false;
                    break;
            }
        } else {
            // go to objective
            const xDist = this.objective.object.xPos - this.xPos;
            const yDist = this.objective.object.yPos - this.yPos;
            if (Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2)) < speed) {
                this.xPos = this.objective.object.xPos;
                this.yPos = this.objective.object.yPos;
            } else {
                this.xPos += xDist / Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2)) * speed;
                this.yPos += yDist / Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2)) * speed;
            }
        }
    }

    this.Update = () => {
        if (this.objective === false) {
            this.FindObjective();
        } else {
            this.DoObjective();
        }
    }

    this.Draw = (c) => {
        c.beginPath();
        c.fillStyle = "pink";
        c.arc(this.xPos, this.yPos, this.width, 0.0, Math.PI * 2, false);
        c.fill();
        c.strokeText(name, this.xPos, this.yPos + (window.innerWidth / 100 * 0.75));
    }
}

export default Player;
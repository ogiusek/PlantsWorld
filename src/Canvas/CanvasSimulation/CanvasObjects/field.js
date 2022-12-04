import Drops from "./drops";

function Field(growSpeed, width, xIndex, yIndex) {
    this.growStage = 0;
    this.planted = false;
    this.ready = false;
    this.selected = false;
    this.growSpeed = growSpeed;

    this.width = width;
    this.xPos = xIndex * width + window.innerWidth / 2;
    this.yPos = yIndex * width + window.innerHeight / 2;

    this.xIndex = xIndex;
    this.yIndex = yIndex;

    this.Update = () => {
        if (this.planted && this.growStage < 1) {
            this.growStage += this.growSpeed;
            this.growStage >= 1 && (this.ready = true);
        }
    }

    this.Draw = (c, grown, ungrown, soil) => {
        const img = this.planted ?
            this.growStage < 1 ? ungrown : grown :
            soil;
        if (img === undefined) {
            console.log(this.planted + '    ' + this.growStage);
        }
        c.drawImage(
            img,
            this.xPos,
            this.yPos,
            this.width,
            this.width);
    }

    this.Plant = () => {
        this.selected = false;
        this.planted = true;
    }

    this.Collect = () => {
        if (this.growStage >= 1) {
            this.ready = false;
            this.growStage = 0;
            this.planted = false;
            Drops.AddDrop(this.xPos, this.yPos);
        }
        this.selected = false
    }

    this.Resize = (width) => {
        this.width = width;
        this.xPos = xIndex * width + window.innerWidth / 2;
        this.yPos = yIndex * width + window.innerHeight / 2;
    }
}

export default Field;
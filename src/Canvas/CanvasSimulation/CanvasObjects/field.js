function Field(growSpeed, width, xIndex, yIndex) {
    this.growStage = 0;
    this.planted = false;
    this.ready = false;
    this.growSpeed = growSpeed;

    this.width = width;
    this.xIndex = xIndex;
    this.yIndex = yIndex;

    this.xPos = xIndex * width + window.innerWidth / 2;
    this.yPos = yIndex * width + window.innerHeight / 2;

    this.update = () => {
        if (this.planted && this.growStage < 1) {
            this.growStage += this.growSpeed;
            this.growStage >= 1 && (this.ready = true);
        }
    }

    this.draw = (c, grown, ungrown, soil) => {
        const img = this.planted ?
            this.growStage < 1 ? ungrown : grown :
            soil;
        c.drawImage(
            img,
            this.xPos,
            this.yPos,
            this.width,
            this.width);
    }

    this.plant = () => {
        this.planted = true;
    }

    this.collect = () => {
        this.growStage = 0;
        this.planted = false;
        // drop
    }

    this.resize = (width) => {
        this.width = width;
        this.xPos = xIndex * width + window.innerWidth / 2;
        this.yPos = yIndex * width + window.innerHeight / 2;
    }
}

export default Field;
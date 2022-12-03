function Drop(xPos, yPos, width, img) {
    this.xPos = xPos;
    this.yPos = yPos;

    this.follows = false;
    this.width = width;

    this.Take = (object) => {
        this.follows = object;
    }

    this.Resize = (lastVw, lastVh, vw, vh) => {
        this.width = 3 * vw;
        this.xPos = this.xPos * (lastVw / vw);
        this.yPos = this.yPos * (lastVh / vh);
    }

    this.Update = () => {
        if (this.follows !== false) {
            this.xPos = this.follows.xPos + this.follows.width;
            this.yPos = this.follows.yPos + this.follows.width;
        }
    }

    this.Draw = (c) => {
        c.drawImage(
            img,
            this.xPos,
            this.yPos,
            this.width,
            this.width);
    }
}

export default Drop;
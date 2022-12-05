function Drop(xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.selected = false;

    this.follows = false;
    this.width = window.innerWidth > window.innerHeight ? (2 * window.innerHeight / 100) : (2 * window.innerWidth / 100);

    this.Take = (object) => {
        this.selected = true;
        this.follows = object;
    }

    this.Resize = (lastVw, lastVh, vw, vh) => {
        this.width = vw > vh ? (2 * vh) : (2 * vw);
        this.xPos = this.xPos * ((vw * 100) / lastVw);
        this.yPos = this.yPos * ((vh * 100) / lastVh);
    }

    this.Update = () => {
        if (this.follows !== false) {
            this.xPos = this.follows.xPos + this.follows.width;
            this.yPos = this.follows.yPos + this.follows.width;
        }
    }

    this.Draw = (c, img) => {
        c.drawImage(
            img,
            this.xPos,
            this.yPos,
            this.width,
            this.width);
    }
}

export default Drop;
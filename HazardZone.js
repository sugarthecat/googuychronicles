class HazardZone {
    constructor(x, y, radius, maxDps) {
        this.x = x;
        this.y = y;
        this.r = radius;
        this.dps = maxDps
    }
    DPSAtPosition(x, y) {
        let rad = dist(x, y, this.x, this.y);
        if (rad > this.r) {
            return 0;
        }
        return (this.r - rad) / this.r * this.dps;
    }
    Draw() {
        fill(255, 0, 0)
        circle(this.x, this.y, this.r * 2)
    }
}

class Beaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 30;
        this.h = 30;
        if (random() > .5) {
            this.xScale = -1;
        } else {
            this.xScale = 1;
        }
        this.wavePos = 0;
        this.active = true;
    }
    Draw() {
        push()
        translate(this.x, this.y + 5 * sin(this.wavePos * PI))
        this.wavePos += deltaTime / 1000
        if (this.wavePos > 2) {
            this.wavePos %= 1
        }
        image(Assets.symbols.beaker, -this.w / 2, -this.h / 2, this.w, this.h)
        pop()
    }
}

class Bullet {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.w =  20
        this.h = 30;
        this.speed = speed;
    }

    updateXPos() {
        this.x += this.speed;
    }
    Draw() {
        push() 
        fill(255, 255, 255)
        rect(this.x, this.y+5, 20, 30)


        pop()
    }
}
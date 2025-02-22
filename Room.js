class Room {
    constructor(x, floor, width, relativeSurfaces, AddCeilingAndFloor = true) {
        this.x = x;
        this.y = -floor * 300;
        this.w = width * 300;
        this.h = 300;
        this.surfaces = relativeSurfaces;
        //add ceiling and floor by default
        if (AddCeilingAndFloor) {
            this.surfaces.push(new HorizontalSurface(0, this.w, 0))
            this.surfaces.push(new HorizontalSurface(0, this.w, this.h))
        }
    }
    Draw() {
        push()
        stroke(0)
        fill(100, 0, 0)
        rect(this.x, this.y, this.w, this.h)
        translate (this.x,this.y)
        for (let i = 0; i < this.surfaces.length; i++) {
            let surface = this.surfaces[i];
            strokeWeight(5);
            line(surface.x1, surface.y, surface.x2, surface.y)
        }
        pop()
    }
}
class HorizontalSurface {
    constructor(leftX, rightX, yPos) {
        this.x1 = leftX;
        this.x2 = rightX;
        this.y = yPos;
    }
}
class VerticalSurface {
    constructor(xPos, topY, bottomY) {
        this.x = xPos;
        this.y1 = topY;
        this.y2 = bottomY;
    }
}
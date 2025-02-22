class Room {
    constructor(x, floor, width, relativeSurfaces, AddCeilingAndFloor = true) {
        this.x = x * 300;
        this.y = -floor * 300;
        this.w = width * 300;
        this.h = 300;
        this.surfaces = relativeSurfaces;
        //add ceiling and floor by default
        if (AddCeilingAndFloor) {
            this.surfaces.push(new HorizontalSurface(0, this.w, 25))
            this.surfaces.push(new HorizontalSurface(0, this.w, this.h - 50))
        }
    }
    Draw() {
        push()
        stroke(0)
        fill(100, 0, 0)
        rect(this.x, this.y, this.w, this.h)
        translate(this.x, this.y)
        for (let i = 0; i < this.surfaces.length; i++) {
            let surface = this.surfaces[i];
            strokeWeight(5);
            if (surface instanceof HorizontalSurface) {

                line(surface.x1, surface.y, surface.x2, surface.y)
            } else if (surface instanceof VerticalSurface) {

                line(surface.x, surface.y1, surface.x, surface.y2)
            }
        }
        pop()
    }
}
class Room {
    constructor(x, floor, width, relativeSurfaces=[], AddCeilingAndFloor = true) {
        this.x = x * 300;
        this.y = -floor * 300;
        this.w = width * 300;
        this.h = 300;
        this.objects = relativeSurfaces;
        //add ceiling and floor by default
        if (AddCeilingAndFloor) {
            this.objects.push(new HorizontalSurface(0, this.w, 25))
            this.objects.push(new HorizontalSurface(0, this.w, this.h - 50)),
            this.objects.push(new HazardZone(50,50,50,0.5)),
            this.objects.push(new HazardZone(150,50,50,1)),
            this.objects.push(new HazardZone(250,50,50,2))
        }
    }
    Draw() {
        push()
        stroke(0)
        fill(100, 0, 0)
        rect(this.x, this.y, this.w, this.h)
        translate(this.x, this.y)
        strokeWeight(5);
        for (let i = 0; i < this.objects.length; i++) {
            let object = this.objects[i];
            object.Draw();
        }
        pop()
    }
}
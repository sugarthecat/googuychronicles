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
            this.objects.push(new HorizontalSurface(0, this.w, this.h - 50))
        }
    }
    Draw() {
        push()
        stroke(0)
        fill(100, 0, 0)
        rect(this.x, this.y, this.w, this.h)
        translate(this.x, this.y)
        for (let i = 0; i < this.objects.length; i++) {
            let object = this.objects[i];
            strokeWeight(5);
            if (object instanceof HorizontalSurface) {
                line(object.x1, object.y, object.x2, object.y)
            } else if (object instanceof VerticalSurface) {
                line(object.x, object.y1, object.x, object.y2)
            }
        }
        pop()
    }
}

class SmallRoom extends Room{
    constructor(x, floor, background){
        super(x, floor);
        this.width = 300;
        this.background = background
    }
    Draw(){
        push()
        translate(this.x, this.y)
        image(this.background,this.x,this.y,this.w,this.h)
        let img = this.background;
    }
}

class MediumRoom extends Room{
    constructor(x, floor){
        super(x, floor);
        this.width = 600;
    }
}

class Medium extends Room{
    constructor(x, floor){
        super(x, floor);
        this.width = 900;
    }
}
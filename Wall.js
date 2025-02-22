class Wall extends Room {
    constructor(x, floor) {
        super(x, floor, 1, [])
        this.x = x * 300 - 10
        this.w = 20;
        //add ceiling and floor by default
        this.surfaces = [
            new VerticalSurface(25, 0, 150),
            new VerticalSurface(-25, 0, 150),
            new HorizontalSurface(-25, 25, 150)
        ]
    }
}
class Wall extends Room {
    constructor(x, floor) {
        super(x, floor, 1, [])
        this.x = x * 300 - 30
        this.w = 60;
        //add ceiling and floor by default
        this.surfaces = [
            new VerticalSurface(55, 0, 150),
            new VerticalSurface(5, 0, 150),
            new HorizontalSurface(5, 50, 150)
        ]
    }
}
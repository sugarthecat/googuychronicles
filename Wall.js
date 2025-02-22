class Wall extends Room {
    constructor(x, floor) {
        super(x, floor, 1, [])
        this.x = x * 300 - 10
        this.w = 20;
        //add ceiling and floor by default
        this.surfaces = [
            new VerticalSurface(20, 0, 300),
            new VerticalSurface(0, 0, 300)
        ]
    }
}
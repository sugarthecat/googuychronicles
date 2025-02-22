class Wall extends Room {
    constructor(x, floor) {
        super(x, floor, 1, [])
        this.x = x * 300 - 25
        this.w = 50;
        //add ceiling and floor by default
        this.objects = [
            new VerticalSurface(50, 0, 300),
            new VerticalSurface(0, 0, 300),
        ]
    }
}
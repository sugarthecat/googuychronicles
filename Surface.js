
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
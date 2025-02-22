
class HorizontalSurface {
    constructor(leftX, rightX, yPos, sticky=true) {
        this.x1 = leftX;
        this.x2 = rightX;
        this.y = yPos;
        this.sticky = sticky;
    }
}
class VerticalSurface {
    constructor(xPos, topY, bottomY) {
        this.x = xPos;
        this.y1 = topY;
        this.y2 = bottomY;
    }
}
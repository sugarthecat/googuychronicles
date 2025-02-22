class GameScreen extends GUI {
    constructor() {
        super();
        this.Reset();
    }
    Reset() {
        this.player = new Player();
        this.elements = []
        this.camera = { x: 0, y: 0 }
    }
    Draw(x, y) {
        this.player.update()
        push()
        noStroke()
        fill(255)
        rect(0, 0, 600, 400)
        fill(0, 0, 255)
        push()
        let targetCameraX = this.player.x + 300;
        let targetCameraY = this.player.y + 200;
        translate(targetCameraX,targetCameraY)
        rect(this.player.x - 25, this.player.y - 25, 50, 50)
        pop()
        pop()
        super.Draw(x, y);
    }
}
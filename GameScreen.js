class GameScreen extends GUI {
    constructor() {
        super();
        this.Reset();
    }
    Reset() {
        this.player = new Player(0, 2);
        this.elements = []
        this.camera = { x: 0, y: 0 }
    }
    Draw(x, y) {
        this.player.Update(this.level.rooms)
        push()
        noStroke()
        fill(255)
        rect(0, 0, 600, 400)
        push()
        let targetCameraX = -this.player.x + 300;
        let targetCameraY = -floor((this.player.y) / 300) * 300 + 200 - 150;
        translate(targetCameraX, targetCameraY)
        this.level.Draw()
        fill(0, 0, 255)
        this.player.Draw()
        pop()
        pop()
        super.Draw(x, y);
    }
    keyPressed(key) {
        if (key == " ") {
            this.player.Jump();
        }
    }
}
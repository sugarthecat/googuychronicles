class GameScreen extends GUI {
    constructor() {
        super();
        this.Reset();
    }
    Reset() {
        this.level = new University();
        this.player = new Player(this.level.spawnpointx, this.level.spawnpointy);
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
        //interpolate camera position;
        this.camera.x = lerp (this.camera.x,targetCameraX, min(1,deltaTime / 100))
        this.camera.y = lerp (this.camera.y,targetCameraY, min(1,deltaTime / 100))
        translate(this.camera.x, this.camera.y)
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
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
        this.camera.x = lerp(this.camera.x, targetCameraX, min(1, deltaTime / 100))
        this.camera.y = lerp(this.camera.y, targetCameraY, min(1, deltaTime / 100))
        translate(this.camera.x, this.camera.y)
        this.level.Draw()
        fill(0, 0, 255)
        this.player.Draw()
        pop()
        //health bar
        this.DrawDamageSpikes();
        //damage spikes


        pop()

        super.Draw(x, y);
    }
    DrawDamageSpikes() {
        let progress = 1 - this.player.health / this.player.maxHealth
        let spikeWidth = lerp(0.2,0.5,progress);
        let screenBottom = SCREEN_DIMENSIONS.y - (SCREEN_DIMENSIONS.y - 400) * 0.5
        let screenTop = -1 * (SCREEN_DIMENSIONS.y - 400) * 0.5
        let screenRight = SCREEN_DIMENSIONS.x - (SCREEN_DIMENSIONS.x - 600) * 0.5
        let screenLeft = -1 * (SCREEN_DIMENSIONS.x - 600) * 0.5
        fill(180, 0, 0, 120)
        noStroke()
        for (let i = 0; i < 4; i++) {
            beginShape();
            vertex(screenLeft * (1 - spikeWidth) + screenRight * spikeWidth, screenTop);
            vertex(screenLeft, screenTop);
            vertex(screenLeft, screenTop * (1 - spikeWidth) + screenBottom * spikeWidth);
            vertex(300 * progress + screenLeft * (1 - progress), 200 * progress + screenTop * (1 - progress));
            endShape(CLOSE);

            beginShape();
            vertex(screenLeft * (1 - spikeWidth) + screenRight * spikeWidth, screenBottom);
            vertex(screenLeft, screenBottom);
            vertex(screenLeft, screenBottom * (1 - spikeWidth) + screenTop * spikeWidth);
            vertex(300 * progress + screenLeft * (1 - progress), 200 * progress + screenBottom * (1 - progress));
            endShape(CLOSE);

            beginShape();
            vertex(screenRight * (1 - spikeWidth) + screenLeft * spikeWidth, screenTop);
            vertex(screenRight, screenTop);
            vertex(screenRight, screenTop * (1 - spikeWidth) + screenBottom * spikeWidth);
            vertex(300 * progress + screenRight * (1 - progress), 200 * progress + screenTop * (1 - progress));
            endShape(CLOSE);

            beginShape();
            vertex(screenRight * (1 - spikeWidth) + screenLeft * spikeWidth, screenBottom);
            vertex(screenRight, screenBottom);
            vertex(screenRight, screenBottom * (1 - spikeWidth) + screenTop * spikeWidth);
            vertex(300 * progress + screenRight * (1 - progress), 200 * progress + screenBottom * (1 - progress));
            endShape(CLOSE);
            spikeWidth *= 0.98;
            progress *= 0.98
        }
    }
    keyPressed(key) {
        if (key == " ") {
            this.player.Jump();
        }
    }
}
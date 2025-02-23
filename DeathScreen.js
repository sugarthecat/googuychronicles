class EndScreen extends GUI {
    constructor(message) {
        super();
        this.message = message;
        this.timeCooldown = 0;
    }
    Reset() {
        this.timeCooldown = 0;
        this.elements = [

        ]
    }
    Draw(x, y) {
        this.timeCooldown += deltaTime / 1000;
        push()
        noStroke()
        image(Assets.screens.levelselectscreen, 0, 0, 600, 400);
        fill(255)
        rect(200, 150, 200, 50)
        fill(0)
        textSize(20)
        textAlign(CENTER)
        textFont("Courier New")
        text(this.message, 300, 180)
        if (this.timeCooldown > 2 && this.elements.length < 1) {
            this.elements = [
                new Button(200, 320, 200, 50, "Return",function(){screenOn = "levelselect"})
            ]
        }
        pop()
        super.Draw(x, y);
    }
}
class DeathScreen extends EndScreen {
    constructor() {
        super("You Died.");
    }
}
class WinScreen extends GUI {
    constructor() {
        super("Escaped!");
    }
}
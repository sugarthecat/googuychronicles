class Dialogue {
    constructor(lineArr) {
        this.lineOn = 0;
        this.lines = lineArr;
        this.charsToShow = 0;
    }
    isActive() {
        return false
        return this.lineOn < this.lines.length;
    }
    Advance() {
        if (this.charsToShow < this.lines[this.lineOn].text.length) {
            this.charsToShow = this.lines[this.lineOn].text.length
        } else {
            this.lineOn++;
            this.charsToShow = 0;
        }
    }
    Draw() {
        this.charsToShow += deltaTime / 100;
        push()
        noStroke();
        fill(0)
        rect(160, 240, 400, 150)
        fill(255)
        textFont('Courier New');
        textSize(30)
        text(this.lines[this.lineOn].name, 180, 250, 400, 80);
        textAlign(CENTER)
        textSize(14)
        text(this.lines[this.lineOn].text.substring(0, this.charsToShow), 170, 280, 380, 80);
        text("(Space to continue)", 360, 380);

        let charType = 0; //1: spritesheet, 2: orbguy
        let sprite = false;
        switch (this.lines[this.lineOn].name) {
            case "Professor":
            case "Galvis":
                charType = 1;
                sprite = Assets.spritesheets.madscientist
                break;
            case "Gibraltar":
                charType = 1;
                sprite = Assets.spritesheets.gradstudent
                break;
            case "???":
            case "Goo Guy":
                charType = 2;
                sprite = Assets.spritesheets.googuy
                break;
        }
        if (charType > 0) {
            noSmooth()
            if (charType == 1) {
                image(sprite, 0, 150, 240, 400,
                    sprite.width / 2 * (1), 0,
                    sprite.width / 2, sprite.height)
            }
            if (charType == 2) {
                image(sprite, 0, 200, 200, 200,
                    0, 0,
                    sprite.width, sprite.height / 2)
            }
        }
        pop()
    }
}
class UniversityDialogue extends Dialogue {
    constructor() {
        super([
            { name: "Professor", text: "GIBRALTAR!!" },
            { name: "Gibraltar", text: "!!!" },
            { name: "Professor", text: "What exactly are you doing here outside of school hours?" },
            { name: "Professor", text: "You’re not supposed to be here." },
            { name: "Gibraltar", text: "I- well- I’m just .. y’know doing some more work on my research. You said we need to run multiple trials right? To get accurate data?" },

            { name: "Professor", text: "Yes, but did you think that gave you permission to use the lab without permission?" },
            { name: "Gibraltar", text: "I uh..." },
            { name: "Professor", text: "Well!?" },

            { name: "Gibraltar", text: "No Professor Galvis" },
            { name: "Galvis", text: "Ok so start packing up whatever it is you're doing and go home. I’ll escort you out and we can have a talk about this tomorrow. Your lab privileges are on thin ice, especially after what you brought in last week." },
            { name: "Galvis", text: "I mean c’mon Gibraltar. You’re lucky I don’t report you to the dean after this…" },
            { name: "Galvis", text: "Well!?" },
            { name: "Gibraltar", text: "*sighs under breath* …" },
            { name: "Galvis", text: "You have 2 minutes to clean up. I’ll be outside." },
            { name: "Galvis", text: "*Leaves*" },
            { name: "Gibraltar", text: "..." },
            { name: "Gibraltar", text: "..." },
            { name: "Gibraltar", text: "??" },
            { name: "Gibraltar", text: "Does that look like an … eye?" },
            { name: "???", text: "..." },
            { name: "???", text: "Goo!" },
            { name: "Goo Guy", text: "More Goo!" }
        ]
        )

    }
}
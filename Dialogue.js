class UniversityDialogue {
    d = 0;
    constructor(){
        this.isdialogueing = true;
        this.dialogue = [
            "Professor: GIBRALTAR!!",
            "Gibraltar: !!!",
            "Professor: What exactly are you doing here outside of school hours?",
            "Professor: You’re not supposed to be here.",
            "Gibraltar: I- well- I’m just .. y’know doing some more work on my research. You said we need to run multiple trials right? To get accurate data?",
            "Professor: Yes, but did you think that gave you permission to use the lab without permission?",
            "Gibraltar: I uh …",
            "Professor: Well!?",
            "Gibraltar: No Professor Galvis",
            "Galvis: Ok so start packing up whatever it is you're doing and go home. I’ll escort you out and we can have a talk about this tomorrow. Your lab privileges are on thin ice, especially after what you brought in last week.",
            "Galvis: I mean c’mon Gibraltar. You’re lucky I don’t report you to the dean after this…",
            "Gibraltar: *sighs under breath* …",
            "Galvis: You have 2 minutes to clean up. I’ll be outside. *Galvis leaves*",
            "Gibraltar: …",
            "Gibraltar: …",
            "Gibraltar: ??",
            "Gibraltar: Does that look like an … eye?",
            "*Gibraltar gets dissolved*",
            "???: …",
            "Goo Guy: Goo!",
            "Goo Guy: More Goo!"
        ]
        
    }
    Draw(){
        text(this.dialogue[this.d], 10, 70);
        if(this.d>=this.dialogue.length){
            this.isdialogueing = false;
        }
    }
}
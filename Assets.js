 class Assets{
    static spritesheets = {}
    static rooms = {}
    static loadAssets(){
        this.spritesheets.googuy = loadImage("assets/googuy.png")
        this.rooms.office = loadImage("assets/office.png")
        this.rooms.cafeteria = loadImage("assets/cafeteria.png")
        this.rooms.hallway = loadImage("assets/hallway.png")
        this.rooms.meetingroom = loadImage("assets/meetingroom.png")
        this.rooms.narrowvent = loadImage("assets/narrowvent.png")
        this.rooms.widevent = loadImage("assets/widevent.png")
        this.rooms.staircase = loadImage("assets/staircase.png")
    }
    static setVolume(volume){
    }
}
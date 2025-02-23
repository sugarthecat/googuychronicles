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
        this.rooms.classroom = loadImage("assets/classroom.png")
        this.rooms.door = loadImage("assets/door.png")
        this.rooms.wall = loadImage("assets/wall.png")
        this.rooms.floor = loadImage("assets/floor.png")
    }
    static setVolume(volume){
    }
}
 class Assets{
    static spritesheets = {}
    static rooms = {}
    static entities = {}
    static symbols = {}
    static loadAssets(){
        this.spritesheets.googuy = loadImage("assets/googuy.png")
        this.spritesheets.armyguy = loadImage("assets/armyguy.png")
        this.spritesheets.police = loadImage("assets/police.png")
        this.spritesheets.gradstudent = loadImage("assets/gradstudent.png")
        this.spritesheets.madscientist= loadImage("assets/madscientist.png")
        this.rooms.office = loadImage("assets/office.png")
        this.rooms.cafeteria = loadImage("assets/cafeteria.png")
        this.rooms.hallway = loadImage("assets/hallway.png")
        this.rooms.meetingroom = loadImage("assets/meetingroom.png")
        this.rooms.narrowvent = loadImage("assets/narrowvent.png")
        this.rooms.widevent = loadImage("assets/widevent.png")
        this.rooms.staircase = loadImage("assets/staircase.png")
        this.entities.midAirGooGuy = loadImage("assets/googuymidair.png")
        this.rooms.classroom = loadImage("assets/classroom.png")
        this.rooms.door = loadImage("assets/door.png")
        this.rooms.wall = loadImage("assets/wall.png")
        this.rooms.floor = loadImage("assets/floor.png")
        this.symbols.alert = loadImage("assets/exclamationpoint.png")
        this.symbols.beaker = loadImage("assets/beaker.png")
    }
    static setVolume(volume){
    }
}
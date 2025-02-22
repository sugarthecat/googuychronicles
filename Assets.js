 class Assets{
    static spritesheets = {}
    static rooms = {}
    static loadAssets(){
        this.spritesheets.googuy = loadImage("assets/googuy.png")
        this.rooms.office = loadImage("assets/office.png")
        this.rooms.cafeteria = loadImage("assets/cafeteria.png")
    }
    static setVolume(volume){
    }
}
 class Assets{
    static spritesheets = {}
    static loadAssets(){
        this.spritesheets.googuy = loadImage("assets/googuy.png")
        this.spritesheets.office = loadImage("assets/office.png")
        this.spritesheets.cafeteria = loadImage("assets/cafeteria.png")
    }
    static setVolume(volume){
    }
}
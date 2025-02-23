class LevelSelectScreen extends GUI{
    constructor(){
        super();
        this.elements = [
            new Button(100, 100, 200, 50, "University", function(){screenOn = "game", screens.game.Reset( new University())}),
            new Button(400, 100, 200, 50, "Skyscraper", function(){screenOn = "game", screens.game.Reset( new Skyscraper())}),
            // new Button(100, 200, 400, 50, "Military Base", function(){screenOn = "game", screens.game.Reset( new University())}),
            // new Button(100, 200, 400, 50, "Robot Factory", function(){screenOn = "game", screens.game.Reset( new University())}),
            // new Button(100, 200, 400, 50, "Underground Bunkers", function(){screenOn = "game", screens.game.Reset( new University())}),
            new Button(100, 200, 200, 50, "Area51", function(){screenOn = "game", screens.game.Reset( new Area51())}),
        ]
    }
}
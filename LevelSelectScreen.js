class LevelSelectScreen extends GUI{
    constructor(){
        super();
        this.elements = [
            new Button(25, 100, 150, 50, "University", function(){screenOn = "game", screens.game.Reset( new University())}),
            new Button(225, 100, 150, 50, "Skyscraper", function(){screenOn = "game", screens.game.Reset( new Skyscraper())}),
            new Button(425, 100, 150, 50, "*Coming Soon!*", function(){screenOn = "game", screens.game.Reset( new University())}),
            new Button(25, 200, 150, 50, "*Coming Soon!*", function(){screenOn = "game", screens.game.Reset( new University())}),
            new Button(225, 200, 150, 50, "*Coming Soon!*", function(){screenOn = "game", screens.game.Reset( new University())}),
            new Button(425, 200, 150, 50, "Area51", function(){screenOn = "game", screens.game.Reset( new Area51())}),
            new Button(10, 10, 100, 50, "Back", function(){screenOn = "title", screens.game.Reset( new University())}),
        ]
    }
    Draw(x,y){
        image(Assets.screens.levelselectscreen,0,0,600,400);
        super.Draw(x,y);
    }
}
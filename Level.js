class Level {
    constructor(){
        this.rooms = [];
    }
}

class University extends Level {
    constructor(){
        super();
        this.rooms = [
            //third floor
            new Room(1, 3, 1), //small
            new Wall(2, 3),
            new Room(2, 3, 1), //hallway
            new Wall(3, 3),
            new Room(3, 3, 1), //small
            new Wall(4, 3),
            new Room(4, 3, 1), //small
            new Wall(5, 3),
            new Room(5, 3, 1), //medium
            new Wall(6, 3),

            //second floor
            new Room(2, 2, 1), //vent
            new Room(3, 2, 1), //small
            new Wall(4, 3),
            new Room(4, 2, 1), //staircase

            //first floor
            new Room(0, 1, 1), //hallway
            new Wall(1, 3),
            new Room(1, 1, 1), //small
            new Wall(2, 3),
            new Room(2, 1, 1), //hallway
            new Wall(3, 3),
            new Room(3, 1, 1), //small
            new Wall(4, 3),
            new Room(4, 1, 2), //medium
            new Wall(5, 3),
        ]
    }
}

class Skyscraper extends Level {
    constructor(){
        super();
        this.rooms = [
        ]
    }
}

class MilitaryFort extends Level {
    constructor(){
        super();
        this.rooms = [
        ]
    }
}

class RobotFactory extends Level {
    constructor(){
        super();
        this.rooms = [
        ]
    }
}

class UndergroundBunker extends Level {
    constructor(){
        super();
        this.rooms = [
        ]
    }
}

class Area51 extends Level {
    constructor(){
        super();
        this.rooms = [
        ]
    }
}
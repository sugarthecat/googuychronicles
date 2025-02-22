class Level {
    constructor(){
        this.rooms = [];
    }
    Draw(){
        for (let i = 0; i < this.rooms.length; i++) {
            this.rooms[i].Draw();
        }
    }
}

class University extends Level {
    constructor(){
        super();
        this.possibleSmallRooms = [Assets.spritesheets.office, Assets.spritesheets.cafeteria];
        this.spawnpointx = 0;
        this.spawnpointy = 0;
        this.rooms = [
            
            //third floor
            new SmallRoom(1, 3, Assets.spritesheets.office), //small this.possibleSmallRooms[Math.floor(Math.random() * this.possibleSmallRooms.length)
            new Room(2, 3, 1), //hallway
            new Room(3, 3, 1), //small
            new Room(4, 3, 1), //small
            new Room(5, 3, 1), //medium
            

            //second floor
            new Room(2, 2, 1), //vent
            new Room(3, 2, 1), //small
            new Room(4, 2, 1), //staircase

            //first floor
            new Room(0, 1, 1), //hallway spawnpoint
            new Room(1, 1, 1), //small
            new Room(2, 1, 1), //hallway
            new Room(3, 1, 1), //small
            new Room(4, 1, 2), //medium

            //third floor doors
            new Door(2, 3),
            new Door(3, 3),
            new Door(4, 3),
            new Door(5, 3),
            new Door(6, 3),

            //second floor doors
            new Door(4, 2),

            //first floor doors
            new Door(1, 1),
            new Door(2, 1),
            new Door(3, 1),
            new Door(4, 1),
            new Door(5, 1),

            //third floor walls
            new Wall(1, 3),
            new Wall(7, 3),

            //second floor walls
            new Wall(2, 2),
            new Wall(5, 2),

            //first floor walls
            new Wall(0, 1),
            new Wall(6, 1)
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
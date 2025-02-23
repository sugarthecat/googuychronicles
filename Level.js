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
        this.possibleSmallRooms = [Assets.rooms.office, Assets.rooms.cafeteria];
        this.spawnpointx = 0;
        this.spawnpointy = 0;
        this.rooms = [
            
            //third floor
            new SmallRoom(1, 3, this.possibleSmallRooms[Math.floor(Math.random() * this.possibleSmallRooms.length)]),
            new SmallRoom(2, 3, Assets.rooms.hallway), 
            new SmallRoom(3, 3, this.possibleSmallRooms[Math.floor(Math.random() * this.possibleSmallRooms.length)]), 
            new SmallRoom(4, 3, this.possibleSmallRooms[Math.floor(Math.random() * this.possibleSmallRooms.length)]), 
            new Room(5, 3, 2), //medium

            //second floor
            new SmallRoom(2, 2, Assets.rooms.widevent),
            new SmallRoom(3, 2, this.possibleSmallRooms[Math.floor(Math.random() * this.possibleSmallRooms.length)]), 
            new SmallRoom(4, 2, Assets.rooms.staircase),
            

            //first floor
            new SmallRoom(0, 1, Assets.rooms.hallway),
            new SmallRoom(1, 1, this.possibleSmallRooms[Math.floor(Math.random() * this.possibleSmallRooms.length)]), 
            new SmallRoom(2, 1, Assets.rooms.hallway),
            new SmallRoom(3, 1, this.possibleSmallRooms[Math.floor(Math.random() * this.possibleSmallRooms.length)]), 
            new Room(4, 1, 2), //medium

            //third floor doors
            new Door(2, 3),
            new Door(3, 3),
            new Door(4, 3),
            new Door(5, 3),

            //second floor doors
            new Door(3, 2),
            new Door(4, 2),

            //first floor doors
            new Door(1, 1),
            new Door(2, 1),
            new Door(3, 1),
            new Door(4, 1),

            //third floor walls
            new Wall(1, 3),
            new Wall(7, 3),

            //second floor walls
            new Wall(2, 2),
            new Wall(5, 2),

            //first floor walls
            // new Wall(0, 1),
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
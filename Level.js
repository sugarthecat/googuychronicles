class Level {
    constructor() {
        this.rooms = [];
    }
    Draw() {
        for (let i = 0; i < this.rooms.length; i++) {
            this.rooms[i].Draw();
        }
    }
}

class University extends Level {
    constructor() {
        super();
        let possibleSmallRooms = [SmallOffice, SmallOffice, SmallOffice, SmallMaintainenceRoom, SmallMaintainenceRoom, SmallCafeteria];

        this.spawnpointx = 0;
        this.spawnpointy = 0;

        let smallRoomPositions = [
            { x: 0, floor: 1 },
            { x: 1, floor: 1 },
            { x: 2, floor: 1 },
            { x: 0, floor: 2 },
            { x: 1, floor: 2 },
            { x: 2, floor: 2 },

        ]
        this.rooms = []
        for (let i = 0; i < smallRoomPositions.length; i++) {
            let roomTemplateIndex = floor(random(0,possibleSmallRooms.length))
            let pos = smallRoomPositions[i]
            this.rooms.push(new possibleSmallRooms[roomTemplateIndex](pos.x,pos.floor));
            possibleSmallRooms.splice(roomTemplateIndex, 1)
            if(i==0){
                this.rooms.push(new Wall(pos.x, pos.floor));
            }
            if (i>0){
                if(smallRoomPositions[i-1].floor == pos.floor){
                    this.rooms.push(new Door(pos.x, pos.floor));
                } else {
                    this.rooms.push(new Wall(pos.x, pos.floor));
                }
                if(smallRoomPositions[i+1] != null){
                    if(smallRoomPositions[i+1].floor != pos.floor){
                        this.rooms.push(new Wall(pos.x+1, pos.floor));
                    }
                }
            }
            if(i == smallRoomPositions.length-1){
                this.rooms.push(new Wall(pos.x+1, pos.floor));
            }
        }

        // this.rooms.push(new Floor(0, 1));
    }
}

class Skyscraper extends Level {
    constructor() {
        super();
        this.rooms = [
        ]
    }
}

class MilitaryFort extends Level {
    constructor() {
        super();
        this.rooms = [
        ]
    }
}

class RobotFactory extends Level {
    constructor() {
        super();
        this.rooms = [
        ]
    }
}

class UndergroundBunker extends Level {
    constructor() {
        super();
        this.rooms = [
        ]
    }
}

class Area51 extends Level {
    constructor() {
        super();
        this.rooms = [
        ]
    }
}
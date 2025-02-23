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
        let possibleSmallRooms = [SmallOffice, SmallOffice, SmallOffice, SmallCafeteria, SmallOffice, SmallClassroom];

        this.spawnpointx = 2;
        this.spawnpointy = 1;

        let smallRoomPositions = [
            { x: 1, floor: 1 },
            { x: 3, floor: 1 },
            { x: 3, floor: 2 },
            { x: 1, floor: 3 },
            { x: 3, floor: 3 },
            { x: 4, floor: 3 },
        ]
        this.rooms = []
        for (let i = 0; i < smallRoomPositions.length; i++) {
            let roomTemplateIndex = floor(random(0,possibleSmallRooms.length))
            let pos = smallRoomPositions[i]
            this.rooms.push(new possibleSmallRooms[roomTemplateIndex](pos.x,pos.floor));
            possibleSmallRooms.splice(roomTemplateIndex, 1)
        }

        let hallwayPositions = [
            { x: 0, floor: 1 },
            { x: 2, floor: 1 }
        ]
        for (let i = 0; i < hallwayPositions.length; i++){
            let pos = hallwayPositions[i];
            this.rooms.push(new SmallHallway(pos.x, pos.floor));
        }

        this.rooms.push(new VentRoom(4, 2));
        this.rooms.push(new VentRoom(2, 3));
        let wallsPositions = [
            { x: 0, floor: 1 },
            { x: 5, floor: 1 },
            { x: 2, floor: 2 },
            { x: 5, floor: 2 },
            { x: 0, floor: 3 },
            { x: 7, floor: 3 },
        ]
        for (let i = 0; i < wallsPositions.length; i++){
            let pos = wallsPositions[i];
            this.rooms.push(new Wall(pos.x, pos.floor));
        }

        let doorsPositions = [
            { x: 1, floor: 1 },
            { x: 2, floor: 1 },
            { x: 3, floor: 1 },
            { x: 4, floor: 1 },
            { x: 4, floor: 2 },
            { x: 2, floor: 3 },
            { x: 3, floor: 3 },
            { x: 4, floor: 3 },
            { x: 5, floor: 3 },
        ]
        for (let i = 0; i < doorsPositions.length; i++){
            let pos = doorsPositions[i];
            this.rooms.push(new Door(pos.x, pos.floor));
        }

        let floorsPositions = [
            { x: 0, floor: 0 },
            { x: 1, floor: 0 },
            { x: 2, floor: 0 },
            { x: 3, floor: 0 },
            { x: 4, floor: 0 },
            { x: 0, floor: 1 },
            { x: 1, floor: 1 },
            { x: 2, floor: 1 },
            { x: 3, floor: 1 },
            { x: 3, floor: 2 },
            { x: 4, floor: 2 },
            { x: 1, floor: 3 },
            { x: 2, floor: 3 },
            { x: 3, floor: 3 },
            { x: 4, floor: 3 },
            { x: 5, floor: 3 },
            { x: 6, floor: 3 },
        ]
        for (let i = 0; i < floorsPositions.length; i++){
            let pos = floorsPositions[i];
            this.rooms.push(new Floor(pos.x, pos.floor));
        }
        this.dialogue = new UniversityDialogue();
    }
}

class Skyscraper extends Level {
    constructor() {
        super();
        this.spawnpointx = 2;
        this.spawnpointy = 1;

        let possibleSmallRooms = [SmallOffice, SmallOffice, SmallOffice, SmallRecRoom, SmallRecRoom];
        let smallRoomPositions = [
            { x: 1, floor: 1 },
        ]
        this.rooms = []
        for (let i = 0; i < smallRoomPositions.length; i++) {
            let roomTemplateIndex = floor(random(0,possibleSmallRooms.length))
            let pos = smallRoomPositions[i]
            this.rooms.push(new possibleSmallRooms[roomTemplateIndex](pos.x,pos.floor));
            possibleSmallRooms.splice(roomTemplateIndex, 1)
        }

        let possibleMediumRooms = [MediumMeetingRoom, MediumMeetingRoom];
        let mediumRoomPositions = [
            { x: 1, floor: 1 },
        ]
        for (let i = 0; i < mediumRoomPositions.length; i++){
            let roomTemplateIndex = floor(random(0,possibleMediumRooms.length))
            let pos = mediumRoomPositions[i]
            this.rooms.push(new possibleMediumRooms[roomTemplateIndex](pos.x,pos.floor));
            possibleMediumRooms.splice(roomTemplateIndex, 1)
        }

        let hallwayPositions = [
            { x: 0, floor: 1 },
        ]
        for (let i = 0; i < hallwayPositions.length; i++){
            let pos = hallwayPositions[i];
            this.rooms.push(new SmallHallway(pos.x, pos.floor));
        }

        this.rooms.push(new VentRoom(4, 2));
        this.rooms.push(new VentRoom(2, 3));
        let wallsPositions = [
            { x: 0, floor: 1 },
        ]
        for (let i = 0; i < wallsPositions.length; i++){
            let pos = wallsPositions[i];
            this.rooms.push(new Wall(pos.x, pos.floor));
        }

        let doorsPositions = [
            { x: 1, floor: 1 },
        ]
        for (let i = 0; i < doorsPositions.length; i++){
            let pos = doorsPositions[i];
            this.rooms.push(new Door(pos.x, pos.floor));
        }

        let floorsPositions = [
            { x: 0, floor: 0 },
        ]
        for (let i = 0; i < floorsPositions.length; i++){
            let pos = floorsPositions[i];
            this.rooms.push(new Floor(pos.x, pos.floor));
        }
        this.dialogue = new SkyscraperDialogue();
    }
}

class MilitaryFort extends Level {
    constructor() {
        super();
        this.spawnpointx = 2;
        this.spawnpointy = 1;

        let possibleSmallRooms = [SmallOffice, SmallOffice, SmallOffice, SmallRecRoom, SmallRecRoom];
        let smallRoomPositions = [
            { x: 1, floor: 1 },
        ]
        this.rooms = []
        for (let i = 0; i < smallRoomPositions.length; i++) {
            let roomTemplateIndex = floor(random(0,possibleSmallRooms.length))
            let pos = smallRoomPositions[i]
            this.rooms.push(new possibleSmallRooms[roomTemplateIndex](pos.x,pos.floor));
            possibleSmallRooms.splice(roomTemplateIndex, 1)
        }

        let possibleMediumRooms = [MediumMeetingRoom, MediumMeetingRoom];
        let mediumRoomPositions = [
            { x: 1, floor: 1 },
        ]
        for (let i = 0; i < mediumRoomPositions.length; i++){
            let roomTemplateIndex = floor(random(0,possibleMediumRooms.length))
            let pos = mediumRoomPositions[i]
            this.rooms.push(new possibleMediumRooms[roomTemplateIndex](pos.x,pos.floor));
            possibleMediumRooms.splice(roomTemplateIndex, 1)
        }

        let possibleLargeRooms = [MediumMeetingRoom, MediumMeetingRoom];
        let largeRoomPositions = [
            { x: 1, floor: 1 },
        ]
        for (let i = 0; i < largeRoomPositions.length; i++){
            let roomTemplateIndex = floor(random(0,possibleLargeRooms.length))
            let pos = largeRoomPositions[i]
            this.rooms.push(new possibleLargeRooms[roomTemplateIndex](pos.x,pos.floor));
            possibleLargeRooms.splice(roomTemplateIndex, 1)
        }

        let hallwayPositions = [
            { x: 0, floor: 1 },
        ]
        for (let i = 0; i < hallwayPositions.length; i++){
            let pos = hallwayPositions[i];
            this.rooms.push(new SmallHallway(pos.x, pos.floor));
        }

        this.rooms.push(new VentRoom(4, 2));
        this.rooms.push(new VentRoom(2, 3));
        let wallsPositions = [
            { x: 0, floor: 1 },
        ]
        for (let i = 0; i < wallsPositions.length; i++){
            let pos = wallsPositions[i];
            this.rooms.push(new Wall(pos.x, pos.floor));
        }

        let doorsPositions = [
            { x: 1, floor: 1 },
        ]
        for (let i = 0; i < doorsPositions.length; i++){
            let pos = doorsPositions[i];
            this.rooms.push(new Door(pos.x, pos.floor));
        }

        let floorsPositions = [
            { x: 0, floor: 0 },
        ]
        for (let i = 0; i < floorsPositions.length; i++){
            let pos = floorsPositions[i];
            this.rooms.push(new Floor(pos.x, pos.floor));
        }
        this.dialogue = new MilitaryFortDialogue();
    }
}

class RobotFactory extends Level {
    constructor() {
        super();
        this.spawnpointx = 2;
        this.spawnpointy = 1;

        let possibleSmallRooms = [];
        let smallRoomPositions = [
            { x: 1, floor: 1 },
        ]
        this.rooms = []
        for (let i = 0; i < smallRoomPositions.length; i++) {
            let roomTemplateIndex = floor(random(0,possibleSmallRooms.length))
            let pos = smallRoomPositions[i]
            this.rooms.push(new possibleSmallRooms[roomTemplateIndex](pos.x,pos.floor));
            possibleSmallRooms.splice(roomTemplateIndex, 1)
        }

        let possibleMediumRooms = [MediumMeetingRoom, MediumMeetingRoom];
        let mediumRoomPositions = [
            { x: 1, floor: 1 },
        ]
        for (let i = 0; i < mediumRoomPositions.length; i++){
            let roomTemplateIndex = floor(random(0,possibleMediumRooms.length))
            let pos = mediumRoomPositions[i]
            this.rooms.push(new possibleMediumRooms[roomTemplateIndex](pos.x,pos.floor));
            possibleMediumRooms.splice(roomTemplateIndex, 1)
        }

        let possibleLargeRooms = [MediumMeetingRoom, MediumMeetingRoom];
        let largeRoomPositions = [
            { x: 1, floor: 1 },
        ]
        for (let i = 0; i < largeRoomPositions.length; i++){
            let roomTemplateIndex = floor(random(0,possibleLargeRooms.length))
            let pos = largeRoomPositions[i]
            this.rooms.push(new possibleLargeRooms[roomTemplateIndex](pos.x,pos.floor));
            possibleLargeRooms.splice(roomTemplateIndex, 1)
        }

        let hallwayPositions = [
            { x: 0, floor: 1 },
        ]
        for (let i = 0; i < hallwayPositions.length; i++){
            let pos = hallwayPositions[i];
            this.rooms.push(new SmallHallway(pos.x, pos.floor));
        }

        this.rooms.push(new VentRoom(4, 2));
        this.rooms.push(new VentRoom(2, 3));
        let wallsPositions = [
            { x: 0, floor: 1 },
        ]
        for (let i = 0; i < wallsPositions.length; i++){
            let pos = wallsPositions[i];
            this.rooms.push(new Wall(pos.x, pos.floor));
        }

        let doorsPositions = [
            { x: 1, floor: 1 },
        ]
        for (let i = 0; i < doorsPositions.length; i++){
            let pos = doorsPositions[i];
            this.rooms.push(new Door(pos.x, pos.floor));
        }

        let floorsPositions = [
            { x: 0, floor: 0 },
        ]
        for (let i = 0; i < floorsPositions.length; i++){
            let pos = floorsPositions[i];
            this.rooms.push(new Floor(pos.x, pos.floor));
        }
        this.dialogue = new RobotFactoryDialogue();
    }
}

class UndergroundBunker extends Level {
    constructor() {
        super();
        this.spawnpointx = 2;
        this.spawnpointy = 1;

        let possibleSmallRooms = [];
        let smallRoomPositions = [
            { x: 1, floor: 1 },
        ]
        this.rooms = []
        for (let i = 0; i < smallRoomPositions.length; i++) {
            let roomTemplateIndex = floor(random(0,possibleSmallRooms.length))
            let pos = smallRoomPositions[i]
            this.rooms.push(new possibleSmallRooms[roomTemplateIndex](pos.x,pos.floor));
            possibleSmallRooms.splice(roomTemplateIndex, 1)
        }

        let possibleMediumRooms = [MediumMeetingRoom, MediumMeetingRoom];
        let mediumRoomPositions = [
            { x: 1, floor: 1 },
        ]
        for (let i = 0; i < mediumRoomPositions.length; i++){
            let roomTemplateIndex = floor(random(0,possibleMediumRooms.length))
            let pos = mediumRoomPositions[i]
            this.rooms.push(new possibleMediumRooms[roomTemplateIndex](pos.x,pos.floor));
            possibleMediumRooms.splice(roomTemplateIndex, 1)
        }

        let possibleLargeRooms = [MediumMeetingRoom, MediumMeetingRoom];
        let largeRoomPositions = [
            { x: 1, floor: 1 },
        ]
        for (let i = 0; i < largeRoomPositions.length; i++){
            let roomTemplateIndex = floor(random(0,possibleLargeRooms.length))
            let pos = largeRoomPositions[i]
            this.rooms.push(new possibleLargeRooms[roomTemplateIndex](pos.x,pos.floor));
            possibleLargeRooms.splice(roomTemplateIndex, 1)
        }

        let hallwayPositions = [
            { x: 0, floor: 1 },
        ]
        for (let i = 0; i < hallwayPositions.length; i++){
            let pos = hallwayPositions[i];
            this.rooms.push(new SmallHallway(pos.x, pos.floor));
        }

        this.rooms.push(new VentRoom(4, 2));
        this.rooms.push(new VentRoom(2, 3));
        let wallsPositions = [
            { x: 0, floor: 1 },
        ]
        for (let i = 0; i < wallsPositions.length; i++){
            let pos = wallsPositions[i];
            this.rooms.push(new Wall(pos.x, pos.floor));
        }

        let doorsPositions = [
            { x: 1, floor: 1 },
        ]
        for (let i = 0; i < doorsPositions.length; i++){
            let pos = doorsPositions[i];
            this.rooms.push(new Door(pos.x, pos.floor));
        }

        let floorsPositions = [
            { x: 0, floor: 0 },
        ]
        for (let i = 0; i < floorsPositions.length; i++){
            let pos = floorsPositions[i];
            this.rooms.push(new Floor(pos.x, pos.floor));
        }
        this.dialogue = new UndergroundBunkerDialogue();
    }
}

class Area51 extends Level {
    constructor() {
        super();
        this.spawnpointx = 2;
        this.spawnpointy = 1;

        let possibleSmallRooms = [];
        let smallRoomPositions = [
            { x: 1, floor: 1 },
        ]
        this.rooms = []
        for (let i = 0; i < smallRoomPositions.length; i++) {
            let roomTemplateIndex = floor(random(0,possibleSmallRooms.length))
            let pos = smallRoomPositions[i]
            this.rooms.push(new possibleSmallRooms[roomTemplateIndex](pos.x,pos.floor));
            possibleSmallRooms.splice(roomTemplateIndex, 1)
        }

        let possibleMediumRooms = [MediumMeetingRoom, MediumMeetingRoom];
        let mediumRoomPositions = [
            { x: 1, floor: 1 },
        ]
        for (let i = 0; i < mediumRoomPositions.length; i++){
            let roomTemplateIndex = floor(random(0,possibleMediumRooms.length))
            let pos = mediumRoomPositions[i]
            this.rooms.push(new possibleMediumRooms[roomTemplateIndex](pos.x,pos.floor));
            possibleMediumRooms.splice(roomTemplateIndex, 1)
        }

        let possibleLargeRooms = [MediumMeetingRoom, MediumMeetingRoom];
        let largeRoomPositions = [
            { x: 1, floor: 1 },
        ]
        for (let i = 0; i < largeRoomPositions.length; i++){
            let roomTemplateIndex = floor(random(0,possibleLargeRooms.length))
            let pos = largeRoomPositions[i]
            this.rooms.push(new possibleLargeRooms[roomTemplateIndex](pos.x,pos.floor));
            possibleLargeRooms.splice(roomTemplateIndex, 1)
        }

        let hallwayPositions = [
            { x: 0, floor: 1 },
        ]
        for (let i = 0; i < hallwayPositions.length; i++){
            let pos = hallwayPositions[i];
            this.rooms.push(new SmallHallway(pos.x, pos.floor));
        }

        this.rooms.push(new VentRoom(4, 2));
        this.rooms.push(new VentRoom(2, 3));
        let wallsPositions = [
            { x: 0, floor: 1 },
        ]
        for (let i = 0; i < wallsPositions.length; i++){
            let pos = wallsPositions[i];
            this.rooms.push(new Wall(pos.x, pos.floor));
        }

        let doorsPositions = [
            { x: 1, floor: 1 },
        ]
        for (let i = 0; i < doorsPositions.length; i++){
            let pos = doorsPositions[i];
            this.rooms.push(new Door(pos.x, pos.floor));
        }

        let floorsPositions = [
            { x: 0, floor: 0 },
        ]
        for (let i = 0; i < floorsPositions.length; i++){
            let pos = floorsPositions[i];
            this.rooms.push(new Floor(pos.x, pos.floor));
        }
        this.dialogue = new Area51Dialogue();
    }
}
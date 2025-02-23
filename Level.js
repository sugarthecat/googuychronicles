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
        let possibleSmallRooms = [SmallOffice, SmallCafeteria, SmallClassroom, SmallClassroom, SmallClassroom];

        this.spawnpointx = 0;
        this.spawnpointy = 0;
        this.guards = [new MeleeGradStudent(1, 2, 1), 
                       new MeleeGradStudent(5, 6, 1), 
                       new MeleeScientist(1, 1.3, 2), 
                       new MeleeGradStudent(5, 6, 2),
                       new MeleeGradStudent(3, 4, 2),
                       new MeleeScientist(3, 4, 1)]
        let smallRoomPositions = [
            { x: 1, floor: 1 },
            { x: 7, floor: 1 },
            { x: 1, floor: 2 },
            { x: 3, floor: 2 },
            { x: 4, floor: 2 },
        ]
        this.rooms = []
        for (let i = 0; i < smallRoomPositions.length; i++) {
            let roomTemplateIndex = floor(random(0,possibleSmallRooms.length))
            let pos = smallRoomPositions[i]
            this.rooms.push(new possibleSmallRooms[roomTemplateIndex](pos.x,pos.floor));
            possibleSmallRooms.splice(roomTemplateIndex, 1)
        }

        let possibleMediumRooms = [MediumAbandonedLibrary, MediumGreenhouse];
        let mediumRoomPositions = [
            { x: 3, floor: 1 },
            { x: 6, floor: 2 },
        ]
        for (let i = 0; i < mediumRoomPositions.length; i++){
            let roomTemplateIndex = floor(random(0,possibleMediumRooms.length))
            let pos = mediumRoomPositions[i]
            this.rooms.push(new possibleMediumRooms[roomTemplateIndex](pos.x,pos.floor));
            possibleMediumRooms.splice(roomTemplateIndex, 1)
        }

        let hallwayPositions = [
            { x: 0, floor: 1 },
            { x: 6, floor: 1 },
        ]
        for (let i = 0; i < hallwayPositions.length; i++){
            let pos = hallwayPositions[i];
            this.rooms.push(new SmallHallway(pos.x, pos.floor));
        }

        let ventPositions = [
            { x: 2, floor: 2 },
            { x: 5, floor: 2 },
        ]
        for (let i = 0; i < ventPositions.length; i++){
            let pos = ventPositions[i];
            this.rooms.push(new VentRoom(pos.x, pos.floor));
        }

        let wallsPositions = [
            { x: 0, floor: 1 },
            { x: 3, floor: 1 },
            { x: 8, floor: 1 },
            { x: 1, floor: 2 },
            { x: 8, floor: 2 },
        ]
        for (let i = 0; i < wallsPositions.length; i++){
            let pos = wallsPositions[i];
            this.rooms.push(new Wall(pos.x, pos.floor));
        }

        let doorsPositions = [
            { x: 1, floor: 1 },
            { x: 2, floor: 1 },
            { x: 5, floor: 1 },
            { x: 6, floor: 1 },
            { x: 7, floor: 1 },

            { x: 2, floor: 2 },
            { x: 3, floor: 2 },
            { x: 4, floor: 2 },
            { x: 5, floor: 2 },
            { x: 6, floor: 2 },
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
            { x: 5, floor: 0 },
            { x: 6, floor: 0 },
            { x: 7, floor: 0 },

            { x: 0, floor: 1 },
            { x: 1, floor: 1 },
            { x: 3, floor: 1 },
            { x: 4, floor: 1 },
            { x: 6, floor: 1 },
            { x: 7, floor: 1 },

            { x: 1, floor: 2 },
            { x: 2, floor: 2 },
            { x: 3, floor: 2 },
            { x: 4, floor: 2 },
            { x: 5, floor: 2 },
            { x: 6, floor: 2 },
            { x: 7, floor: 2 },
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
        let possibleSmallRooms = [SmallCafeteria, SmallCafeteria, SmallOffice, SmallOffice, SmallOffice, SmallOffice];

        this.spawnpointx = 2;
        this.spawnpointy = 7;
        this.guards = [new MeleeGradStudent(1, 2, 1), new MeleeGradStudent(0, 2, 2)]

        let smallRoomPositions = [
            { x: 3, floor: 3 },
            { x: 3, floor: 4 },
            { x: 1, floor: 6 },
            { x: 4, floor: 7 },
            { x: 2, floor: 8 },
        ]
        this.rooms = []
        for (let i = 0; i < smallRoomPositions.length; i++) {
            let roomTemplateIndex = floor(random(0,possibleSmallRooms.length))
            let pos = smallRoomPositions[i]
            this.rooms.push(new possibleSmallRooms[roomTemplateIndex](pos.x,pos.floor));
            possibleSmallRooms.splice(roomTemplateIndex, 1)
        }

        let possibleMediumRooms = [MediumAbandonedLibrary, MediumGreenhouse, MediumMeetingRoom, MediumMeetingRoom, MediumMeetingRoom, MediumMeetingRoom,];
        let mediumRoomPositions = [
            { x: 2, floor: 1 },
            { x: 0, floor: 2 },
            { x: 3, floor: 2 },
            { x: 4, floor: 5 },
            { x: 3, floor: 6 },
            { x: 1, floor: 7 },
        ]
        for (let i = 0; i < mediumRoomPositions.length; i++){
            let roomTemplateIndex = floor(random(0,possibleMediumRooms.length))
            let pos = mediumRoomPositions[i]
            this.rooms.push(new possibleMediumRooms[roomTemplateIndex](pos.x,pos.floor));
            possibleMediumRooms.splice(roomTemplateIndex, 1)
        }

        let hallwayPositions = [
            { x: 4, floor: 1 },
            { x: 3, floor: 5 },
        ]
        for (let i = 0; i < hallwayPositions.length; i++){
            let pos = hallwayPositions[i];
            this.rooms.push(new SmallHallway(pos.x, pos.floor));
        }

        let ventPositions = [
            { x: 5, floor: 2 },
            { x: 2, floor: 3 },
            { x: 1, floor: 4 },
            { x: 4, floor: 4 },
            { x: 2, floor: 5 },
            { x: 6, floor: 6 },
            { x: 0, floor: 7 },
            { x: 5, floor: 7 },
            { x: 3, floor: 8 },
        ]
        for (let i = 0; i < ventPositions.length; i++){
            let pos = ventPositions[i];
            this.rooms.push(new VentRoom(pos.x, pos.floor));
        }

        let wallsPositions = [
            { x: 2, floor: 1 },
            { x: 6, floor: 1 },
            { x: 0, floor: 2 },
            { x: 1, floor: 3 },
            { x: 5, floor: 3 },
            { x: 1, floor: 4 },
            { x: 5, floor: 4 },
            { x: 2, floor: 5 },
            { x: 7, floor: 5 },
            { x: 0, floor: 6 },
            { x: 2, floor: 6 },
            { x: 3, floor: 6 },
            { x: 7, floor: 6 },
            { x: 0, floor: 7 },
            { x: 6, floor: 7 },
            { x: 4, floor: 8 },
        ]
        for (let i = 0; i < wallsPositions.length; i++){
            let pos = wallsPositions[i];
            this.rooms.push(new Wall(pos.x, pos.floor));
        }

        let doorsPositions = [
            { x: 4, floor: 1 },
            { x: 5, floor: 1 },
            { x: 5, floor: 2 },
            { x: 2, floor: 2 },
            { x: 3, floor: 2 },
            { x: 5, floor: 2 },
            { x: 2, floor: 3 },
            { x: 3, floor: 3 },
            { x: 4, floor: 3 },
            { x: 2, floor: 4 },
            { x: 3, floor: 4 },
            { x: 4, floor: 4 },
            { x: 3, floor: 5 },
            { x: 4, floor: 5 },
            { x: 6, floor: 5 },
            { x: 1, floor: 6 },
            { x: 5, floor: 6 },
            { x: 6, floor: 6 },
            { x: 1, floor: 7 },
            { x: 3, floor: 7 },
            { x: 4, floor: 7 },
            { x: 5, floor: 7 },
            { x: 3, floor: 8 },
        ]
        for (let i = 0; i < doorsPositions.length; i++){
            let pos = doorsPositions[i];
            this.rooms.push(new Door(pos.x, pos.floor));
        }

        let floorsPositions = [
            { x: 2, floor: 0 },
            { x: 3, floor: 0 },
            { x: 4, floor: 0 },
            { x: 5, floor: 0 },

            { x: 0, floor: 1 },
            { x: 1, floor: 1 },
            { x: 2, floor: 1 },
            { x: 3, floor: 1 },
            { x: 4, floor: 1 },

            { x: 1, floor: 2 },
            { x: 3, floor: 2 },
            { x: 4, floor: 2 },

            { x: 2, floor: 3 },
            { x: 3, floor: 3 },

            { x: 1, floor: 4 },
            { x: 3, floor: 4 },
            { x: 4, floor: 4 },
            { x: 5, floor: 4 },
            { x: 6, floor: 4 },

            { x: 0, floor: 5 },
            { x: 2, floor: 5 },
            { x: 3, floor: 5 },
            { x: 4, floor: 5 },
            { x: 5, floor: 5 },

            { x: 1, floor: 6 },
            { x: 2, floor: 6 },
            { x: 3, floor: 6 },
            { x: 4, floor: 6 },
            { x: 6, floor: 6 },

            { x: 0, floor: 7 },
            { x: 1, floor: 7 },
            { x: 2, floor: 7 },
            { x: 4, floor: 7 },
            { x: 5, floor: 7 },

            { x: 3, floor: 8 },
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
        this.spawnpointx = 5;
        this.spawnpointy = 4;

        this.guards = [new MeleeGradStudent(1, 2, 1), new MeleeGradStudent(0, 2, 2)]

        let possibleSmallRooms = [SmallOffice, SmallOffice, SmallOffice, SmallOffice, SmallOffice, SmallCafeteria, SmallOffice]; // change last small office to helipad
        let smallRoomPositions = [
            { x: 1, floor: 2 },
            { x: 2, floor: 3 },
            { x: 4, floor: 3 },
            { x: 5, floor: 3 },
            { x: 6, floor: 3 },
            { x: 3, floor: 4 },
            { x: 5, floor: 5 },
        ]
        this.rooms = []
        for (let i = 0; i < smallRoomPositions.length; i++) {
            let roomTemplateIndex = floor(random(0,possibleSmallRooms.length))
            let pos = smallRoomPositions[i]
            this.rooms.push(new possibleSmallRooms[roomTemplateIndex](pos.x,pos.floor));
            possibleSmallRooms.splice(roomTemplateIndex, 1)
        }

        let possibleMediumRooms = [MediumMeetingRoom, MediumMeetingRoom, MediumGreenhouse, MediumFurnace];
        let mediumRoomPositions = [
            { x: 0, floor: 1 },
            { x: 3, floor: 1 },
            { x: 8, floor: 3 },
            { x: 5, floor: 4 },
        ]
        for (let i = 0; i < mediumRoomPositions.length; i++){
            let roomTemplateIndex = floor(random(0,possibleMediumRooms.length))
            let pos = mediumRoomPositions[i]
            this.rooms.push(new possibleMediumRooms[roomTemplateIndex](pos.x,pos.floor));
            possibleMediumRooms.splice(roomTemplateIndex, 1)
        }

        let possibleLargeRooms = [LargeShootingRange, LargeShootingRange]; //LargeArmory
        let largeRoomPositions = [
            { x: 4, floor: 2 },
            { x: 7, floor: 2 },
        ]
        for (let i = 0; i < largeRoomPositions.length; i++){
            let roomTemplateIndex = floor(random(0,possibleLargeRooms.length))
            let pos = largeRoomPositions[i]
            this.rooms.push(new possibleLargeRooms[roomTemplateIndex](pos.x,pos.floor));
            possibleLargeRooms.splice(roomTemplateIndex, 1)
        }

        // let hallwayPositions = [
        //     { x: 0, floor: 1 },
        // ]
        // for (let i = 0; i < hallwayPositions.length; i++){
        //     let pos = hallwayPositions[i];
        //     this.rooms.push(new SmallHallway(pos.x, pos.floor));
        // }

        let wallsPositions = [
            { x: 0, floor: 1 },
            { x: 1, floor: 2 },
            { x: 2, floor: 3 },
            { x: 3, floor: 4 },
            { x: 4, floor: 5 },

            { x: 5, floor: 1 },
            { x: 11, floor: 2 },
            { x: 11, floor: 3 },
            { x: 8, floor: 4 },

            { x: 7, floor: 3 },
        ]
        for (let i = 0; i < wallsPositions.length; i++){
            let pos = wallsPositions[i];
            this.rooms.push(new Wall(pos.x, pos.floor));
        }

        let ventPositions = [
            { x: 2, floor: 2 },
            { x: 3, floor: 3 },
            { x: 10, floor: 3 },
            { x: 7, floor: 4 },
            { x: 4, floor: 5 },
        ]
        for (let i = 0; i < ventPositions.length; i++){
            let pos = ventPositions[i];
            this.rooms.push(new VentRoom(pos.x, pos.floor));
        }

        let doorsPositions = [
            { x: 2, floor: 1 },
            { x: 3, floor: 1 },

            { x: 2, floor: 2 },
            { x: 3, floor: 2 },
            { x: 4, floor: 2 },
            { x: 7, floor: 2 },
            { x: 10, floor: 2 },

            { x: 3, floor: 3 },
            { x: 4, floor: 3 },
            { x: 5, floor: 3 },
            { x: 6, floor: 3 },
            { x: 8, floor: 3 },
            { x: 10, floor: 3 },

            { x: 4, floor: 4 },
            { x: 5, floor: 4 },
            { x: 7, floor: 4 },

            { x: 5, floor: 5 },
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
            { x: 3, floor: 1 },
            { x: 4, floor: 1 },
            { x: 5, floor: 1 },
            { x: 6, floor: 1 },
            { x: 7, floor: 1 },
            { x: 8, floor: 1 },
            { x: 9, floor: 1 },
            { x: 10, floor: 1 },

            { x: 1, floor: 2 },
            { x: 2, floor: 2 },
            { x: 4, floor: 2 },
            { x: 5, floor: 2 },
            { x: 6, floor: 2 },
            { x: 7, floor: 2 },
            { x: 8, floor: 2 },
            { x: 9, floor: 2 },
            { x: 11, floor: 2 },

            { x: 2, floor: 3 },
            { x: 3, floor: 3 },
            { x: 4, floor: 3 },
            { x: 5, floor: 3 },
            { x: 6, floor: 3 },
            { x: 8, floor: 3 },
            { x: 9, floor: 3 },
            { x: 10, floor: 3 },
            { x: 11, floor: 3 },

            { x: 3, floor: 4 },
            { x: 5, floor: 4 },
            { x: 6, floor: 4 },
            { x: 7, floor: 4 },

            { x: 4, floor: 5 },
        ]
        for (let i = 0; i < floorsPositions.length; i++){
            let pos = floorsPositions[i];
            this.rooms.push(new Floor(pos.x, pos.floor));
        }
        
        this.dialogue = new Area51Dialogue();
    }
}
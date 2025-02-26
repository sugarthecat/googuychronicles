class Level {
    constructor() {
        this.rooms = [];
        this.song;
    }
    Draw(camerax,cameray) {
        let properCameraY = (-cameray) - (SCREEN_DIMENSIONS.y - TARGET_SCREEN_DIMENSIONS.y) /2 
        let properCameraX = (-camerax) - (SCREEN_DIMENSIONS.x - TARGET_SCREEN_DIMENSIONS.x) /2 
        for (let i = 0; i < this.rooms.length; i++) {
            if (this.rooms[i].x > properCameraX + SCREEN_DIMENSIONS.x){
                continue;
            }
            if (this.rooms[i].y > properCameraY + SCREEN_DIMENSIONS.y){
                continue;
            }
            if (this.rooms[i].x + this.rooms[i].w < properCameraX){
                continue;
            }
            if (this.rooms[i].y + this.rooms[i].h < properCameraY){
                continue;
            }
            this.rooms[i].Draw();
        }
    }
}

class University extends Level {
    constructor() {
        super();
        this.rooms = []
        this.rooms.push(new EscapeRoom(0,1));
        
        this.song = Assets.music.entergoo;
        let possibleSmallRooms = [SmallOffice, SmallCafeteria, SmallOffice, SmallOffice, SmallClassroom];

        this.spawnpointx = -1;
        this.spawnpointy = 0;
        this.guards = [new MeleeGradStudent(1, 2, 1, 50), 
                       new MeleeGradStudent(5, 6, 1, 50), 
                       new MeleeScientist(1, 1.3, 2, 90), 
                       new MeleeGradStudent(5, 6, 2, 50),
                       new MeleeGradStudent(3, 4, 2, 50),
                       new MeleeScientist(3, 4, 1, 90)]
        let smallRoomPositions = [
            { x: 1, floor: 1 },
            { x: 7, floor: 1 },
            { x: 1, floor: 2 },
            { x: 3, floor: 2 },
            { x: 4, floor: 2 },
        ]
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
            { x: -1, floor: 1 },
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
            this.rooms.push(new VentRoom2(pos.x, pos.floor));
        }

        let wallsPositions = [
            { x: -1, floor: 1 },
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
            { x: 0, floor: 1 },
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
            { x: -1, floor: 0 },
            { x: -1, floor: 1 },

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
        this.song = Assets.music.entergoo
        this.rooms = []

        this.rooms.push(new MediumHelipad(1, 8));
        this.rooms.push(new EscapeRoom(4,8));

        let possibleSmallRooms = [SmallCafeteria, SmallOffice, SmallOffice, SmallOffice];

        this.spawnpointx = 2;
        this.spawnpointy = 7;
        this.guards = [ new RangedPolice(3, 4, 5, 20),
                        new RangedPolice(2, 3, 1, 50),
                        new RangedPolice(3, 4, 1, 50),
                        new MeleeGradStudent(3, 4, 3, 80),
                        new MeleePolice(3, 4, 2, 80),
                        new RangedPolice(3, 4, 4, 40),
                        new MeleeScientist(3, 4, 3, 100),
                        new MeleeGradStudent(1, 2, 7, 60), 
                       new MeleeGradStudent(3, 4, 7, 100), 
                       new MeleePolice(5, 6, 6, 160)]

        let smallRoomPositions = [
            { x: 3, floor: 3 },
            { x: 3, floor: 4 },
            { x: 1, floor: 6 },
            { x: 4, floor: 7 },
        ]
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
            { x: 5, floor: 8 },
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
            { x: 4, floor: 8 },
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
            { x: 4, floor: 8 },
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
        this.song = Assets.music.robot
        this.rooms = []
        this.spawnpointx = 2;
        this.spawnpointy = 1;

        let possibleSmallRooms = [SmallOffice, SmallOffice, SmallOffice, SmallRecRoom, SmallRecRoom];
        let smallRoomPositions = [
            { x: 1, floor: 1 },
        ]
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
        this.song = Assets.music.robot
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
        this.song = Assets.music.fifty1
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
        this.song = Assets.music.fifty1
        this.spawnpointx = 5;
        this.spawnpointy = 5;
        this.rooms = []

        this.rooms.push(new MediumHelipad(5, 5));
        this.rooms.push(new EscapeRoom(3,5));
        
        this.spawnpointx = 6;
        this.spawnpointy = 2;

        this.guards = [ 
            new MeleeGradStudent(5, 5, 5, 50),

            new MeleePolice(5, 6, 4, 160),
            new MeleeScientist(5, 6, 4, 200),  //furnace
            new RangedPolice(2, 3, 4, 20),


            new MeleeScientist(5, 6, 3, 200),
            new MeleeScientist(3, 4, 3, 100),


            new RangedPolice(2, 3, 2, 100),
            new MeleeScientist(1, 2, 2, 150),
            new MeleeScientist(1, 2, 2, 150),
            new RangedPolice(1, 2, 2, 100),
            new RangedPolice(8, 9, 2, 60),
            new MeleeScientist(3, 4, 2, 300),

            new RangedPolice(1, 2, 1, 70),
            new MeleePolice(2, 3, 1, 500), //last floor
            new RangedPolice(3, 4, 1, 200),
            

           
           new MeleeGradStudent(3, 4, 3, 200)]
           

        let possibleSmallRooms = [SmallOffice, SmallOffice, SmallOffice, SmallOffice, SmallOffice, SmallCafeteria, SmallOffice]; // change last small office to helipad
        let smallRoomPositions = [
            { x: 1, floor: 2 },
            { x: 2, floor: 3 },
            { x: 4, floor: 3 },
            { x: 5, floor: 3 },
            { x: 6, floor: 3 },
            { x: 3, floor: 4 },
        ]
        
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

        let wallsPositions = [
            { x: 0, floor: 1 },
            { x: 1, floor: 2 },
            { x: 2, floor: 3 },
            { x: 3, floor: 4 },
            { x: 3, floor: 5 },

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

            { x: 4, floor: 5 },
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

            { x: 3, floor: 5 },
            { x: 4, floor: 5 },
        ]
        for (let i = 0; i < floorsPositions.length; i++){
            let pos = floorsPositions[i];
            this.rooms.push(new Floor(pos.x, pos.floor));
        }
        
        this.dialogue = new Area51Dialogue();
    }
}
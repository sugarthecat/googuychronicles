class SmallOffice extends SmallRoom {
    constructor(x, floor) {
        super(x, floor, Assets.rooms.office)
    }
}
class SmallClassroom extends SmallRoom {
    constructor(x, floor) {
        super(x, floor, Assets.rooms.classroom)
    }
}
class SmallCafeteria extends SmallRoom {
    constructor(x, floor) {
        super(x, floor, Assets.rooms.cafeteria)
    }
}
class SmallHallway extends SmallRoom {
    constructor(x, floor) {
        super(x, floor, Assets.rooms.hallway)
    }
}
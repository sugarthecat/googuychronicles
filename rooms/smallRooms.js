class SmallOffice extends SmallRoom {
    constructor(x, floor) {
        super(x, floor, Assets.rooms.office)
    }
}
class SmallMaintainenceRoom extends SmallRoom {
    constructor(x, floor) {
        super(x, floor, Assets.rooms.hallway)
    }
}
class SmallCafeteria extends SmallRoom {
    constructor(x, floor) {
        super(x, floor, Assets.rooms.cafeteria)
    }
}
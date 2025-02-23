class SmallRoom extends GameRoom{
    constructor(x,floor,background){
        super(x,1,floor,1,background);
    }
}
class SmallOffice extends SmallRoom {
    constructor(x, floor) {
        super(x, floor, Assets.rooms.office)
        if (random() < 0.5) {
            this.objects.push(
                new Beaker(80, 170)
            )
        } else {
            this.objects.push(
                new Beaker(220, 170)
            )

        }
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
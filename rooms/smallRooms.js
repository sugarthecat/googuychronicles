class SmallRoom extends GameRoom{
    constructor(x,floor,background){
        super(x,1,floor,1,background);
    }
}
class MediumRoom extends GameRoom{
    constructor(x,floor,background){
        super(x,2,floor,1,background);
    }
}
class LargeRoom extends GameRoom{
    constructor(x,floor,background){
        super(x,3,floor,1,background);
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
class SmallRecRoom extends SmallRoom {
    constructor(x, floor) {
        super(x, floor, Assets.rooms.recroom)
    }
}
class SmallHallway extends SmallRoom {
    constructor(x, floor) {
        super(x, floor, Assets.rooms.hallway)
    }
}
class MediumMeetingRoom extends MediumRoom {
    constructor(x, floor) {
        super(x, floor, Assets.rooms.meetingroom)
    }
}
class LargeShootingRange extends LargeRoom {
    constructor(x, floor) {
        super(x, floor, Assets.rooms.shootingrange)
    }
}
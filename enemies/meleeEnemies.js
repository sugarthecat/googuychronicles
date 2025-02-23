class MeleeGradStudent extends Enemy {
    constructor(patrolXStart, patrolXEnd, floor, speed) {
        super(patrolXStart, patrolXEnd, floor, Assets.spritesheets.gradstudent, 15, 50, speed)
    }
}
class MeleeScientist extends Enemy {
    constructor(patrolXStart, patrolXEnd, floor, speed) {
        super(patrolXStart, patrolXEnd, floor, Assets.spritesheets.madscientist, 15, 50, speed)
    }
}
class MeleePolice extends Enemy {
    constructor(patrolXStart, patrolXEnd, floor, speed) {
        super(patrolXStart, patrolXEnd, floor, Assets.spritesheets.police, 15, 50, speed)
}
}

class MeleeGradStudent extends Enemy {
    constructor(patrolXStart, patrolXEnd, floor) {
        super(patrolXStart, patrolXEnd, floor, Assets.spritesheets.gradstudent, 15, 50, 50)
    }
}
class MeleeScientist extends Enemy {
    constructor(patrolXStart, patrolXEnd, floor) {
        super(patrolXStart, patrolXEnd, floor, Assets.spritesheets.madscientist, 15, 50, 120)
    }
}
class MeleePolice extends Enemy {
    constructor(patrolXStart, patrolXEnd, floor) {
        super(patrolXStart, patrolXEnd, floor, Assets.spritesheets.police, 15, 50, 50)
}
}

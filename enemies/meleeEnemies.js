class MeleeGradStudent extends Enemy {
    constructor(patrolXStart, patrolXEnd, floor) {
        super(patrolXStart, patrolXEnd, floor, Assets.spritesheets.gradstudent, 15, 50, 80)
    }
}
class MeleeScientist extends Enemy {
    constructor(patrolXStart, patrolXEnd, floor) {
        super(patrolXStart, patrolXEnd, floor, Assets.spritesheets.madscientist, 15, 50, 30)
    }
}

class RangedPolice extends Enemy{ 
    constructor(patrolXStart, patrolXEnd, floor) {
        super(patrolXStart, patrolXEnd, floor, Assets.spritesheets.police, 15, 50, 80)
}

Update(player) {
    super.Update(player); //essentially is a melee enemy
}

Draw() {
    super.Draw();
    push() 
    fill(255, 0, 0)
    rect(this.x, this.y, 50, 10) //gun
    pop()
}
}
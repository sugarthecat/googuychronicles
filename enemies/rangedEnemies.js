class RangedPolice extends Enemy{ 
    constructor(patrolXStart, patrolXEnd, floor) {
        super(patrolXStart, patrolXEnd, floor, Assets.spritesheets.police, 15, 50, 80)
        this.shooting_cooldown = 0; //3 sec
        this.bullet = null;
}

Update(player) {
    super.Update(player); //essentially is a melee enemy
    if(this.spottedPlayer && this.bullet == null) {  //shoots one time
    this.Shoot();
    }

    if(this.bullet != null) {
        this.bullet.updateXPos()  //continuously updates
    }
    }


Shoot() {  
    console.log("Attacked")

    let bulletX=this.x;

    bulletX-=20;
    
    this.bullet = new Bullet(bulletX, this.y, -5);
}

Draw() {
    super.Draw();
    push() 

    
    translate(this.x, this.y);   //the origin is now the enemy
    fill(255, 0, 0) 
    if(!this.facingRight) { //if left, reflect it
    scale(-1, 1)
    rect(20, 0, 50, 10)
    }
    else {
    rect(-20, 0, 50, 10)
    }
    pop()

    if(this.bullet !== null) {
    this.bullet.Draw()
    }
}
}
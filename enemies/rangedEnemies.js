class RangedPolice extends Enemy {
    constructor(patrolXStart, patrolXEnd, floor) {
        super(patrolXStart, patrolXEnd, floor, Assets.spritesheets.police, 100, 200, 100)
        this.shooting_cooldown = 3; //3 sec
        this.bullet = null;
    }

    Update(player) {
        if (this.bullet && this.bullet.used || this.shooting_cooldown < 1) {
            this.bullet = null;
        }
        super.Update(player); //essentially is a melee enemy
        if (this.spottedPlayer) {
            this.shooting_cooldown -= deltaTime / 1000
            if (this.shooting_cooldown < 0) {  //shoots one time
                this.Shoot(player);
                this.shooting_cooldown = 3;
            }
        }
        if (this.bullet != null) {
            this.bullet.updateXPos()  //continuously updates
        }
    }
    spotPlayer(){
        super.spotPlayer();
        this.shooting_cooldown =1
    }
    Shoot(player) {
        console.log("Attacked")

        if (this.x > player.x) {
            this.bullet = new Bullet(this.x - 20, this.y + 5, -5);
        } else {
            this.bullet = new Bullet(this.x + 20, this.y + 5, 5);
        }
    }

    Draw() {
        super.Draw();
        push()
        translate(this.x, this.y);   //the origin is now the enemy
        fill(255, 0, 0)
        if (!this.facingRight) { //if left, reflect it
            scale(-1, 1)
        }
        rect(-15, 0, 50, 10)

        pop()
        if (this.bullet !== null) {
            this.bullet.Draw()
        }
    }
}
class Bullet {
    constructor(x, y, velocity) {
        this.x = x;
        this.y = y;
        this.w = 20
        this.h = 30;
        this.velocity = velocity;
        this.used = false;
    }
    updateXPos() {
        this.x += this.velocity;
    }
    Draw() {
        push()
        fill(255, 255, 255)
        translate(this.x, this.y)
        rect(-this.w / 2, -this.h / 2, this.w, this.h)
        pop()
    }
}
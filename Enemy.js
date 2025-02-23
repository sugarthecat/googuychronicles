class Enemy {

    constructor(patrolXStart, patrolXEnd, floor, spritesheet = Assets.spritesheets.armyguy, minDist = 100, maxDist = 250, speed = 120) {  //same as player pos
        this.x = random(patrolXStart * 350, patrolXEnd * 350);
        this.spritesheet = spritesheet;
        this.xStart = patrolXStart * 350 + 350 / 2;
        this.xEnd = patrolXEnd * 350 + 350 / 2;
        this.y = floor * -350 + 200;
        this.w = 40;
        this.h = 100;
        this.minDist = minDist;
        this.maxDist = maxDist;
        this.stunTime = 0;
        this.speed = speed;
        this.atDistance = false;
        this.spottedPlayer = true;
        this.facingRight = true;
        this.alive = true;

        this.walkingProgress = 0;
    }

    Update(player) {
        let distToPlayer = abs(this.x - player.x)
        let yDist = abs(this.y - player.y)
        if ((yDist > 200 || distToPlayer > 500) && this.spottedPlayer) {
            this.stunTime = 2;
            this.spottedPlayer = false
        }
        if (!this.spottedPlayer && yDist < 100 && distToPlayer < 250 && ((this.x > player.x && !this.facingRight) || (this.x < player.x && this.facingRight))) {
            this.spottedPlayer = true
            this.atDistance = false
        }
        if (this.stunTime > 0) {
            this.stunTime -= deltaTime / 1000;
        } else if (this.spottedPlayer) {
            if (distToPlayer > this.maxDist) {
                this.atDistance = false
            }
            let movement = this.speed * deltaTime / 1000;
            if (this.atDistance || distToPlayer < this.minDist) {
                this.atDistance = true;
            }
            else if (player.x > this.x) {
                this.x += movement
                this.facingRight = true;
            } else {
                this.x -= movement
                this.facingRight = false;
            }
        } else {
            let movement = this.speed * deltaTime / 2500;
            if (this.facingRight) {
                this.x += movement;
                if (this.x > this.xEnd) {
                    this.facingRight = false;
                    this.stunTime = 3;
                }
            } else {
                this.x -= movement;
                if (this.x < this.xStart) {
                    this.facingRight = true;
                    this.stunTime = 3;
                }

            }
        }
    }
    Draw() {
        push()
        noStroke()
        fill(0)
        translate(this.x, this.y)
        if (!this.facingRight) {
            scale(-1, 1)
        }
        image(this.spritesheet, - this.w * 3 / 4, - this.h / 2, this.w * 2, this.h,
            this.spritesheet.width / 2 * floor(this.walkingProgress), 0, this.spritesheet.width / 2, this.spritesheet.height)
        pop()
    }
}
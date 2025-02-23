class Enemy {

    constructor(x, floor, speed = 20) {  //same as player pos
        this.x = x;
        this.y = floor;
        this.speed = speed;
        this.spottedPlayer = true;
    }

    Update(player) {
        let distToPlayer = abs(this.x - player.x)
        let yDist = abs(this.y - player.y)
        if (yDist > 150 || distToPlayer > 500) {
            this.spottedPlayer = false
        }
        if (yDist < 150 && distToPlayer < 250) {
            this.spottedPlayer = true
        }
        if (this.spottedPlayer) {

        }
    }
    Draw() {
        push()
        noStroke()
        fill(0)
        rect(this.x, this.y, 40, 100)
        pop()
    }
}
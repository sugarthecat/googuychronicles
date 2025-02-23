class Enemy {

    constructor(x, y) {  //same as player pos
        this.x = x;
        this.y = y;
    }


     updatePosition(dx) {
        this.x+=dx;
    }


    getMovement(player) {
        
        let dx = this.x - player.x


        if(dx > -200 && dx < 0) {
            this.updatePosition(0.5)
        }
        else if(dx > 0 && dx < 200) {
            this.updatePosition(-0.5)
        }
        else {
            this.patrol()
        }        

    }

    patrol() {
        



    }
    draw() {
        
        push() 
        noStroke()
        fill(0)
        rect(this.x, this.y, 40, 100)
        pop()
    }




}
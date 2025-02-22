class Player{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.speed = 100
    }
    Update(){
        let isRight = keyIsDown(RIGHT_ARROW);
        let isLeft = keyIsDown(LEFT_ARROW);
        if(isLeft && isRight){
            isLeft = false;
            isRight = false;
        }
        if(isRight){
            this.x += deltaTime / 1000 * this.speed 
        }
        if(isLeft){
            this.x -= deltaTime / 1000 * this.speed 
        }
    }
}
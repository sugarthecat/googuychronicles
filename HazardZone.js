class HazardZone{
    constructor(x,y,radius,maxDps){
        this.x = x;
        this.y = y;
        this.r = radius;
        this.dps = maxDps
    }
    DPSAtPosition(x,y){
        let rad = dist (x,y,this.x,this.y) ;
        if(rad > this.r){
            return 0;
        }
        return (this.r-rad)/this.r * this.dps;
    }
    Draw(){
        fill (255,0,0)
        circle (this.x,this.y,this.r*2)
    }
}
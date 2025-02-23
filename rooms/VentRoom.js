class VentRoom extends GameRoom{
    constructor(x,floor){
        super(x,1,floor,2,Assets.rooms.ventpath);
        this.objects.push(new VerticalSurface(110,251,375))
        this.objects.push(new VerticalSurface(180,251,375))
        this.objects.push(new HorizontalSurface(0,110,250,false))
        this.objects.push(new HorizontalSurface(0,110,375,false))
        this.objects.push(new HorizontalSurface(180,300,250,false))
        this.objects.push(new HorizontalSurface(180,300,375,false))
        this.objects.push(new HorizontalSurface(110,190,510))

    }
}
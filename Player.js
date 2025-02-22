class Player {
    constructor(roomX, roomY) {
        this.x = 150 + roomX * 300;
        this.y = -150 - roomY * 300;
        this.size = 40;
        this.speed = 100;
        this.vertVelocity = 0;
        this.hanging = false;
        this.canJump = true;
    }
    Update(rooms) {
        let isRight = keyIsDown(RIGHT_ARROW) || keyIsDown(68);
        let isLeft = keyIsDown(LEFT_ARROW) || keyIsDown(65);
        if (this.hanging && !this.hanging.horizontal) {
            isRight = false
            isLeft = false
        }
        let newX = this.x
        if (isRight) {
            newX += deltaTime / 1000 * this.speed
        }
        if (isLeft) {
            newX -= deltaTime / 1000 * this.speed
        }
        //x-based collision
        for (let i = 0; i < rooms.length; i++) {
            let room = rooms[i];
            //if they have no overlap, keep looking within the room
            if (room.y > this.y + this.size / 2 || this.y - this.size / 2 > room.y + room.h) {
                continue;
            }

            for (let j = 0; j < room.surfaces.length; j++) {
                let surface = room.surfaces[j];
                if (surface instanceof HorizontalSurface) {
                    //if no y-overlap for the surface, skip
                    if (abs(room.y + surface.y - this.y) >= this.size / 2) {
                        continue;
                    }

                    if (this.x + this.size / 2 <= surface.x1 + room.x && newX + this.size / 2 > surface.x1 + room.x) {
                        newX = room.x + surface.x1 - this.size / 2
                    } else if (this.x - this.size / 2 >= surface.x2 + room.x && newX - this.size / 2 < surface.x2 + room.x) {
                        newX = room.x + surface.x2 + this.size / 2
                    }
                }
                if (surface instanceof VerticalSurface) {
                    if (surface.y + room.y1 < this.y - this.size / 2 || surface.y + room.y2 > this.y + this.size / 2) {
                        continue;
                    }

                    if (this.x + this.size / 2 <= surface.x + room.x && newX + this.size / 2 > surface.x + room.x) {
                        newX = room.x + surface.x - this.size / 2
                        this.hanging = { horizontal: false, y1: surface.y1 + room.y, y2: surface.y2 + room.y, x: surface.x }
                    } else if (this.x - this.size / 2 >= surface.x + room.x && newX - this.size / 2 < surface.x + room.x) {
                        newX = room.x + surface.x + this.size / 2
                        this.hanging = { horizontal: false, y1: surface.y1 + room.y, y2: surface.y2 + room.y, x: surface.x }
                    }
                }
            }
        }
        this.x = newX;


        if (this.hanging) {
            if (this.hanging.horizontal) {
                if (this.hanging.x1 > this.x + this.size / 2) {
                    this.hanging = false;
                }
                if (this.hanging.x2 < this.x - this.size / 2) {
                    this.hanging = false;
                }
            } else {

                if (this.hanging.y1 > this.y + this.size / 2) {
                    this.hanging = false;
                }
                if (this.hanging.y2 < this.y - this.size / 2) {
                    this.hanging = false;
                }
            }
        }
        //y-based collision
        let newY = this.y + this.vertVelocity * deltaTime / 1000;
        for (let i = 0; i < rooms.length; i++) {
            let room = rooms[i];
            //if they have no overlap, keep looking within the room
            if (room.x > this.x + this.size / 2 || this.x - this.size / 2 > room.x + room.w) {
                continue;
            }
            for (let j = 0; j < room.surfaces.length; j++) {
                let surface = room.surfaces[j];
                if (surface instanceof HorizontalSurface) {
                    //if no x-overlap for the surface
                    if (surface.x2 + room.x < this.x - this.size / 2 || surface.x1 + room.x > this.x + this.size / 2) {
                        continue;
                    }

                    if (this.y + this.size / 2 <= surface.y + room.y && newY + this.size / 2 > surface.y + room.y) {
                        this.y = room.y + surface.y - this.size / 2
                        newY = this.y;
                        this.vertVelocity = 0;
                        this.canJump = true;
                        this.hanging = false;
                    }
                    if (this.y - this.size / 2 > surface.y + room.y && newY - this.size / 2 <= surface.y + room.y) {
                        this.y = room.y + surface.y + this.size / 2
                        newY = this.y;
                        this.vertVelocity = 0;
                        if (surface.sticky) {
                            this.hanging = { horizontal: true, x1: surface.x1 + room.x, x2: surface.x2 + room.x, y: surface.y }
                        }
                    }

                }

                if (surface instanceof VerticalSurface) {

                    if (surface.x + room.x < this.x - this.size / 2 || surface.x + room.x > this.x + this.size / 2) {
                        continue;
                    }

                    if (this.y + this.size / 2 <= surface.y1 + room.y && newY + this.size / 2 > surface.y1 + room.y) {
                        newY = room.y + surface.y1 - this.size / 2
                    } else if (this.y - this.size / 2 >= surface.y2 + room.y && newY - this.size / 2 < surface.y2 + room.y) {
                        newY = room.y + surface.y2 + this.size / 2
                    }
                }

            }
        }
        if (!(this.hanging && this.hanging.horizontal)) {
            this.vertVelocity += deltaTime * 0.5;
            this.y = newY;
        }
        if(this.hanging && !this.hanging.horizontal){
            this.vertVelocity = min(10,this.vertVelocity)
        }
    }
    Jump() {
        if (this.hanging) {
            this.canJump = (!this.hanging.horizontal);
            this.hanging = false;
        } else if (this.canJump) {
            this.canJump = false;
            this.vertVelocity = -600;
        }
    }
    Draw() {
        rect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size)
    }
}

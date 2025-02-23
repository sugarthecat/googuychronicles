const TIME_TO_EAT_HUMAN = 2;
class Player {
    constructor(roomX, roomY) {
        this.x = 150 + roomX * 350;
        this.y = -150 - roomY * 350;
        this.size = 30;
        this.speed = 100;
        this.vertVelocity = 0;
        this.hVelocity = 0;
        this.hanging = false;
        this.canJump = true;
        this.lookingRight = false;
        this.eatingEnemyTime = -1;
        this.eatingEnemyHeight = 0;
        this.eatingEnemyWidth = 0;
        this.eatingEnemyFacingRight = false;
        this.eatingEnemySpritesheet;
        this.aniFrame = 0;
        this.health = 3;
        this.maxHealth = 3;
        this.healingRate = 0;

        this.beakerCount = 0;
    }
    Update(rooms, enemies) {
        if (this.eatingEnemyTime >= 0) {
            this.eatingEnemyTime -= deltaTime / 1000
        }
        this.UpdatePosition(rooms, enemies);
        this.UpdateHealth(rooms, enemies);
    }

    UpdateHealth(rooms, enemies) {
        //heal
        this.health += this.healingRate * deltaTime / 2000
        this.healingRate += deltaTime / 50000
        this.healingRate = min(this.healingRate, 0.25)
        this.health += this.healingRate * deltaTime / 2000
        //take damage
        for (let i = 0; i < rooms.length; i++) {  //Loops through each object in each room and set damage
            for (let j = 0; j < rooms[i].objects.length; j++) {
                let object = rooms[i].objects[j]
                if (object instanceof HazardZone) {
                    let dmg = object.DPSAtPosition(this.x - rooms[i].x, this.y - rooms[i].y) * deltaTime / 1000
                    if (dmg != 0) {
                        this.health -= dmg;
                        this.healingRate = 0;
                    }
                }
                if (object instanceof Beaker) {
                    if (dist(this.x, this.y, object.x + rooms[i].x, object.y + rooms[i].y) < 30 / 2 + this.size / 2) {
                        this.beakerCount++;
                        object.active = false;
                    }
                }
                // if (object instanceof Bullet) {
                //     let dmg = 1;
                //     // Check if the bullet is within the player's hitbox
                //     console.log(" DISTANCE "+dist(this.x, this.y, object.x, object.y))
                //     if (dmg != 0 && dist(this.x, this.y, object.x, object.y) < (this.size / 2 + 5)) {  // Adjust the '5' for bullet's size
                //         this.health -= dmg;
                //         this.healingRate = 0;
                //         console.log("Player hit by bullet! Health: " + this.health);
                //     }
                // }
                
            }
        }
        for (let i = 0; i < enemies.length; i++) {

            //Player-Enemy Collision

            if (abs(this.x - enemies[i].x) > this.size / 2 + enemies[i].w / 2) {
                //no x-overlap
                continue;
            }
            if (abs(this.y - enemies[i].y) > this.size / 2 + enemies[i].h / 2) {
                //no y-overlap
                continue;
            }
            if (enemies[i].stunTime > 0) {
                continue;
            }
            if (this.x < enemies[i].x && !enemies[i].facingRight) {
                enemies[i].ResetCooldown();
                this.health -= 1;
            }
            if (this.x > enemies[i].x && enemies[i].facingRight) {
                enemies[i].ResetCooldown();
                this.health -= 1;
            }
            this.vertVelocity = -100;
            this.hVelocity = 300;
            if (this.x < enemies[i].x) {
                this.hVelocity *= -1;
            }

            //Bullet Collsiion
            console.log("Hi");

                if (abs(this.x - enemies[i].bullet.x) > this.size / 2 + enemies[i].bullet.w / 2) {
                    //no x-overlap
                    continue;
                }
                if (abs(this.y - enemies[i].bullet.y) > this.size / 2 + enemies[i].bullet.h / 2) {
                    //no y-overlap
                    continue;
                }
                console.log("HIT");
            


        }
        this.health = constrain(this.health, 0, this.maxHealth)
    }
    UpdatePosition(rooms, enemies) {
        //handle velocity changes:
        if (abs(this.hVelocity) < deltaTime) {
            this.hVelocity = 0;
        } else if (this.hVelocity > 0) {
            this.hVelocity -= deltaTime;
        } else if (this.hVelocity < 0) {
            this.hVelocity += deltaTime;
        }
        //hang physics
        if (this.hanging) {
            if (this.hanging.horizontal) {
                //No longer hanging if off of the surface
                if (this.hanging.x1 > this.x + this.size / 2) {
                    this.hanging = false;
                }
                if (this.hanging.x2 < this.x - this.size / 2) {
                    this.hanging = false;
                }
            } else {
                //No longer hanging if off of the surface
                if (this.hanging.y1 > this.y + this.size / 2) {
                    this.hanging = false;
                }
                if (this.hanging.y2 < this.y - this.size / 2) {
                    this.hanging = false;
                }
            }
        }
        if (this.eatingEnemyTime <= 0) {
            this.UpdateXPosition(rooms);
            this.canJump = false;
            this.UpdateYPosition(rooms, enemies);
        }
    }

    UpdateYPosition(rooms, enemies) {
        //y-based collision
        let newY = this.y + this.vertVelocity * deltaTime / 1000;
        for (let i = 0; i < rooms.length; i++) {
            //only deals with surfaces / collision
            let room = rooms[i];
            //if they have no x-overlap, we don't need to check this room
            if (room.x >= this.x + this.size / 2 || this.x - this.size / 2 >= room.x + room.w) {
                continue;
            }
            for (let j = 0; j < room.objects.length; j++) {
                let surface = room.objects[j];
                if (surface instanceof HorizontalSurface) {
                    //if no x-overlap for the surface, skip
                    if (surface.x2 + room.x <= this.x - this.size / 2 || surface.x1 + room.x >= this.x + this.size / 2) {
                        continue;
                    }
                    //Collide on some Hsurface below the player
                    if (this.y + this.size / 2 <= surface.y + room.y && newY + this.size / 2 > surface.y + room.y) {
                        this.y = room.y + surface.y - this.size / 2
                        newY = this.y;
                        this.vertVelocity = 0
                        this.canJump = true;
                        this.hanging = false;
                    }
                    //Collide on some Hsurface above the player
                    if (this.y - this.size / 2 > surface.y + room.y && newY - this.size / 2 <= surface.y + room.y) {
                        this.y = room.y + surface.y + this.size / 2
                        newY = this.y;
                        this.hVelocity = 0
                        this.vertVelocity = 0
                        if (surface.sticky) {
                            this.hanging = { horizontal: true, x1: surface.x1 + room.x, x2: surface.x2 + room.x, y: surface.y }
                        }
                    }

                }

                if (surface instanceof VerticalSurface) {

                    if (surface.x + room.x <= this.x - this.size / 2 || surface.x + room.x >= this.x + this.size / 2) {
                        continue;
                    }

                    if (this.y + this.size / 2 <= surface.y1 + room.y && newY + this.size / 2 > surface.y1 + room.y) {
                        newY = room.y + surface.y1 - this.size / 2;
                        this.vertVelocity = 0
                        this.hVelocity = 0;
                    } else if (this.y - this.size / 2 >= surface.y2 + room.y && newY - this.size / 2 < surface.y2 + room.y) {
                        newY = room.y + surface.y2 + this.size / 2;
                        this.vertVelocity = 0;
                        this.hVelocity = 0;
                    }
                }

            }
        }
        for (let i = 0; i < enemies.length; i++) {
            if (abs(this.x - enemies[i].x) > this.size + enemies[i].w) {
                //no x-overlap
                continue;
            }
            //we now know there's x-overlap
            let enemy = enemies[i]
            if (this.y + this.size / 2 < enemy.y - enemy.h / 2 && newY + this.size / 2 > enemy.y - enemy.h / 2) {
                this.eatingEnemyTime = 2;
                this.eatingEnemyHeight = enemy.h;
                this.eatingEnemyWidth = enemy.w;
                this.eatingEnemyFacingRight = enemy.facingRight;
                this.eatingEnemySpritesheet = enemy.spritesheet
                this.x = enemy.x;
                this.y = enemy.y + enemy.h / 2 - this.size / 2;
                newY = this.y;
                enemy.alive = false;
            }
        }

        if (!(this.hanging && this.hanging.horizontal)) {
            this.vertVelocity += deltaTime * 0.5;
            this.y = newY;
        }
        if (this.hanging && !this.hanging.horizontal) {
            this.vertVelocity = min(10, this.vertVelocity)
        }
    }
    UpdateXPosition(rooms) {
        let isRight = keyIsDown(RIGHT_ARROW) || keyIsDown(68);
        let isLeft = keyIsDown(LEFT_ARROW) || keyIsDown(65);
        if (this.hanging && !this.hanging.horizontal) {
            isRight = false
            isLeft = false
        }
        let newX = this.x + this.hVelocity * deltaTime / 1000
        if (isRight) {
            newX += deltaTime / 1000 * this.speed
        }
        if (isLeft) {
            newX -= deltaTime / 1000 * this.speed
        }
        //look right if moving right
        if (newX > this.x) {
            this.lookingRight = true;
        } else if (newX < this.x) {
            this.lookingRight = false;
        }
        if (this.hanging && !this.hanging.horizontal) {
            newX = this.x;
        }
        //x-based collision
        for (let i = 0; i < rooms.length; i++) {
            let room = rooms[i];
            //if they have no y-overlap, we don't need to check this room
            if (room.y >= this.y + this.size / 2 || this.y - this.size / 2 >= room.y + room.h) {
                continue;
            }

            for (let j = 0; j < room.objects.length; j++) {
                let surface = room.objects[j];
                //only deals with surfaces / collision
                if (surface instanceof HorizontalSurface) {
                    //if no y-overlap for the surface+, skip
                    if (abs(room.y + surface.y - this.y) >= this.size / 2) {
                        continue;
                    }

                    if (this.x + this.size / 2 <= surface.x1 + room.x && newX + this.size / 2 > surface.x1 + room.x) {
                        newX = room.x + surface.x1 - this.size / 2
                        this.hVelocity = 0
                        this.vertVelocity = 0
                    } else if (this.x - this.size / 2 >= surface.x2 + room.x && newX - this.size / 2 < surface.x2 + room.x) {
                        newX = room.x + surface.x2 + this.size / 2
                        this.hVelocity = 0
                        this.vertVelocity = 0
                    }
                }
                if (surface instanceof VerticalSurface) {
                    if (surface.y2 + room.y <= this.y - this.size / 2 || surface.y1 + room.y >= this.y + this.size / 2) {
                        continue;
                    }
                    //Left-side hang collision
                    if (this.x + this.size / 2 <= surface.x + room.x && newX + this.size / 2 > surface.x + room.x) {
                        newX = room.x + surface.x - this.size / 2
                        this.hVelocity = 0
                        this.vertVelocity = 0
                        this.hanging = { horizontal: false, y1: surface.y1 + room.y, y2: surface.y2 + room.y, x: surface.x + room.x }
                    }
                    else if (this.x - this.size / 2 >= surface.x + room.x && newX - this.size / 2 < surface.x + room.x) {
                        //Right-side hang collision
                        newX = room.x + surface.x + this.size / 2
                        this.hVelocity = 0
                        this.vertVelocity = 0
                        this.hanging = { horizontal: false, y1: surface.y1 + room.y, y2: surface.y2 + room.y, x: surface.x + room.x }
                    }
                }
            }
        }
        this.x = newX;
    }
    Jump() {
        if (this.hanging) {
            if (!this.hanging.horizontal) {
                this.vertVelocity = -300
                //Wall jump
                if (this.hanging.x < this.x) {
                    this.hVelocity = 200
                } else {
                    this.hVelocity = -200
                }
            }
            this.hanging = false;

        } else if (this.canJump && this.eatingEnemyTime < 0) {
            this.canJump = false;
            this.vertVelocity = -400;
        }
    }
    Draw() {
        push()
        translate(this.x, this.y)
        let img = Assets.spritesheets.googuy

        if (this.eatingEnemyTime >= 0) {
            image(img, - 22,
                (TIME_TO_EAT_HUMAN - this.eatingEnemyTime) / TIME_TO_EAT_HUMAN * (this.eatingEnemyHeight) - 18 - this.eatingEnemyHeight,
                44, 44,
                0, img.height / 2 * floor(this.aniFrame), img.width, img.height / 2)
            fill(0)
            let sheet = this.eatingEnemySpritesheet

            if (!this.eatingEnemyFacingRight) {
                scale(-1, 1)
            }
            image(sheet, -this.eatingEnemyWidth * 3 / 4,
                -this.eatingEnemyTime / TIME_TO_EAT_HUMAN * this.eatingEnemyHeight + 20,
                this.eatingEnemyWidth * 2,
                (this.eatingEnemyTime) / TIME_TO_EAT_HUMAN * this.eatingEnemyHeight,
                sheet.width / 2, sheet.height - sheet.height * this.eatingEnemyTime / TIME_TO_EAT_HUMAN,
                sheet.width / 2, sheet.height * this.eatingEnemyTime / TIME_TO_EAT_HUMAN)
        } else {
            if (this.hanging && this.hanging.horizontal) {
                scale(1, -1)
            } else if (this.hanging && !this.hanging.horizontal) {
                if (this.hanging.x > this.x) {
                    scale(1, -1)
                    rotate(-PI / 2)
                } else {
                    rotate(PI / 2)
                }
            } if (!this.lookingRight) {
                scale(-1, 1)
            }

            if (this.canJump || this.hanging) {
                image(img,
                    - 22, - 20,
                    44, 44,
                    0, img.height / 2 * floor(this.aniFrame), img.width, img.height / 2)
            } else {
                if (this.vertVelocity > 0) {
                    scale(1, -1)
                }
                image(Assets.entities.midAirGooGuy,
                    - 22, - 20,
                    44, 44)
            }
        }
        pop()
        this.aniFrame += deltaTime / 1000;
        this.aniFrame = this.aniFrame % 2;
    }
}

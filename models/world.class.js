class World {
    character = new Character();
    firstLevel = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }


    setWorld() {
        this.character.world = this;
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectToMap(this.firstLevel.backgroundObjects);
        this.addObjectToMap(this.firstLevel.firstBoss);
        this.addToMap(this.character);
        this.addObjectToMap(this.firstLevel.enemies);
        this.ctx.translate(-this.camera_x, 0);
        

        //draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }


    addObjectToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        }) 
    }


    addToMap(mo) {
        if (mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.img.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if (mo.otherDirection) {
            this.ctx.restore();
            mo.x = mo.x * -1;
        }
    }
}
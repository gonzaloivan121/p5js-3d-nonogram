class Cube {
    constructor(x, y, z, size) {
        this.id = Cube.incrementId();
        this.position = new p5.Vector(x, y, z);
        this.size = size;
    }

    update() {
        /*if (this.position.y == 0 && this.position.z == 0) {
            translate(this.size, 0, 0);
        }
        if (this.position.x == 0 && this.position.z == 0) {
            translate(0, this.size, 0);
        }
        if (this.position.x == 0 && this.position.y == 0) {
            translate(0, 0, this.size);
        }*/
        translate(
            this.position.x * this.size,
            this.position.y * this.size,
            this.position.z * this.size
        );
        
        text("Hola");
        box(this.size);
    }

    static incrementId() {
        if (!this.latestId) this.latestId = 1
        else this.latestId++
        return this.latestId
    }

    clicked() {
        let mouseDist = new p5.Vector(mouseX, mouseY, 0);
        let cubeDist = new p5.Vector(this.position.x * this.size, this.position.y * this.size, this.position.z * this.size);
        if (dist(mouseDist.x, mouseDist.y, mouseDist.z, cubeDist.x, cubeDist.y, cubeDist.z) < this.size / 2) {
            this.break();
        }
    }

    break() {
        console.log(this)
        console.log("Broken!");
    }
}
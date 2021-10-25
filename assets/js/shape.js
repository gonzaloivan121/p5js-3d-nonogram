class Shape {
    constructor(w, h, d, size) {
        this.width = w;
        this.height = h;
        this.depth = d;
        this.size = size;
        this.cubes = [];
        this.xRot = 0;
        this.yRot = 0;
    }

    generate() {
        for (var x = 0; x < this.width; x++) {
            this.cubes[x] = [];
            for (var y = 0; y < this.height; y++) {
                this.cubes[x][y] = [];
                for (var z = 0; z < this.depth; z++) {
                    this.cubes[x][y].push(new Cube(x, y, z, this.size));
                }
            }
        }
    }

    update() {
        this.rotateShape();
        push();
            rotateX(this.xRot);
            rotateY(this.yRot);
            this.updateCubes();
        pop();
    }

    rotateShape() {
        if (mouseIsPressed) {
            if (mouseButton === RIGHT) {
                this.xRot = -mouseY * 0.01;
                this.yRot = -mouseX * 0.01;
            }
        }
    }

    updateCubes() {
        for (var x = 0; x < this.width; x++) {
            for (var y = 0; y < this.height; y++) {
                for (var z = 0; z < this.depth; z++) {
                    this.cubes[x][y][z].update();
                }
            }
        }
    }

    click() {
        for (var x = 0; x < this.width; x++) {
            for (var y = 0; y < this.height; y++) {
                for (var z = 0; z < this.depth; z++) {
                    this.cubes[x][y][z].clicked();
                }
            }
        }
    }

}

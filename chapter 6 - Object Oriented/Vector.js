class Vec{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    get length(){
        return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
    }

    plus(other){
        let x2 = other.x;
        let y2 = other.y;
        return new Vec(this.x + x2, this.y + other.y)

    }

    minus(other){
        let x2 = other.x;
        let y2 = other.y;
        return new Vec(this.x - x2, this.y - other.y)
    }

    print(){
        console.log(`<${this.x}, ${this.y} >`);
    }


}

const v1 = new Vec(2,3);
const v2 = new Vec(4,5)

const v3 = v1.plus(v2);
const v4 = v2.minus(v1);

v1.print();
v2.print();
v3.print();
v4.print();

console.log(new Vec(3, 4).length);
class PGroup{
    
    constructor(group){
        this.group = group;
    }

    add(x){
        if(this.has(x)){
            return this;
        }
        return new PGroup(this.group.concat([x]));
    }

    has(x){
        return this.group.includes(x);

    }

    delete(x){
        return new PGroup(this.group.filter( item => item !=x));
    }

}

PGroup.empty = new PGroup([]);
let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false


class Group{

    constructor(){
        this.group = [];
    }

    add(x){
        if(!this.group.includes(x)){
            this.group.push(x);
            return true;
        }
        return false;
    }

    has(x){
        return this.group.includes(x);

    }

    delete(x){
        if(this.group.includes(x)){
            let elementpos = this.group.indexOf(x);
            this.group.pop(elementpos);
            return true
        }
        return false;
    }

    static from(other){
        let group = new Group();
        for(let item of other){
            group.add(item);
        }
        return group;
    }

    print(){
        console.log(this.group);
    }


}

let g = new Group();
g.add(1);
g.add(2);
g.add(3);

g.delete(3);
g.print();

console.log(g.has(2))
console.log(g.has(40))

let a = [4,5,6];

let nwG = Group.from(a);
nwG.print();

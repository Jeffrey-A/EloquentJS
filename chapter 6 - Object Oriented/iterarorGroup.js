
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

    size(){
        return this.group.length;
    }

    at(i){
        if(i>=0 && i<this.size()){
            return this.group[i];
        }
        return false;
        
    }

    [Symbol.iterator](){
        return new GroupIterator(this);
    }


}

class GroupIterator{

    constructor(group){
        this.pos = 0;
        this.group = group;

    }

    next(){
        if(this.pos >= this.group.size()){
            return {done:true};
        }else{
            let item = this.group.at(this.pos);
            this.pos++;
            return {value:item, done:false };
        }
    }
}




console.log("Testing Iter");
let gr = new Group();
gr.add(10);
gr.add(11)
gr.add(12)
gr.add(15)
gr.add(20)

for(let i of gr){
    console.log(i);
}
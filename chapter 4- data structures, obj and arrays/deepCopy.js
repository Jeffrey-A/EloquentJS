function deepEqual(obj1, obj2){
    let objKeys = Object.keys(obj1);
    let obj2Keys = Object.keys(obj2);
    objKeys.sort();
    obj2Keys.sort();
    console.log(objKeys);
    console.log(obj2Keys);

    //if same number of properties
    if(objKeys.length != obj2Keys.length){
        return false;
    }

    //if same properties
    for(let i =0; i<objKeys.length; i++){
        if(objKeys[i] != objKeys[i]){
            return false;
        }
    }

    //if same properties values
    for(let i =0; i<objKeys.length; i++){
        if(obj1[objKeys[i]] !== obj2[objKeys[i]]){
            return false;
        }
    }
    return true;
}

let o1 ={name: "jeff", age: 21, status: "single"}
let o2 = {name: "jeff", age: 22, status: "single"}

console.log(o1==o2);
console.log(deepEqual(o1,o2));

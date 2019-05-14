
function arrayTolist(arr){
    let list =null;
    for(let i = arr.length-1; i>-1; i--){
       list = {value:arr[i], rest:list}
    }
    return list;
}

function listToArray(obj){
    let temp = obj;
    let arr =[];
    while(temp.rest){
        arr.push(temp.value)
        temp = temp.rest;
    }

    if(temp.value){
        arr.push(temp.value);
    }
    return arr;
}

function nth(list, n){
    let p =0;
    for(let node =list; node; node = node.rest){
        if(p == n){
            return node.value;
        }
        p++;
    }
    return undefined;
}
let obj = arrayTolist([1,2,3]);
let arr = listToArray(obj);
console.log(obj);
console.log(arr);
console.log(nth(obj,0));

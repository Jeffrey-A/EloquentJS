
function every(arr, predicate){
    for (let element of arr){
        if(!predicate(element)){
            return false;
        }
    }
    return true;
}

function every2(arr, predicate){
    return !arr.some(element => !predicate(element));
}



console.log(every2([1,-2,3,4], n=>n>0 ));
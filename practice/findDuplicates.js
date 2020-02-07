
function findDup(arr){
    
    const values = {};
    const dup = new Set();

    for(let i = 0; i< arr.length; i++){
        if(!values[arr[i]]){
            values[arr[i]] = true;
        }
        else{
          dup.add(arr[i]);
        }
    }
    return dup;
}

console.log(findDup([1,2,2]))
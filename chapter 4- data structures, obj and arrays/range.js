
function range(start, end, step=1){
    let arr = [];
    
    if(start <= end){
        for(let i=start; i<=end; i+=step){
            arr.push(i);
        }
    }else{
        for(let i=start; i>=end; i+=step){
            arr.push(i);
        }
    }
    

    return arr;
}

function sumN(arr){
    let total = 0;
    for(let numb of arr){
        total+=numb;
    }
    return total;
}

console.log(range(1,10,1));

const reverseArray = (arr)=>{
    let reverse =[];

    for(let i=arr.length-1; i>-1; i--){
        reverse.push(arr[i]);
    }
    return reverse;
}

function reverseArrayInplace(arr){
    let reverse = reverseArray(arr);
    for (let i =0; i<arr.length; i++){
        arr[i] = reverse[i];
    }
}

let a = [1,2,3,4,5,6]
console.log(a);
reverseArrayInplace(a);
console.log(a);
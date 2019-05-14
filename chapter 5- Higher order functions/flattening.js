let arr = [[1,2,3], [4,5,6], [7,8,9,10]]
let newArr =[];

arr.forEach( (item) =>{
    newArr = newArr.concat(item);
})

let anotherWay = arr.reduce((acc, item) => {
    return acc = acc.concat(item);
},[]);

console.log(newArr);
console.log(anotherWay);
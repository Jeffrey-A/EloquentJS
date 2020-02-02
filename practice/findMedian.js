function findMedian(arr1, arr2){
    const numbers = [...arr1, ...arr2];
    numbers.sort((a,b) => a-b);

    let mid = Math.floor(numbers.length/2)

    if(numbers.length % 2 != 0) return numbers[mid];

    let median = (numbers[mid] + numbers[mid-1])/2
    return median;

}

function findMedian2(arr1, arr2){
    const nums = [];
    
    let i = 0;
    let j = 0;
    
    if(arr1.length < arr2.length){
        while(i < arr1.length && j < arr1.length){
            if(arr1[i] < arr2[j]){
                nums.push(arr1[i])
                i++
            }else{
                nums.push(arr2[j]);
                j++;
            }
        }
        nums.push(arr2[arr1.length-1])

        for(let k = Math.max(i,j); k < arr2.length; k++){
            nums.push(arr2[k])
        }

    }else{
        while(i < arr2.length && j < arr2.length){
            if(arr1[i] < arr2[j]){
                nums.push(arr1[i])
                i++
            }else{
                nums.push(arr2[j]);
                j++;
            }
        }
        nums.push(arr2[arr2.length-1])

        for(let n = Math.max(i,j); n < arr1.length; n++){
            nums.push(arr1[n]);
        }
    }

    let mid = Math.floor(nums.length/2)

    if(nums.length % 2 != 0) return nums[mid];

    let median = (nums[mid] + nums[mid-1])/2
    return median;
    
}

let r = findMedian([1,3,5], [2,4,6])
let r2 = findMedian2([1,3,5], [2,4,6])
console.log(r, r2)
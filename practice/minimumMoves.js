
/**
 *Given [123, 543] and [321, 279] should return 16
 * minimum # of moves to equalize the number of arr2 to the number of arr1
 */

function minimumMoves(arr1, arr2) {
    let count = 0;

    let num1;
    let num2;

    for(let i = 0; i < arr1.length; i++){
       num1 = arr1[i]+"";
       num2 = arr2[i]+"";

       for(let j = 0; j < num1.length; j++){
          count+= Math.abs(parseInt(num1[j]) - parseInt(num2[j]));
       }
    }

    return count;

}

function countChar (s, char){
    let numChar =0;
    for(let i=0; i<s.length; i++){
        if(s[i]===char){
            numChar++;
        }
    }
    return numChar;
}

function countBs(s){
    let numBs = countChar(s,"B");
    return numBs;
}

console.log(countBs("hello B ghajsgBB"));
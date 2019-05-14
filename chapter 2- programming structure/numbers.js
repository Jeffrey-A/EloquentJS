const div5 = (n) =>{
    return  (n%5 ==0 ? true : false);  
}

const div3 = (n) =>{
   return (n % 3 == 0 ? true : false);
}

for (let i=1; i<=100; i++){
    if (div3(i) && div5(i)){
        console.log("FizzBuzz");
    }else if(!div3(i) && div5(i)){
        console.log("Buzz");
    }else if(div3(i)){
        console.log("Fizz");
    }else{
        console.log(i);
    }
}
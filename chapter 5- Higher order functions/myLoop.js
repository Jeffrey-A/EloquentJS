function myloop(value, testFunct, updateFunct, bodyFunct){
    while(testFunct(value)){
        bodyFunct(value);
        value = updateFunct(value);
    }

}

myloop(1, n => n <=10, n => n+1, console.log);
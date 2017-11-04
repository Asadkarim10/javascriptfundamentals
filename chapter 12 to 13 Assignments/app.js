 //if related different problems
    // var val = +prompt("Enter a value");
    // var val2 = +prompt("Enter 2nd value");
    // if (val > val2) {
    //     document.write(val);
    // }
    //     else if (val2 > val) {
    //     document.write(val2);
    
    // }
     
    
    // else {
    //     document.write("Both are equal :" + val + " = " + val2);
    //     }
    // 
    // var num = +prompt("Enter a num");
    // if (num === 0) {
    //     document.write("The number is zero");
    // }
    // else if (num < 0) {
    //     document.write("the number is negative") ;
    // }
    // else {
    //     document.write("the number is positive");
    // }
    // var num = prompt("Enter a value");
    // if (num === "a" || num === "A") {
    //     document.write("Vowel");
    // }
    // else if (num === "e" || num === "E" ) {
    //     document.write("Vowel");
    // }
    // else if (num === "i" || num === "I" ) {
    //     document.write("Vowel");
    // }
    // else if (num === "o" || num === "O" ) {
    //     document.write("Vowel");
    // }
    // else if (num === "u" || num === "U" ) {
    //     document.write("Vowel");
    // }
    // else {
    //     document.write("consonent");
    // }
    //
    var pWord = "Asad";
    var userInput = prompt("Enter Your Pass Word", "******");
    if (userInput === "Asad") {
        document.write("Correct !");
    }
    else {
        document.write("Incorrect");
    }
    var greeting;
    var hour = 13;
    if (hour < 18) {
        greeting = "Good day";
        document.write(greeting);
    }
    else {
        greeting = "Good Evening";
        document.write(greeting);
    }
    var time = +prompt("Enter time", "1200");
    
        if (time >= 0000 && time < 1200) {
            document.write("Good Morning");
        }
        else if (time >= 1200 && time < 1700) {
            document.write("Good after noon");
        }
        else if (time >= 1700 && time < 2100) {
            document.write("Good Evening");
        }
        else if (time >= 2100 && time < 2359) {
            document.write("Good night");
    }
    
    else {
        document.write("Enter a correct time");
    }
    var time = prompt("Enter time");
    const ASCII = time.charCodeAt(0);
        if (ASCII >= 65 && ASCII < 90) {
            document.write("Upper Case");
        }
        else if (ASCII > 97 && ASCII <= 127) {
            document.write("Lower Case");
        }
        else {
            document.write("it is a number");
        }
           // document.write("Good Morning");
        }
        else if (time >= 1200 && time < 1700) {
            document.write("Good after noon");
        }
        else if (time >= 1700 && time < 2100) {
            document.write("Good Evening");
        }
        else if (time >= 2100 && time < 2359) {
            document.write("Good night");
    }
    
    else {
        document.write("Enter a correct time");
    }
    completed
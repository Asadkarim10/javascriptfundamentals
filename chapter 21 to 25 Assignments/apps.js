//         part1


// var firstName = prompt("whats is your first name","Asad");
// var lastName = prompt("whats is your last name","Karim");
 // var fullname = firstName + lastName; 
// document.write(fullname);

//            part2

// var myMobile =prompt("What is your favourite Mobile","Sony");
// document.write("My favourite mobile is "+myMobile+"<br>")

// var mob = myMobile.length;

// document.write("length of String "+mob);


        //part3

// var name = "pakistani";

// var name1 = name.indexOf("n");

// document.write(name1);

    //part4

//   var name = "Hello World";
//   var name1 = name.lastIndexOf("l");
//   document.write(name1);   

        //part 5
// var name = "asad karim mughal";
// var name1 = name.charAt(5);
// document.write(name1);

     //part6

// var city = "Misbah ul haq is belong to Hyderabad";

// var citys = city.replace("Hyderabad","Islamabad");

// document.write(citys);     

    //part7
// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var message1 = message.replace(/ and /g," & ");

// document.write(message1);

    //part8

// var number = "472";
// var number1 = parseInt(number);
// var number2 = 472;

// document.write(number1+number2);

//part9 

// var name = prompt("inter your name", "asad");
// var name1 = name.toUpperCase(name);
// document.write(name1);

//part10 

// var cityToCheck =  prompt("your name");

//  var firstChar = cityToCheck.slice(0, 1);
//  var otherChars = cityToCheck.slice(1);
//  firstChar = firstChar.toUpperCase();
//  otherChars = otherChars.toLowerCase();
// var cappedCity = firstChar + otherChars;
//  document.write(cappedCity);

// //part 11 

// var num = 35.36 ;
// var num1=num.toString()
// var num2 =   num1.replace("." ,"")
// document.write(num2);


//part 12

// var usr = prompt("Enter your username?");
// let usrName = usr;

// for (var i = 0; i < usrName.length; i++) {
//     if (usrName.indexOf("#") != -1 || usrName.indexOf(",") != -1 || usrName.indexOf(".") != -1 || usrName.indexOf("@") != -1 || usrName.indexOf("!") != -1) {
//         alert("Enter valid username.");
//         break;
//     }else{
//         document.write("welcome to karachi");
//     }
// }


//part 13

// var str = prompt("Enter some text");
//  var numChars = str.length;
//  for (var i = 0; i < numChars; i++) {
//  if (str.slice(i, i + 2) === " % ") {
//  alert("No special character");
//  break;
//  }
// }


//part14


//   var items = ["cake","apple pie","cookie","chips","patties"];

//   var itemsGet = prompt("Enter Your item", "cake");

//   var itemsL = itemsGet.toLowerCase();

//   var items_index = items.indexOf(itemsGet);

  

//  if(items_index >-1 ){
//        document.write(itemsGet +" is available is at index "+items_index+" in our bakery");
//  }else {
//  document.write(itemsGet+" is not found in our bakery");
//  }



//part 15


// var usr = prompt("Enter your password?");

// var check = usr.charCodeAt(0);
// var chk = usr.slice(1);
// var flag = false;
// let checkString = false;
// if (usr.length < 6) {
//     alert("Password should be atleast 6 character !");
// } else if (check >= 48 && check <= 57) {
//     alert("Invalid Password!. Please write correct one.");
// } else {
//     for (var i = 0; i < usr.length; i++) {
//         const convertedValue = usr[i].charCodeAt(0);
//         if (convertedValue >= 48 && convertedValue <= 57) {
//             flag = true;
//             document.write("You have successfully logged in.");
//             break;
//         } else if((convertedValue >= 65 && convertedValue <= 90) || (convertedValue >= 97 && convertedValue <= 122)){
//             checkString = true;
//         }
//     }
// }

// if (flag == false || checkString == false) {
//     document.write("Your password should be contain letters and numbers");
// }


// part16


// var university = "university of karachi";



// for (var i = 0; i < university.length ; i++){
//     document.write(university[i]+"<br>")
// } 

// completed
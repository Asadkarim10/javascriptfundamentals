   
  //conditional Statement 
   // part 1

//var cityName = prompt("Which city you want To visit", "Karachi");
 //if(cityName === "Karachi"){  
   //  alert("Welcome To The City Of light")
 //} else if(cityName === ""){
   //  alert("kindly tell the name where you want to visit")
// }

  //  part 2

// var gender =prompt("Your Gender","male");
// if(gender === "male"){
//     alert("Welcome Sir")
// }else{
//     alert("welcome mi'am");
// }

 //  part 3

//  var color =prompt("Your Signal Color");

//  if(color === "red" ){
//      document.write("<table><th>Signal Color</th><th>Message</th><tr><td>"+color+"</td><td>Must Stop</td></tr></table>")
//  }else if (color === "yellow"){
//      document.write("<table><th>Signal Color</th><th>Message</th><tr><td>"+color+"</td><td>Ready To Move</td></tr></table>")
//  }else if(color === "green"){
//      document.write("<table><th>Signal Color</th><th>Message</th><tr><td>"+color+"</td><td>Move Now</td></tr></table>")
//  }

//  part4


// var fuel =prompt("Input remaining fuel in Car", "10 Liter");
// if (fuel <= "2"){
//     document.write("please refill the fuel in your car");
// }else{
//     document.write("You Have Enough Petrol To Reached")
// }


// part5

// var a = 4;
// if(++a === 5){
//     alert("given condition for this variable is true");
// }

// var b = 82;
// if (b++ === 83){ 
//     alert("given condition for variable b is true"); 
// }

// var c = 12; if (c++ === 13){ 
//     alert("condition 1 is true"); 
// } if (c === 13){ 
//     alert("condition 2 is true"); 
// } if (++c < 14){ 
//     alert("condition 3 is true"); 
// } if(c === 14){ 
//     alert("condition 4 is true"); }
 
//  var materialCost = 20000; 
//  var laborCost = 2000; 
//  var totalCost = materialCost + laborCost; 
//  if (totalCost === laborCost + materialCost)
//  { alert("The cost equals"); 
// }
//  if (true){ 
//  alert("True");
//    } 
// elseif(false){
// alert("False");
//  }

//  if("car" < "cat"){ 
//      alert("car is smaller than cat"); due to aski code
//      }

    part 6

var math =prompt("Enter Your Maths Score","50");
var maths = parseInt(math);
var mathP = maths*100/100;

var chemistry =prompt("Enter Your Chemistry Score","50");
var chemistrys =parseInt(chemistry);
var chemistryP = chemistrys*100/100;

var physic =prompt("Enter Your Physics Score","50");
var physics =parseInt(physic)
var physicsP = physics*100/100;

var totalOb = maths + chemistrys + physics;

var total = 100;
var totalMr = 300;
var totalP = totalOb*total/totalMr;

if( totalOb > 240 ){
    document.write(" total marks is "+300+ "<br> Marks Obtained "+totalOb+"<br> Percentage "+totalP+ " % <br> Grade A-1 <br> Remarks: Excellent Keep It up "  )
} else if(totalOb > 225) {
    document.write(" total marks is "+300+ "<br> Marks Obtained "+totalOb+"<br> Percentage "+totalP+ " % <br> Grade A<br> Remarks:  WellDone " )
}else if(totalOb > 180) {
    document.write(" total marks is "+300+ "<br> Marks Obtained "+totalOb+"<br> Percentage "+totalP+ " % <br> Grade B <br> Remarks:  Good "  )
}else if(totalOb > 150) {
    document.write(" total marks is "+300+ "<br> Marks Obtained "+totalOb+"<br> Percentage "+totalP+ " % <br> Grade C <br> Remarks:  Need ImproveMent "  )
}else if(totalOb > 150) {
    document.write(" total marks is "+300+ "<br> Marks Obtained "+totalOb+"<br> Percentage "+totalP+ " % <br> Grade D <br> Remarks: Must Work Hard "  )
}else{
document.write(" total marks is "+300+ "<br> Marks Obtained "+totalOb+"<br> Percentage "+totalP+ " % <br> Grade F Remarks: Must Work Hard "   )
}



part 7

guess game

var secretNumber = 4;
var userSecret = prompt("Enter your secret Number","1");

if(secretNumber == userSecret ){
  document.write("Bingo correct Answers")
}else if (secretNumber  +1 + userSecret  ){
alert("you are near to secret Number" )
}else{
  alert("try again")
}

part8 


var number1 =prompt("Enter Your Number","2")
var number =parseInt(number1);
var number2 = number % 3

if(number2 == 0){
document.write("this number can be divided by 3");
}else{
  document.write("this number cannot be divided by 3");
}

part9

var number1 =prompt("Enter Number","2");
var number =parseInt(number1);

if(number % 3){
  alert("");
}




part10

var temperature = prompt("Whats is a temperature In your city","23");

if(temperature > 40){
  document.write("it too hot Outside");
}else if (temperature > 30 ) {
  document.write("the weather today is normal ")
}else if (temperature > 20 ) {
  document.write( "today's Weather is Cool ")
}else if (temperature > 10 ) {
  document.write( "OMG today's Weather is Soo Cool ")
}

part 11

var num1 = prompt("Enter the first integers","5");
var operate = prompt("Enter the operator","+");
var two2 = prompt("Enter the second integers","5");

num1 = parseFloat(num1)
two2 = parseFloat(two2)
if (operate == "+") {
var calculation = num1 + two2;
alert(calculation);
}else if(operate == "-"){
    var calculation = num1 - two2;
    alert(calculation);
}else if(operate == "*"){
    var calculation = num1 * two2;
    alert(calculation);
}else if(operate == "/"){
    var calculation = num1  / two2;
    alert(calculation);
}
	
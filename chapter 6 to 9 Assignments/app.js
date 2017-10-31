// chapter 6 to 9

//     part 1

//   var a = 10;
// document.write("The value of  a ="+a+"<br>");

// var a = ++a;

// document.write("The Value of ++a is "+ a + "<br>");
// document.write("Now the value of a =  " +a + "<br>");


// document.write("The Value of a++ is "+ a + "<br>");

// a++;

// document.write("Now the value of a is "+a+"<br>");

// var a = --a;

// document.write("Now the value of --a is "+a+"<br>")

// document.write("Now the value of a = "+a +"<br>");

// document.write("Now the value of a-- is "+a+"<br>")
// a--; 
// document.write("Now the value of a = "+a);


       //part 2

//var a = 2;
//var b = 1;

//var result = --a  - --b  + ++b + b--;

// --a = 1, 
// --b = 0, 
// ++b = 1,
// b-- = 1,

//answer will be 3

//alert(result);


    //part 3
// var name =prompt("whats is your name","Asad");
// alert("welcome " +name);

    //part4 

// var table =prompt("Enter Your Number","5");
// var table1 =table;  
// for (var i = 1; i <= 10; i++ ){
//     document.write(table1 +" x " +i + " = " + table1 * i + "<br>");
// }  


    // part 5

// var math =prompt("Enter Your Maths Score","50");
// var maths = parseInt(math);
// var mathP = maths*100/100;

// var chemistry =prompt("Enter Your Chemistry Score","50");
// var chemistrys =parseInt(chemistry);
// var chemistryP = chemistrys*100/100;

// var physic =prompt("Enter Your Physics Score","50");
// var physics =parseInt(physic)
// var physicsP = physics*100/100;

// var totalOb = maths + chemistrys + physics;

// var total = 100;
// var totalMr = 300;
// var totalP = totalOb*total/totalMr;

// document.write("<table><tr><th>Subject</th><th>Total</th><th>Marks Obtained</th><th>Marks Percentage</th></tr><tr><td>Physics</td><td>"+total+"</td><td>"+physics+"</td><td>"+physics/100*100+"%</td></tr><tr><td>Chemistry</td><td>"+total+"</td><td>"+chemistry+"</td><td>"+chemistrys/100*100+"%</td></tr><tr><td>Maths</td><td>"+total+"</td><td>"+maths+"</td><td>"+maths/100*100+"%</td></tr><tr><td></td><td>300</td><td>"+totalOb+"</td><td>"+totalP+"%</td></tr><tr></table>");
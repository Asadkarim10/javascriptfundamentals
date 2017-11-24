//chapter 17 to 20
     // part 1
 // var arr = [[],[],[],[],];    
      
   
           // part 2
 // var arr = [[1,2,3],[4,5,6],[7,8,9]]

// for (var i = 0; i < arr.length; i++){
//    var asad = arr[i]
// document.write(asad+"<br/>")
//     }



part 3 
var i = 0;
for (i = 0; i <= 10; i++){
document.write("<br>"+i);
}


//part 4

//  var table = prompt("Enter a number to show its multiplication table");
//  var tab = table;
//  var length = prompt("Enter a length multiplication table");
//  var lens = length;

//  for(var i = 1; i <=lens; i++) {
   
//    document.write( tab + "x" +i+ "=" + tab * i + "<br/>");

// }



//part5 

//  var fruits = ["apple","banana","orange","mango","strawberry"];
// for (var i = 0; i < fruits.length; i++ ) {
//     document.write(fruits[i]+"<br>");
// }

// var fruits = ["apple","banana","orange","mango","strawberry"];
//   for(var i = 0; i < fruits.length; i++) {
   
//     document.write( "Element At index " +i+  " is "  +fruits[i]+ " <br>  " );

//  }


// part 6

      //  simple counting

//  var i = 0;
//  for (i = 0; i <= 10; i++){
//  document.write(i);
//  }
   
   //reverse counting

//   var i = 0;
//  for (i = 10; i > -1; i--){
//  document.write(i);
//  }

      //  even 

//  var i = 0;
//   for (i = 0; i <= 10; i++){
//       if ((i % 2) == 0)
//   document.write(i);
//   }

    //odd

 //var i = 0;
//  for (i = 10; i > -1; i--){
//  document.write(i);
//  }

 // series

 //for (i = 0; i < 11; i++ ){
   //    document.write(i+" k");
 //}

 //part 7

//  var items = ["cake","apple pie","cookie","chips","patties"];

//  var itemsGet = prompt("Enter Your item", "cake");

//  var C = items.indexOf(itemsGet);

  

// if(itemsGet === C ){
//       document.write(itemsGet +" is available is at index "+C+" in our bakery");
// }else if(itemsGet !== C ){
// document.write(itemsGet+"is not found in our bakery");
// }


//part 8

//var  number1 =[25,53,78,91,12];

//var number = Math.max.apply(null, number1);

//document.write(number);

// part 9

// var  number1 =[25,43,28,5,12];

// var number = Math.min.apply(null, number1);

// document.write(number);

// part 10

//  var a = 0;
// for (var i = 0; i <= 100; i+=5){
//       document.write([i]+",");
// }

//             part11

// var pet1 = ["0","1","2","3","4","5","6"];

// var pets = prompt("kindly select your number","1"); 
// var pets2 = pets
// var nopats =pet1.slice(0,pets2);
// document.write(nopats); 




            // part 12
// for (var i = 1; i < 21; i++){
//     if ((i % 2) === 0){  document.write( "<br>"+i +' even number');
//   } else if ((i % 2) !== 0){  document. write("<br>"+i +' odd number');
//   }
//  }



//part 14

for (var i = 7; i >= 1; i--) {
  var str = "";
  for (var j = i; j <= 7; j++) {
  str += "*";
     }
 document.write(str+"<br>");
}


 for (var i = 5; i >= 1; i--) {
     var ouput = "";
     for (var j = i; j >= 1; j--) {
         ouput += "*"
     }
document.write(ouput+"<br>");
 }
 
 

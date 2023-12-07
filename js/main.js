// [1] Write a program that allow to user enter number then printit

// var num = window.prompt("Enter Number");
// console.log(num);

// ------------------------------------------------------------------------------

// [2] Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

// var num = window.prompt("Enter Number");

// if (num % 3 === 0 && num % 4 === 0 ) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// ------------------------------------------------------------------------------

// [3] Write a program that allows the user to insert 2 integers then print the max


// var num1 = +window.prompt("Enter First Number");
// var num2 = +window.prompt("Enter Second Number");

// if(num1 > num2) {
//   console.log(`Max ${num1}`)
// } else {
//   console.log(`Max ${num2}`)
// }

// ------------------------------------------------------------------------------

// [4] Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

// var num = Number(window.prompt("Enter Number"));

// if (num >= 0) {
//   console.log("Postive")
// } else {
//   console.log("Negative");
// }

// ------------------------------------------------------------------------------

// [5] Write a program that take 3 integers from user then print the max element and the min element.

// var num1 = Number(window.prompt("Enter First Number"));
// var num2 = Number(window.prompt("Enter Second Number"));
// var num3 = Number(window.prompt("Enter Last Number"));

// if (num1 > num2 && num1 > num3 && num3 < num2) {
//   console.log(`Max Element ${num1}`);
//   console.log(`Min Element ${num3}`);
// } else if (num1 > num2 && num1 > num3 && num2 < num3) {
//   console.log(`Max Element ${num1}`);
//   console.log(`Min Element ${num2}`);
// } else if (num2 > num1 && num2 > num3 && num1 < num3) {
//   console.log(`Max Element ${num2}`);
//   console.log(`Min Element ${num1}`);
// } else if (num2 > num1 && num2 > num3 && num3 < num1) {
//   console.log(`Max Element ${num2}`);
//   console.log(`Min Element ${num3}`);
// } else if (num3 > num1 && num3 > num2 && num1 < num2) {
//   console.log(`Max Element ${num3}`);
//   console.log(`Min Element ${num1}`);
// } else if (num3 > num1 && num3 > num2 && num2 < num1) {
//   console.log(`Max Element ${num3}`);
//   console.log(`Min Element ${num2}`);
// }

// if (num1 > num2 && num1 > 3) {
//   console.log(`Max Element ${num1}`)
//   if (num2 > num3) {
//     console.log(`Min Element ${num3}`)
//   } else {
//     console.log(`Min Element ${num2}`)
//   }
// }

// if (num2 > num1 && num2 > num3) {
//   console.log(`Max Element ${num2}`)
//   if(num1 > num3) {
//     console.log(`Min Element ${num1}`)
//   } else {
//     console.log(`Min Element ${num3}`)
//   }
// }

// if (num3 > num1 && num3 > num2) {
//   console.log(`Max Element ${num3}`)
//   if(num1 > num2) {
//     console.log(`Min Element ${num2}`)
//   } else {
//     console.log(`Min Element ${num1}`)
//   }
// } 

// ------------------------------------------------------------------------------

// [6] Write a program that allows the user to insert integer number then check If a number is oven or odd

// var num = Number(window.prompt("Enter Number"));

// if (num % 2 === 0) {
//   console.log("Even")
// } else {
//   console.log("Odd")
// }

// ------------------------------------------------------------------------------ 

// [7] Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

// var char = window.prompt("Enter Character");

// if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u" || char == "A" || char == "E" || char == "I" || char == "O" || char == "U") {
//   console.log("Vowel");
// } else {
//   console.log("Consonant");
// }

// ------------------------------------------------------------------------------ 

// [8] Write a program that allows user to insert integer then print all numbers between 1 to that’s number

// var num = Number(window.prompt("Enter Number"));

// for(var i = 1 ; i <= num ; i++) {
//   console.log(i)
// }

// ------------------------------------------------------------------------------ 

//  [9] Write a program that allows userto insert integer then print a multiplication table up to 12.


// var num = Number(window.prompt("Enter Number"));

// for(var i = 1 ; i <= 12 ; i++) {
//   console.log(i * num);
// }

// ------------------------------------------------------------------------------ 

// [10] Write a program that allows to user to insert number then print all even numbers between 1 to this number

// var num = Number(window.prompt("Enter Number"));

// for(var i = 1; i <= num ; i++) {
//   if(i % 2 === 0) console.log(i)
// }

// ------------------------------------------------------------------------------ 

// [11] Write a program that take two integers then print the power

// var num1 = Number(window.prompt("Enter First Number"));
// var num2 = Number(window.prompt("Enter Second Number"));

// console.log(num1**num2);

// ------------------------------------------------------------------------------

// [12] Write a program to enter marks of five subjects and calculate total, average and percentage.


// var num1 = Number(window.prompt("Enter 1 Number"));
// var num2 = Number(window.prompt("Enter 2 Number"));
// var num3 = Number(window.prompt("Enter 3 Number"));
// var num4 = Number(window.prompt("Enter 4 Number"));
// var num5 = Number(window.prompt("Enter 5 Number"));

// function totalMarks(num1,num2,num3,num4,num5){
//   total = num1 + num2 + num3 + num4 + num5;
//   avarg = total / 5;
//   percentage = (total / 500) * 100;

//   console.log(`Total Marks = ${total}`);
//   console.log(`Average Mark = ${avarg} `);
//   console.log(`Percentage = ${percentage}`);
// }

// totalMarks(num1,num2,num3,num4,num5);

// ------------------------------------------------------------------------------

// [13] Write a program to input month number and print number of days in that month.

// var month = Number(window.prompt("Please Enter Month Between 1 and 12"))


// if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 ||month === 12 ) {
//   console.log(`Days in Month: 31`)
// } else if (month === 4 || month === 6 || month === 9 || month === 11 ) {
//   console.log(`Days in Month: 30`);
// } else if (month === 2) {
//   console.log(`Days in Month: 28`);
// } else {
//   console.log(`Please Enter The Month Between 1 And 12 Only`);
// }

// ------------------------------------------------------------------------------

//  [14] Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade


// var physics = Number(window.prompt("Enter Your Mark in physics"));
// var chemisry = Number(window.prompt("Enter Your Mark in chemisry"));
// var biology = Number(window.prompt("Enter Your Mark in biology"));
// var math = Number(window.prompt("Enter Your Mark in math"));
// var computer = Number(window.prompt("Enter Your Mark in computer"));

// function totalMarks(physics,chemisry,biology,math,computer) {
//   total = ((physics + chemisry + biology + math + computer) / 500) * 100;

//   if (total >= 90) {
//     console.log(`Grad A`);
//   } else if (total >= 80) {
//     console.log(`Grad B`);
//   } else if (total >= 70) {
//     console.log(`Grad C`);
//   } else if (total >= 60) {
//     console.log(`Grad D`);
//   } else if (total >= 40) {
//     console.log(`Grad E`);
//   } else if (total < 40) {
//     console.log(`Grad F`);
//   }
// }

// totalMarks(physics,chemisry,biology,math,computer)

// ------------------------------------------------------------------------------

// [15] Write a program to print total number of days in month 

// var month = Number(window.prompt("Please Enter Month Between 1 and 12")) 

// switch(month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log(`Days in Month: 31`)
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log(`Days in Month: 30`)
//     break;
//   case 2:
//     console.log(`Days in Month: 28`)
//     break
//     default:
//       console.log(`Please Enter The Month Between 1 And 12 Only`)
// }

// ------------------------------------------------------------------------------

// [15] Write a program to check whether an alphabet is vowel or consonant

// var char = window.prompt("Enter Character");

// switch(char) {
//   case 'a':
//   case 'A':
//   case 'e':
//   case 'E':
//   case 'i':
//   case 'I':
//   case 'o':
//   case 'O':
//   case 'u':
//   case 'U':
//     console.log("Vowel")
//     break;
//     default:
//       console.log("Consoant");
// }

// ------------------------------------------------------------------------------

// [16] Write a program to find maximum between two numbers 

// var num1 = window.prompt("Enter First Number");
// var num2 = window.prompt("Enter Second Number");

// switch(true) {
//   case num1 > num2 :
//     console.log(`Max Number Is ${num1}`)
//     break;
//   case num2 > num1 :
//     console.log(`Max Number Is ${num2}`)
//     break;
//     default:
//       console.log("Num1 = Num2")
// }


// ------------------------------------------------------------------------------

// [17] Write a program to check whether a number is even or odd

// var num = Number(window.prompt("Enter Number Here"));

// switch(true) {
//   case num % 2 === 0:
//     console.log("Even");
//     break;
//   default:
//     console.log("Odd");
// }

// ------------------------------------------------------------------------------


// [18] Write a program to check whether a number is positive or negative or zero

// var num = Number(window.prompt("Enter Number Here"));

// switch(true) {
//   case num >= 0:
//     console.log("Positive");
//     break;
//   default:
//     console.log("Negative");
// }

// ------------------------------------------------------------------------------

// [19] Write a program to create Simple Calculator

// var num1 = Number(window.prompt("Enter First Number"));
// var num2 = Number(window.prompt("Enter Second Number"));
// var oper = window.prompt("Enter Operator (+ , - , * , / , **)");

// switch (oper) {
//   case "+":
//     console.log(num1 + num2);
//     break;
//   case "-":
//     console.log(num1 - num2);
//     break;
//   case "*":
//     console.log(num1 * num2);
//     break;
//   case "/":
//     console.log(num1 / num2);
//     break;
//   case "**":
//     console.log(num1 ** num2);
//     break;
//   default:
//     console.log("Error You must Enter Operator (+ , - , * , /)");
// }
var readlinesync =require('readline-sync');
var n = readlinesync.questionInt("enter the number '1'");

if (n%3 ==0){
    console.log("div by 3");
 } else if(n % 5 == 0) 
    console.log("Div by 5")
if  (n%3 ==0 && n%5 ==0) {
    console.log("div by 3 & 5");
} else {
    console.log("Divisible by Noone")
}
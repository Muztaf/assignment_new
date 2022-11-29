var readlinesync =require('readline-sync');
console.clear()


var num = readlinesync.questionInt("enter any number");

var result = Number.isInteger(Math.sqrt(num))

console.log(result)
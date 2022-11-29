var readlineSync = require('readline-sync');

var marks = readlineSync.questionInt("marks of student:");
if (marks >=90 && marks <=100);{
    console.log("grade o");
}
if(marks >=80 && marks <=89){
    console.log("grade A");
}
else if(marks >=70 && marks <=79){
    console.log("grade B");
}
else if(marks >=60 && marks <=69){
    console.log("grade C");
}
else if(marks >=50 && marks <=59){
    console.log("grade D");
}
else if(marks >=40 && marks <=49){
    console.log("grade E");
}
else if(marks <=40){
    console.log("grade F");
}
else if (marks <= 0){
    console.log("invalid");
}
if (marks > 100){
    console.log("invalid input")
}
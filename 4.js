num1 = 17;
const num = 15;
const subtractWithoutMinus = (num1, num2) => {
   if(num2 === 0){
      return num1;
   };
   return subtractWithoutMinus(num1 ^ num2, (~num1 & num2) << 1);
}
console.log(subtractWithoutMinus(num, num1))
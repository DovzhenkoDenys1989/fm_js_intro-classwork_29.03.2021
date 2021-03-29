'use strict';

for (let counter = 0; counter < 10; counter++){
  console.log(counter);
}




function factorial(num){
  if(num < 0) return null;

  let countedFactorial = BigInt(1);

  for(let i = 2; i <= num; i++){
    countedFactorial *= BigInt(i);
  }
  return countedFactorial;
}
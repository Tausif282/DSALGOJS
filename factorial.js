// Q - Factorial of a number

// factorial  of 3 = 1*2*3=6
// factorial  of 4 = 1*2*3*4=24

const factorial = (n) => {
  let fact = 1;
  for (i = 2; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
};

console.log(factorial(3));

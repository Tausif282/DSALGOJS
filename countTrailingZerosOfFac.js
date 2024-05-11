// Q - countTrailingZeros of a factorial

// factorial  of 10 =3628800= 2
// factorial  of 20 = 2432902008176640000=4

const countTrailingZeros = (n) => {
  let fact = 1;
  for (i = 2; i <= n; i++) {
    fact = fact * i;
  }

  let res = 0;
  while (fact % 10 === 0) {
    res++;
    fact = Math.floor(fact / 10);
  }

  return res;
};

console.log(countTrailingZeros(20));

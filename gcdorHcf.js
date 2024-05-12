// 4 & 6 ===> 2
// For 4, the factors are 1, 2, and 4.
// For 6, the factors are 1, 2, 3, and 6.
// The largest common factor they share is 2, so the GCD or HCF of 4 and 6 is 2.

// 6 & 12 ===> 6
// For 6: 1, 2, 3, 6
// For 12: 1, 2, 3, 4, 6, 12
// Among them, the largest one is 6. So, the GCD or HCF of 6 and 12 is 6.

const gcd = (a, b) => {
  let res = Math.min(a, b);
  while (res !== 0) {
    if (a % res === 0 && b % res === 0) {
      return res;
    }

    res--;
  }
};

console.log(gcd(6, 12));

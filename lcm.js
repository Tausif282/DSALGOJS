// LCM (Least Common Multiple) of two numbers is the smallest number
// which can be divided by both numbers.

// 1- smallest possible LCM of a,b is max(a,b)
// 2- we begin with max(a,b) and keep incrementing until we  reach a number
// that is divisible by both a,b

// a=4 b=6 ==>12
// a=12 b=15 ==>60
// a=2 b=8 ==>8
// a=3 b=7 ==>8
// a=4 b=6 === 7,

const lcm = (a, b) => {
  let res = Math.max(a, b);
  while (true) {
    if (res % a === 0 && res % b === 0) {
      return res;
    }

    res++;
  }
};

console.log(lcm(2, 8));

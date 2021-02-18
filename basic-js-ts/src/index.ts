/**
 * 1. Fibonacci Sequence
 * @param n
 */
const fib = (n: number): number => {
  let fib = [1, 1];
  for (let i = 1; i <= n - 2; i++) {
    fib = [...fib, fib[fib.length - 1] + fib[fib.length - 2]];
  }
  return fib[n - 1];
};

// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));
// console.log(fib(5));

/**
 * 2. Array shift
 * @param arr
 * @param direction
 * @param offset
 */
const shift = (arr: any[], direction: string, offset: number): any[] => {
  if (direction === "right") {
    return [
      ...arr.slice(arr.length - (offset % arr.length)),
      ...arr.slice(0, arr.length - (offset % arr.length))
    ];
  } else if (direction === "left") {
    return [
      ...arr.slice(offset % arr.length),
      ...arr.slice(0, offset % arr.length)
    ];
  }
};

// console.log(shift([1, 2, 3, 4 ,5], 'right', 3));
// console.log(shift(['john', 'jane', 'sarah', 'alex'], 'left', 2));

/**
 * 3. Second max
 * @param arr
 */
const secondMax = (arr: number[]): number => {
  if (arr.length === 0) {
    throw new Error("The array size should be more than zero");
  }
  const newArr = arr.sort((a: number, b: number) => {
    return a - b;
  });
  console.log(newArr);
  let max = newArr[newArr.length - 1];
  for (let i = newArr.length - 1; i >= 0; i -= 1) {
    if (newArr[i] < max) {
      return newArr[i];
    }
  }
  return max;
};

// console.log(secondMax([2, 3, 4, 5]));
// console.log(secondMax([4123]));
// console.log(secondMax([9, 2, 21, 21]));
// console.log(secondMax([4, 4, 4, 4]));
// try {
//   console.log(secondMax([]));
// } catch (e) {
//   console.log(e.message);
// }

/**
 * 4. FizzBuzz
 * @param n
 */
const fizzBuzz = (n: number): string => {
  const fizz: string = n % 3 === 0 ? "Fizz" : "";
  const buzz: string = n % 5 === 0 ? "Buzz" : "";
  return fizz + buzz;
};

// console.log(fizzBuzz(21));
// console.log(fizzBuzz(25));
// console.log(fizzBuzz(45));

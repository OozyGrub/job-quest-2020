var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
/**
 * 1. Fibonacci Sequence
 * @param n
 */
var fib = function (n) {
    var fib = [1, 1];
    for (var i = 1; i <= n - 2; i++) {
        fib = __spreadArrays(fib, [fib[fib.length - 1] + fib[fib.length - 2]]);
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
var shift = function (arr, direction, offset) {
    if (direction === "right") {
        return __spreadArrays(arr.slice(arr.length - (offset % arr.length)), arr.slice(0, arr.length - (offset % arr.length)));
    }
    else if (direction === "left") {
        return __spreadArrays(arr.slice(offset % arr.length), arr.slice(0, offset % arr.length));
    }
};
// console.log(shift([1, 2, 3, 4 ,5], 'right', 3));
// console.log(shift(['john', 'jane', 'sarah', 'alex'], 'left', 2));
/**
 * 3. Second max
 * @param arr
 */
var secondMax = function (arr) {
    if (arr.length === 0) {
        throw new Error("The array size should be more than zero");
    }
    var newArr = arr.sort(function (a, b) {
        return a - b;
    });
    console.log(newArr);
    var max = newArr[newArr.length - 1];
    for (var i = newArr.length - 1; i >= 0; i -= 1) {
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
var fizzBuzz = function (n) {
    var fizz = n % 3 === 0 ? "Fizz" : "";
    var buzz = n % 5 === 0 ? "Buzz" : "";
    return fizz + buzz;
};
// console.log(fizzBuzz(21));
// console.log(fizzBuzz(25));
// console.log(fizzBuzz(45));

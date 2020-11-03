// The entry file of your WebAssembly module.

export function factorial(value: f64): f64 {
  if (value == 0 || value == 1) return 1;
  return value * factorial(value - 1);
}

export function fibonacci(num: f64): f64 {
  let result: f64 = 0;
  if (num < 2) {
    result = num;
  } else {
    result = fibonacci(num - 1) + fibonacci(num - 2);
  }
  return result;
}
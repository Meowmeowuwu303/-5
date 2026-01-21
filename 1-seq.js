'use strict';

function seq(fn) {
  return function chain(arg) {
    if (typeof arg === 'number') {
      return fn(arg);
    }
    return seq(x => fn(arg(x)));
  };
}

// Тестування
console.log(seq(x => x + 7)(x => x * 2)(5)); // Результат: 17
console.log(seq(x => x * 2)(x => x + 7)(5)); // Результат: 24
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7)); // Результат: 3

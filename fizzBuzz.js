// File: fizzBuzz.js

const fizzBuzz = (num) => {
  if ((num%3)===0) {
    return 'Fizz';
  }
  if (num===5) {
    return 'Buzz';
  }
};

module.exports = fizzBuzz;


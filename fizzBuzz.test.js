// File: fizzBuzz.test.js

const fizzBuzz = require('./fizzBuzz');

describe( 'fizzBuzz', () => {
  it( 'returns "Fizz" given input  3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });
  it( 'returns "Buzz" given input 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });
});


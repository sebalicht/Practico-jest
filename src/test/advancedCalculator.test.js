import AdvancedCalculator from '../advancedCalculator';

describe('advancedCalculator', () => {

  let calculator;
  beforeEach(() => {
    calculator = new AdvancedCalculator();
  });

  test('power method calculates the power correctly', () => {
    expect(calculator.power(2, 3)).toBe(8);
  });

  test('power method throws an error when non-numeric arguments are provided', () => {
    expect(() => calculator.power(2, '3')).toThrowError(
      'both arguments must be numbers'
    );
  });

  //////////////////////////////////////////////////////////////////////////////////////////

  test('squareRoot method calculates the square root correctly', () => {
    expect(calculator.squareRoot(9)).toBe(3);
  });

  test('squareRoot method throws an error when a non-numeric argument is provided', () => {
    expect(() => calculator.squareRoot('16')).toThrowError(
      'argument must be a number'
    );
  });
  //////////////////////////////////////////////////////////////////////////////////////////

  test('squareRoot method throws an error when a negative argument is provided', () => {
    expect(() => calculator.squareRoot(-4)).toThrowError(
      'square root of negative numbers is not allowed'
    );
  });

  //////////////////////////////////////////////////////////////////////////////////////////

  test('isEven method checks if a number is even', () => {
    expect(calculator.isEven(4)).toBe(true);
    expect(calculator.isEven(0)).toBe(true);
  });

  test('isEven method throws an error when a non-numeric argument is provided', () => {
    expect(() => calculator.isEven('4')).toThrowError(
      'argument must be a number'
    );
  });
  //////////////////////////////////////////////////
  test('isEven method checks if a number is even', () => {
    expect(calculator.isEven(1)).toBe(false);
  });


  //////////////////////////////////////////////////////////////////////////////////////////
  test('isPrime method checks if a number is prime', () => {
    expect(calculator.isPrime(1)).toBe(false);
  });

  test('isPrime method checks if a number is prime', () => {
    expect(calculator.isPrime(7)).toBe(true);
    expect(calculator.isPrime(2)).toBe(true);
  });

  test('isPrime method checks if a number is not prime', () => {
    expect(calculator.isPrime(8)).toBe(false);

  });

  test('isPrime method throws an error when a non-numeric argument is provided', () => {
    expect(() => calculator.isPrime('4')).toThrowError(
      'argument must be a number'
    );
  });




});
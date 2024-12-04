import { readFileSync } from "fs";

export const input = () => {
  try {
    return readFileSync("input3.txt", "utf8");
  } catch (e) {
    console.log("Error reading input file");
    return "";
  }
};

/**
 *
 * @param input
 * Takes the input file with the corrupted memory instructions and transforms then to a 2D array where the inner arrays contain the two numbers to multiply.
 * @returns number[][]
 */
export function transformInputToArrayOfValues(input: string) {
  //Check that string is not null, otherwise, return empty array
  if (!input) {
    console.log("The input string in transformInputToArrayValues is empty");
    return [];
  }

  //The g flag makes it return all matches rather than just the first one.
  const validInputStrings = input.match(/mul\([0-9]{1,3},[0-9]{1,3}\)/g)!;
  //Take the valid matches (the ones that have "mul(n1,n2)" where n1 and n2 are numbers with 1 to 3 digits), extract the mul and parenthesis, leaving an array of two numbers to multiply.
  const inputStringsToNumbersArray = validInputStrings?.map((s) => {
    try {
      //Take only the numbers, without the "mul" and parenthesis.
      const numbersString = s.match(/[0-9]{1,3},[0-9]{1,3}/);
      //Separate the string that contains two numbers separated by commas and cast these to Number.
      const twoValuesArray = numbersString![0].split(",").map((n) => Number(n));
      return twoValuesArray;
    } catch (e) {
      console.log("Error transforming valid input strings array");
      return [];
    }
  });

  return inputStringsToNumbersArray;
}

/**
 *
 * @param input_array
 * Takes a 2D array, the inner arrays have this form: [n1,n2]
 *
 * * Multiplies each pair of numbers inside the collection of arrays and adds them all up, returning a single number.
 * @returns number
 */
export function sumAndMultiplyNumbers(input_array: number[][]) {
  //Check that the input_array is not empty, otherwise, return 0;
  if (!input_array) {
    console.log("input_array in sumAndMultiplyNumbers is empty");
    return 0;
  }

  try {
    let sum = 0;
    //Loop through the whole array, multiply each number pair and add them all up.
    input_array.forEach((arr) => (sum += arr[0] * arr[1]));
    return sum;
  } catch (e) {
    console.log("Error while multiplying and adding numbers");
    return 0;
  }
}

// console.log(transformInputToArrayOfValues(input()));
// console.log(sumAndMultiplyNumbers(transformInputToArrayOfValues(input())));

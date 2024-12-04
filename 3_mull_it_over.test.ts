import {
  sumAndMultiplyNumbers,
  transformInputToArrayOfValues,
} from "./3_mull_it_over";

describe("Multiplication tests", () => {
  test("should return 161", () => {
    expect(
      sumAndMultiplyNumbers(
        transformInputToArrayOfValues(
          "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))"
        )
      )
    ).toBe(161);
  });

  test("should return 0", () => {
    expect(sumAndMultiplyNumbers(transformInputToArrayOfValues(""))).toBe(0);
  });
});

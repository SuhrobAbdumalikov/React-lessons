const { divide, multiple, add, differ } = require("../index");

describe("#add", () => {
  test("we are checking divide function", () => {
    expect(add(1, 4)).toBe(5);
  });
});
describe("#differ", () => {
  test("we are checking divide function", () => {
    expect(differ(1, 4)).toBe(-3);
  });
});
describe("#multiple", () => {
  test("we are checking divide function", () => {
    expect(multiple(1, 4)).toBe(4);
  });
});
describe("#divide", () => {
  test("we are checking divide function", () => {
    expect(divide(4, 2)).toBe(2);
  });
});

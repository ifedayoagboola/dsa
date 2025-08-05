const binaryGap = require("./binary-gap");

test("binary Gap", () => {
  const result1 = binaryGap(9);
  const result2 = binaryGap(529);
  const result3 = binaryGap(20);
  const result4 = binaryGap(15);
  const result5 = binaryGap(32);
  const result6 = binaryGap(1041);

  expect(result1).toBe(2);
  expect(result2).toBe(4);
  expect(result3).toBe(1);
  expect(result4).toBe(0);
  expect(result5).toBe(0);
  expect(result6).toBe(5);
});

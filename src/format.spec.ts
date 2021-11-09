import { formatMoney } from "./format";

describe("formatMoney", () => {
  it("format as expected", () => {
    const res = formatMoney(30);
    expect(res).toBe("30.00");
  });

  it("format number with many decimal places", () => {
    const res = formatMoney(46.23123123);
    expect(res).toMatchInlineSnapshot(`"46.23"`);
  });
});

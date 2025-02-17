const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
    test("convertHandler should correctly read each valid input unit", () => {
        assert.strictEqual(
            "gal",
            convertHandler.getUnit("1gal"),
            "gal is correctly read"
        );
        assert.strictEqual(
            "L",
            convertHandler.getUnit("1L"),
            "L is correctly read"
        );
        assert.strictEqual(
            "mi",
            convertHandler.getUnit("1mi"),
            "mi is correctly read"
        );
        assert.strictEqual(
            "km",
            convertHandler.getUnit("1km"),
            "km is correctly read"
        );
        assert.strictEqual(
            "lbs",
            convertHandler.getUnit("1lbs"),
            "lbs is correctly read"
        );
        assert.strictEqual(
            "kg",
            convertHandler.getUnit("1kg"),
            "kg is correctly read"
        );
        assert.strictEqual(
            "kg",
            convertHandler.getUnit("kg"),
            "kg is correctly read"
        );
    });
    test("convertHandler should correctly read a whole number input", () => {
        assert.strictEqual(
            1,
            convertHandler.getNum("1kg"),
            "1 is correctly read"
        );
    });
    test("convertHandler should correctly read a decimal number input", () => {
        assert.strictEqual(
            1.5,
            convertHandler.getNum("1.5kg"),
            "1.5 is correctly read"
        );
    });
    test("convertHandler should correctly read a fractional number input", () => {
        assert.strictEqual(
            0.2,
            convertHandler.getNum("1/5kg"),
            "1/5 is correctly read"
        );
    });
    test("convertHandler should correctly read a fractional number input with a decimal", () => {
        assert.strictEqual(
            0.3,
            convertHandler.getNum("1.5/5kg"),
            "1.5/5 is correctly read"
        );
    });
});

const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
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

    test("convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3)", () => {
        assert.throws(() => convertHandler.getNum("2/5/6mi"), "invalid number");
    });

    test("convertHandler should correctly default to a numerical input of 1 when no numerical input is provided", () => {
        assert.strictEqual(
            1,
            convertHandler.getNum("mi"),
            "default is 1 if no number is supplied"
        );
    });

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

    test("convertHandler should correctly return an error for an invalid input unit", () => {
        assert.throws(() => convertHandler.getUnit("mip"), "invalid unit");
    });

    test("convertHandler should return the correct return unit for each valid input unit", () => {
        assert.strictEqual("L", convertHandler.getReturnUnit("gal"));
        assert.strictEqual("kg", convertHandler.getReturnUnit("lbs"));
        assert.strictEqual("km", convertHandler.getReturnUnit("mi"));
        assert.strictEqual("gal", convertHandler.getReturnUnit("L"));
        assert.strictEqual("lbs", convertHandler.getReturnUnit("kg"));
        assert.strictEqual("mi", convertHandler.getReturnUnit("km"));
    });

    test("convertHandler should correctly convert the spelled out string unit for each valid input unit", () => {
        assert.strictEqual(
            "gallon",
            convertHandler.spellOutUnit("gal"),
            "gal is correctly spelled out"
        );
        assert.strictEqual(
            "pounds",
            convertHandler.spellOutUnit("lbs"),
            "lbs is correctly spelled out"
        );
        assert.strictEqual(
            "miles",
            convertHandler.spellOutUnit("mi"),
            "mi is correctly spelled out"
        );
        assert.strictEqual(
            "liters",
            convertHandler.spellOutUnit("L"),
            "L is correctly spelled out"
        );
        assert.strictEqual(
            "kilograms",
            convertHandler.spellOutUnit("kg"),
            "kg is correctly spelled out"
        );
        assert.strictEqual(
            "kilometers",
            convertHandler.spellOutUnit("km"),
            "km is correctly spelled out"
        );
    });

    test("convertHandler should correctly convert gal to L", () => {
        assert.strictEqual(convertHandler.convert(1, "gal"), 3.78541);
    });
    test("convertHandler should correctly convert lbs to kg", () => {
        assert.strictEqual(convertHandler.convert(1, "lbs"), 0.453592);
    });
    test("convertHandler should correctly convert mi to km", () => {
        assert.strictEqual(convertHandler.convert(1, "mi"), 1.60934);
    });
    test("convertHandler should correctly convert L to gal", () => {
        assert.strictEqual(convertHandler.convert(1, "L"), 0.26417217685798894);
    });
    test("convertHandler should correctly convert kg to lbs", () => {
        assert.strictEqual(convertHandler.convert(1, "kg"), 2.2046244201837775);
    });
    test("convertHandler should correctly convert mi to km", () => {
        assert.strictEqual(convertHandler.convert(1, "km"), 0.6213727366498067);
    });
});

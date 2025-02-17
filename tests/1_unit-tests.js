const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

convertHandler.getNum("1/5/6kg");

suite("Unit Tests", function () {
    test("convertHandler should correctly read a whole number input", () => {
        assert.strictEqual(
            convertHandler.getNum("1kg"),
            1,
            "1 should read as 1"
        );
    });
    test("convertHandler should correctly read a decimal number input", () => {
        assert.strictEqual(
            convertHandler.getNum("1.5kg"),
            1.5,
            "1.5 should read as 1.5"
        );
    });
    test("convertHandler should correctly read a fractional number input", () => {
        assert.strictEqual(
            convertHandler.getNum("1/5kg"),
            0.2,
            "1/5 should read as 0.2"
        );
    });
    test("convertHandler should correctly read a fractional number input with a decimal", () => {
        assert.strictEqual(
            convertHandler.getNum("1.5/5kg"),
            0.3,
            "1.5/5 should read as 0.3"
        );
    });

    test("convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3)", () => {
        assert.isNull(convertHandler.getNum("2/5/6mi"), "invalid number");
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
            convertHandler.getUnit("1gal"),
            "gal",
            "gal should be returned from getUnit(input)"
        );
        assert.strictEqual(
            convertHandler.getUnit("1L"),
            "L",
            "L should be returned from getUnit(input)"
        );
        assert.strictEqual(
            convertHandler.getUnit("1mi"),
            "mi",
            "mi should be returned from getUnit(input)"
        );
        assert.strictEqual(
            convertHandler.getUnit("1km"),
            "km",
            "km should be returned from getUnit(input)"
        );
        assert.strictEqual(
            convertHandler.getUnit("1lbs"),
            "lbs",
            "lbs should be returned from getUnit(input)"
        );
        assert.strictEqual(
            convertHandler.getUnit("1kg"),
            "kg",
            "kg should be returned from getUnit(input)"
        );
        assert.strictEqual(
            convertHandler.getUnit("kg"),
            "kg",
            "kg should be returned from getUnit(input)"
        );
    });

    test("convertHandler should correctly return an error for an invalid input unit", () => {
        assert.isNull(convertHandler.getUnit("mip"), "invalid unit");
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
            convertHandler.spellOutUnit("gal"),
            "gallon",
            "gal should be spelled out as gallon"
        );
        assert.strictEqual(
            convertHandler.spellOutUnit("lbs"),
            "pounds",
            "lbs should be spelled out as pounds"
        );
        assert.strictEqual(
            convertHandler.spellOutUnit("mi"),
            "miles",
            "mi should be spelled out as miles"
        );
        assert.strictEqual(
            convertHandler.spellOutUnit("L"),
            "liters",
            "L should be spelled out as liters"
        );
        assert.strictEqual(
            convertHandler.spellOutUnit("kg"),
            "kilograms",
            "kg should be spelled out as kilograms"
        );
        assert.strictEqual(
            convertHandler.spellOutUnit("km"),
            "kilometers",
            "km should be spelled out as kilometers"
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

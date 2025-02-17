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
    });
});

function ConvertHandler() {
    this.getNum = function (input) {
        let result;

        return result;
    };

    this.getUnit = function (input) {
        let result;

        return result;
    };

    this.getReturnUnit = function (initUnit) {
        let result;

        return result;
    };

    this.spellOutUnit = function (unit) {
        let result;
        switch (unit) {
            case "gal":
                result = "gallon";
                break;
            case "lbs":
                result = "pounds";
                break;
            case "mi":
                result = "miles";
                break;
            case "l":
                result = "liters";
                break;
            case "kg":
                result = "kilograms";
                break;
            case "km":
                result = "kilometers";
                break;
            default:
                return;
        }
        return result;
    };

    this.convert = function (initNum, initUnit) {
        const galToL = 3.78541;
        const lbsToKg = 0.453592;
        const miToKm = 1.60934;
        let result;

        return result;
    };

    this.getString = function (initNum, initUnit, returnNum, returnUnit) {
        let result;

        return result;
    };
}

module.exports = ConvertHandler;

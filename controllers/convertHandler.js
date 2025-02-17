function ConvertHandler() {
    this.NUM_REGEX =
        /^([\d]+(?:\.[\d]+|\/[\d]+)?(?:(?<!\/[\d]+)\/[\d]+)?)?[a-zA-Z]+/;
    this.UNIT_REGEX = /[\d.\/\.]*(gal|lbs|mi|L|l|kg|km)$/;

    this.getNum = function (input) {
        let result;
        if (!this.NUM_REGEX.test(input)) return null;
        let num = input.replace(this.NUM_REGEX, "$1");
        if (num.includes("/")) {
            const vals = num.split("/");
            result = vals[0] / vals[1];
        } else if (!num) {
            result = 1;
        } else {
            result = +num;
        }
        return result;
    };

    this.getUnit = function (input) {
        let result;
        if (!this.UNIT_REGEX.test(input)) return null;
        result = input.replace(this.UNIT_REGEX, "$1");
        if (result === "l") {
            result = "L";
        }
        return result;
    };

    this.getReturnUnit = function (initUnit) {
        let result;
        switch (initUnit) {
            case "gal":
                result = "L";
                break;
            case "lbs":
                result = "kg";
                break;
            case "mi":
                result = "km";
                break;
            case "L":
                result = "gal";
                break;
            case "kg":
                result = "lbs";
                break;
            case "km":
                result = "mi";
                break;
            default:
                return;
        }
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
            case "L":
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
        switch (initUnit) {
            case "gal":
                result = initNum * galToL;
                break;
            case "lbs":
                result = initNum * lbsToKg;
                break;
            case "mi":
                result = initNum * miToKm;
                break;
            case "L":
                result = initNum / galToL;
                break;
            case "kg":
                result = initNum / lbsToKg;
                break;
            case "km":
                result = initNum / miToKm;
                break;
            default:
                return;
        }
        return result;
    };

    this.getString = function (initNum, initUnit, returnNum, returnUnit) {
        let result;
        result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
        return result;
    };
}

module.exports = ConvertHandler;

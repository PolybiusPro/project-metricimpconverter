function ConvertHandler() {
    this.REGEX =
        /^([\d]+(?:\.[\d]+|\/[\d]+)?(?:(?<!\/[\d]+)\/[\d]+)?)?(gal|lbs|mi|L|l|kg|km)$/;

    this.getNum = function (input) {
        let result;
        if (!this.REGEX.test(input)) throw new Error("invalid number");
        let num = input.replace(this.REGEX, "$1");
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
        if (!this.REGEX.test(input)) throw new Error("invalid unit");
        result = input.replace(this.REGEX, "$2");
        if (result === "l") {
            result = "L";
        }
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
        const num = this.getNum(initNum);
        const unit = this.getUnit(initUnit);
        switch (unit) {
            case "gal":
                result = num * galToL;
                break;
            case "lbs":
                result = num * lbsToKg;
                break;
            case "mi":
                result = num * miToKm;
                break;
            case "L":
                result = num / galToL;
                break;
            case "kg":
                result = num / lbsToKg;
                break;
            case "km":
                result = num / miToKm;
                break;
            default:
                return;
        }
        return result;
    };

    this.getString = function (initNum, initUnit, returnNum, returnUnit) {
        let result;

        return result;
    };
}

module.exports = ConvertHandler;

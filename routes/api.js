"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
    let convertHandler = new ConvertHandler();

    app.route("/api/convert").get((req, res) => {
        const { input } = req.query;

        const initNum = convertHandler.getNum(input);
        const initUnit = convertHandler.getUnit(input);

        const returnNum = convertHandler.convert(initNum, initUnit);
        const returnUnit = convertHandler.getReturnUnit(initUnit);

        if (!initNum && !initUnit) return res.send("invalid number and unit");
        if (!initNum) return res.send("invalid number");
        if (!initUnit) return res.send("invalid unit");

        const string = convertHandler.getString(
            initNum,
            initUnit,
            returnNum,
            returnUnit
        );

        res.json({
            initNum,
            initUnit,
            returnNum,
            returnUnit,
            string,
        });
    });
};

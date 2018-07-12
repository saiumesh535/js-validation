"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validation_1 = require("./validation");
function validate(input, config) {
    if (input === undefined || typeof input !== 'object') {
        throw new Error('Input should be object, also not undefined');
    }
    if (config === undefined || typeof config !== 'object') {
        throw new Error('config should be object, also not undefined');
    }
    var missingData = validation_1.checkForMissingData(input, config);
    var errors = missingData.length === 0 && validation_1.validate(input, config);
    return !!errors ? missingData.concat(errors) : missingData;
}
exports.validate = validate;

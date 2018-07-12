"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkForMissingData(input, config) {
    var inputKeys = Object.keys(input);
    var configKeys = Object.keys(config);
    var errors = configKeys.reduce(function (cumm, data) {
        if (inputKeys.indexOf(data) === -1) {
            return cumm.concat([{ for: data, errorType: 'data missing' }]);
        }
        return cumm;
    }, []);
    return errors;
}
exports.checkForMissingData = checkForMissingData;
function validate(input, config) {
    /* get keys from input and pass key, input and config */
    var errors = Object.keys(input).reduce(function (cumm, value) {
        if (Boolean(config[value])) {
            return cumm.concat(doValidation(value, input, config));
        }
        else {
            return cumm;
        }
    }, []);
    return errors;
}
exports.validate = validate;
function doValidation(key, input, config) {
    var validation = Object.keys(config[key]).reduce(function (cumm, value) {
        var isValid = validator[value] && validator[value](input[key], config[key][value]);
        if (!isValid) {
            var errorType = value === 'type' ? config[key][value] : value;
            return cumm.concat([{ for: key, errorType: errorType, value: config[key][value] }]);
        }
        else {
            return isValid === 1 ? cumm.concat([{ for: key, message: "missing type config for " + key }]) : cumm;
        }
    }, []);
    return validation;
}
var validator = {
    min: function (input, value) { return input.length >= value; },
    max: function (input, value) { return input.length <= value; },
    type: function (input, value) {
        if (!typedValidations[value]) {
            return 1;
        }
        return typedValidations[value](input);
    },
};
/* typed validations */
var typedValidations = {
    email: function (input) { return /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i.test(input); },
    number: function (input) { return !isNaN(input); },
    boolean: function (input) { return input.toLowerCase() === ('true' || 'false') ? true : false; },
};

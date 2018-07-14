exports.checkForMissingData = function (input, config) {
  const inputKeys = Object.keys(input);
  const configKeys = Object.keys(config);
  const errors = configKeys.reduce((cumm, data) => {
    if (inputKeys.indexOf(data) === -1) {
      return [...cumm, { for: data, errorType: 'data missing' }];
    }
    return cumm;
  }, []);
  return errors;
}
exports.validate = function (input, config) {
  /* get keys from input and pass key, input and config */
  const errors = Object.keys(input).reduce((cumm, value) => {
    if (Boolean(config[value])) {
      return [...cumm, ...doValidation(value, input, config)];
    }
    else {
      return cumm;
    }
  }, []);
  return errors;
}

function doValidation(key, input, config) {
  const validation = Object.keys(config[key]).reduce((cumm, value) => {
    const isValid = validator[value] && validator[value](input[key], config[key][value]);
    if (!isValid) {
      const errorType = value === 'type' ? config[key][value] : value
      return [...cumm, { for: key, errorType, value: config[key][value] }]
    } else {
      return isValid === 1 ? [...cumm, { for: key, message: `missing type config for ${key}` }] : cumm;
    }
  }, []);
  return validation;
}

const validator = {
  min: (input, value) => input.length >= value,
  max: (input, value) => input.length <= value,
  type: (input, value) => {
    if (!typedValidations[value]) {
      return 1;
    }
    return typedValidations[value](input)
  },
};

/* typed validations */
const typedValidations = {
  email: (input) => /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i.test(input), // example validation you can write your own regex
  number: (input) => !isNaN(input),
  boolean: (input) => input.toLowerCase() === ('true' || 'false') ? true : false,
}
const validate = require('./validation');


exports.validate  = function (input, config) {
  
  if (input === undefined || typeof input !== 'object') {
    throw new Error('Input should be object, also not undefined');
  }

  if (config === undefined || typeof config !== 'object') {
    throw new Error('config should be object, also not undefined');
  }

  const missingData = validate.checkForMissingData(input, config);
  const errors = missingData.length === 0 && validate.validate(input, config);

  return !!errors ? [...missingData, ...errors] : missingData;

}
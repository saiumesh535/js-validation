# JavaScript validation made easy

You can use this package to reduce boiler plate code for your validation.

## Getting Started

### Installing

```
npm i js-validation-check
```

###Example

```js

const validation = require('js-validation-check');

const config = {
  name: {
    max: 22,
    min: 3,
  }
}

const input = {
  name: 'sai umesh'
}

console.log(validation.validate(input, config));


```

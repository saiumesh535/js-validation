# JavaScript validation made easy

You can use this package to reduce boiler plate code for your validation.

## Getting Started

### Installing

```
npm i js-validation-check
```

###Example (JavaScript)

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

###Example (TypeScript)

```ts

import { validate, IConfig } from 'js-validation-check';

const input = {
  email: 'someEmail@gmail.com',
  checkRegExp: 'ssInput' // your input should contain ss
}

const config: IConfig = {
  email: {
    min: 1,
    type: 'email'
  },
  checkRegExp: {
    min: 2,
    regExp: /ss/
  }
}

console.log(validate(input, config));

```
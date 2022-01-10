<h1 align="center">Integer</h1>
<p align="center">
Integer package provides functionality to generate a fake integer value.
</p>

<p align="center">
<a href="https://github.com/faker-javascript/integer/releases"><img alt="Version" src="https://img.shields.io/github/release/faker-javascript/integer.svg?label=version&color=green"></a> <img src="https://img.shields.io/npm/dt/@fakerjs/integer"> <a href="https://github.com/faker-javascript/integer"><img src="https://img.shields.io/badge/license-MIT-blue.svg?color=green" alt="License"></a> <img src="https://github.com/faker-javascript/integer/actions/workflows/tests.yml/badge.svg">

## Install

```
$ npm install --save @fakerjs/integer
```

## Usage

```js
import integer from '@fakerjs/integer';

integer();
//=> 1109494507128900

integer({min: 0, max: 10});
//=> 5
```

## Tests

Run tests

```
npm run test
```

## License
[The MIT License (MIT)](https://github.com/faker-javascript/integer/blob/main/LICENSE.txt)
Copyright (c) [Sergey Romanenko](https://github.com/Awilum)

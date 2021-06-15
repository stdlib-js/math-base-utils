<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Utils

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Standard library basic mathematical utilities.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-utils
```

</section>

<section class="usage">

## Usage

```javascript
var utils = require( '@stdlib/math-base-utils' );
```

#### utils

Standard library basic mathematical utilities.

```javascript
var o = utils;
// returns {...}
```

<!-- <toc pattern="*difference*" > -->

<div class="namespace-toc">

-   <span class="signature">[`absdiff( x, y )`][@stdlib/math/base/utils/absolute-difference]</span><span class="delimiter">: </span><span class="description">compute the absolute difference of two real numbers.</span>
-   <span class="signature">[`epsdiff( x, y[, scale] )`][@stdlib/math/base/utils/float64-epsilon-difference]</span><span class="delimiter">: </span><span class="description">compute the relative difference of two real numbers in units of double-precision floating-point epsilon.</span>
-   <span class="signature">[`reldiff( x, y[, scale] )`][@stdlib/math/base/utils/relative-difference]</span><span class="delimiter">: </span><span class="description">compute the relative difference of two real numbers.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var utils = require( '@stdlib/math-base-utils' );

console.log( objectKeys( utils ) );
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-utils.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-utils

[test-image]: https://github.com/stdlib-js/math-base-utils/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-utils/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-utils/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-utils?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-utils
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-utils/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-utils/main/LICENSE

<!-- <toc-links> -->

[@stdlib/math/base/utils/absolute-difference]: https://github.com/stdlib-js/math-base-utils-absolute-difference

[@stdlib/math/base/utils/float64-epsilon-difference]: https://github.com/stdlib-js/math-base-utils-float64-epsilon-difference

[@stdlib/math/base/utils/relative-difference]: https://github.com/stdlib-js/math-base-utils-relative-difference

<!-- </toc-links> -->

</section>

<!-- /.links -->

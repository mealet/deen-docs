# @math
Basic mathematical module.

## `struct Random`
```deen
// No fields
```

**Methods:**
> `fn init() Random` <br/>
> Initializes random seed and Random structure.
----
> `fn random(from: i32, to: i32) i32` <br/>
> Returns pseudo-random number in provided range.

## `struct Math`
```deen
// No fields
```

**Methods:**
> `fn PI() f64` <br/>
> PI Number Constant.
----
> `fn E() f64` <br/>
> Euler Number Constant.
----
> - `fn abs(value: i64) i64`
> - `fn fabs(value: i64) i64`
> - `fn sign(value: i64) i64`
> <br/><br/>
> - `fn min(a: i64, b: i64) i64`
> - `fn minf(a: f64, b: f64) i64`
> <br/><br/>
> - `fn maxf(a: i64, b: i64) i64`
> - `fn maxf(a: f64, b: f64) f64`
> <br/><br/>
> - `fn pow(base: i64, exponent: i64) i64`
> - `fn powf(base: f64, exponent: f64) f64`
> <br/><br/>
> - `fn sqrt(value: i64) i64`
> - `fn sqrtf(value: f64) f64`
> <br/><br/>
> - `fn cbrt(value: i64) i64`
> - `fn cbrtf(value: f64) f64`
----
> - `fn exp(value: f64) f64`
> - `fn log(value: f64) f64`
> - `fn log2(value: f64) f64`
> - `fn log10(value: f64) f64`
----
> - `fn ceil(value: f64) f64`
> - `fn floor(value: f64) f64`
> - `fn round(value: f64) f64`
----
> - `fn sin(value: f64) f64`
> - `fn cos(value: f64) f64`
> - `fn tan(value: f64) f64`
> - `fn asin(value: f64) f64`
> - `fn acos(value: f64) f64`
> - `fn atan(value: f64) f64`

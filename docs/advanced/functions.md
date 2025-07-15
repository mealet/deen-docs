# Functions

**Deen** allows you to define your own functions with different properties. <br/>
_Note that_ public functions is used for including from other modules.

## Syntax
_Definition Syntax:_
```deen
pub/NOTHING fn identifier ( param: type, ... ) type/NOTHING {
  // CODE
}
```

_Usage Syntax_
```deen
identifier ( param, ... )
```

## Examples
```deen
fn greet(name: *char) {
  return format!("Hello, {}!", name);
}

fn main() i32 {
  println!("{}", greet("mealet"));
  return 0;
}
```
```
Hello, mealet!
```

----

```deen
// lib.dn
pub fn PI() f64 {
  return 3.141592
}

// main.dn
include "lib.dn"

fn main() {
  println!("PI = {}", PI());
}
```
```
3.141592
```

# Structures And Enums
## Structures
**Structures** are the main tool for linking datasets. <br/>
_Deen_ compiler allows you to define your own structures with your own methods. <br/>

> [!TIP] Features
> - You can add _optional_ fields, just use `__` prefix in name.
> - All methods are allowed only after fields.

### Syntax
_Definition Syntax:_
```deen
pub/NOTHING struct identifier {
  field: type,
  __optional_field: type,
  ...,

  fn identifier ( param: type, ... ) type/NOTHING {
    // code
  }
}
```

_Usage Syntax:_
```deen
// initialization
identifier { .field = value, ... }

// field get
identifier.field

// method call
identifier.method( param, ... )
```

### Examples
```deen
struct Person {
  age: u32,

  fn new(age: u32) Person {
    return Person { .age = age };
  }

  fn birthday(&self) {
    self.age += 1;
    println!("Happy Birthday!");
  }
}

fn main() i32 {
  let person = Person.new(25);
  person.birthday();

  println!("Current age: {}", person.age);

  return 0;
}
```
```
Happy Birthday!
Current age: 26
```

----

```deen
struct Int {
  value: i32,
  iterator: i32,

  fn new(value: i32) Int {
    return Int { .value = value, .iterator = 0 };
  }

  // reserved functions

  fn display(&self) *char {
    return format!("{}", self.value);
  }

  fn iterate(&self) (i32, bool) {
    if self.iterator >= self.value {
      self.iterator = 0;
      return (0, false);
    }

    let value = self.iterator;
    self.iterator += 1;

    return (value, true);
  }
}

fn main() {
  let int = Int.new(5);

  println!("Iterating `{}`", int);

  for idx = int {
    println!("{}", idx);
  }
}
```
```
Iterating `5`
0
1
2
3
4
```

## Enumerations
**Enumeration** is a user-defined set of named integer constants. <br/>
In _Deen_, enums are similar to those in the C language.

### Syntax
_Definition Syntax:_
```deen
pub/NOTHING enum identifier {
  field,
  ...
}
```

_Usage Syntax:_
```deen
identifier.field
```

### Examples
```deen
enum ABC { A, B, C }

fn main() {
  println!("{}", ABC.A);
  println!("{}", ABC.B);
  println!("{}", ABC.C);
}
```
```
0
1
2
```

----

```deen
enum ABC { A, B, C }

fn main() {
  let a = ABC.A;
  let b = ABC.A;

  println!("a == b: {}" a == b);
}
```
```
a == b: true
```

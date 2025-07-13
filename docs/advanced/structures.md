# Structures
**Structures** are the main tool for linking datasets. <br/>
_Deen_ compiler allows you to define your own structures with your own methods.

## Syntax
**Definition Syntax:**
```deen
pub/NOTHING struct identifier {
  field: type,
  ...,

  fn identifier ( param: type, ... ) type/NOTHING {
    // code
  }
}
```

**Usage Syntax:**
```deen
// initialization
identifier { .field = value, ... }

// field get
identifier.field

// method call
identifier.method( param, ... )
```

## Examples
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

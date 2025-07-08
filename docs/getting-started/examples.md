# Examples

### Hello World!
```deen
fn main() i32 {
  println!("Hello, World!");
  return 0;
}
```

----

### Formatting Strings
```deen
fn greet(name: *char) {
  return format!("Hello, {}!", name);
}

fn main() i32 {
  println!("{}", greet("mealet"));
  return 0;
}
```

----

### User Input
```deen
include "@io"
include "@string"

fn main() i32 {
  print!("Please type your name: "); // don't forget to be polite

  let buffer = String.new(); // creating new string buffer
  Stdin.read_line(&buffer); // reading from stdin to it

  println!("Hello, {}!", buffer); // and prints formatted message!

  return 0;
}
```

----


### Structures
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

### C Functions
```deen
extern "C" fn malloc(usize) *void;
extern "C" fn free(*void);

fn main() i32 {
  let ptr: *i32 = malloc(sizeof!(i32)); // ATTENTION: don't forget to set pointer type!
  //        ↥                                                 |
  //        |--------------------------------------------------

  *ptr = 100;

  println!("Value is: {}", *ptr);

  free(ptr); // and of course free the pointer
  return 0;
}
```

# Constructions
## IF-ELSE
Conditional code execution. <br/>
Supported Types: `bool`

### Syntax
```deen
if CONDITION { code }
if CONDITION { code } else { code }
```

### Examples
```deen
fn main() i32 {
  if 5 < 10 {
    println!("Right!");
  }
  println!("Ended");

  return 0;
}
```
```
Right!
Ended
```

----

```deen
fn main() i32 {
  if 5 < 10 {
    println!("Right!");
  } else {
    println!("How??");
  }

  return 0;
}
```
```
Right!
```

## WHILE
Conditional loop. Can be escaped with `break` keyword in statement <br/>
Supported Types: `bool`

### Syntax
```deen
while CONDITION { code }
```

### Examples
```deen
fn main() i32 {
  let counter = 0;

  while counter < 5 {
    if counter == 4 {
      break;
    }

    println!("{}", counter);
    counter += 1;
  }

  println!("Done with {}", counter);
  return 0;
}
```
```
0
1
2
3
Done with 4
```

----

```deen
fn main() i32 {
  while true {
    println!("infinite loop");
  }

  return 0;
}
```
```
infinite loop
infinite loop
infinite loop
infinite loop
infinite loop
...
```

## FOR
Iterator loop. <br/>
Supported Types: `integer types / array / structs` (refer to the "Structures" section and "Reserved Structure Functions" for more details).

### Syntax
```deen
for IDENTIFIER = ITERATOR { code }
```

### Examples
```
fn main() i32 {
  for counter = 5 {
    println!("{}", counter);
  }

  return 0;
}
```
```
0
1
2
3
4
```
----
```
fn main() i32 {
  for element = [150, 123, 415] {
    println!("{}", element);
  }

  return 0;
}
```
```
150
123
415
```

## EXTERN
Declaration of externed C functions. <br/>

### Syntax
```deen
extern "EXTERN TYPE" pub/NOTHING fn IDENTIFIER ( TYPE, TYPE, ... ) TYPE/NOTHING
```

### Examples
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
```
Value is: 100
```

## EXTERN DECLARE
Tool for declaring global extern constants. <br/>

### Syntax
```deen
_extern_declare IDENTIFIER EXPRESSION
```

### Examples
```deen
_extern_declare stdio **i8
```

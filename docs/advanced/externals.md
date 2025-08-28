# Externals
## External Functions
In **Deen** you can use external linked C functions. You can declare functions from the standard C library, or from a linked C file.

> [!WARNING]
> Due to C compiler optimizations, operating on function-returned structures might cause several problems.
> Instead of returning a structure type in the C file, it's better to take a pointer to the struct and modify it.

### Syntax
```deen
extern "C" pub/NOTHING fn identifier ( type, ... ) type;
```

### Examples
```deen
// lib.c
typedef struct {
  int a;
  int b;
} vec2;

void init_vec2(vec2 *ptr, int a, int b) {
  ptr->a = a;
  ptr->b = b;
}

// main.dn
struct Vec2 {
  a: i32,
  b: i32
}

extern "C" fn init_vec2(*Vec2, i32, i32);

fn main() {
  let vector = Vec2 { .a = 0, .b = 0 };

  init_vec2(&vector, 10, 12);

  println!("Initialized vector: [{}, {}]", vector.a, vector.b);
}
```

```
$> deen main.dn output -i lib.c
$> ./output

Initialized vector: [10, 12]
```

----

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

## External Declarations
**External Declarations** is the toolchain that is mainly used in standard library. <br/>
It allows you to get access to C external globals.

### Syntax
```deen
_extern_declare identifier expression
```

### Examples
```deen
_extern_declare stdout **i8
_extern_declare stderr **i8
_extern_declare stdin **i8
```

## External Linkages
**External Linkages** is a single statement to automatically link main code with provided C (or other languages supported by `gcc`/`clang`/`msvc`) library. <br/>
Linking file doesn't mean you automatically gets declarations, you also have to declare them by `extern` statement (see above).

### Syntax
```deen
_link_c "PATH";
```

### Examples
```c
// lib.c
int add(int a, int b) {
  return a + b;
}
```
```deen
// main.dn
_link_c "lib.c";
extern "C" fn add(i32, i32) i32;

fn main() i32 {
  println!("{}", add(10, 15));

  return 0;
}
```

```
25
```
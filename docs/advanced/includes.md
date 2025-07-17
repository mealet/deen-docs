# Includes
**Includes** are the main toolchain to split up the codebase and its logic into different modules.  <br/>
_Deen_ provides includes as a statement which merges library files into main.

> [!INFO] NOTE THAT
> Compiler includes only **public** components. <br/>
> To make functions/structures/enumerations public use the `pub` keyword:
> ```deen
> pub fn foo() {};
> pub struct foo {};
> pub enum foo {};
> ```

## Syntax
```deen
include "lib.dn"; // include lib near main file
include "@string"; // include standard library module
```

## Examples
```deen
include "@io"
include "@string"

fn main() {
  let buffer = String.new();
  
  Stdin.read_line(&buffer);

  println!("You entered: `{}`", buffer);
}
```
```
hello
You entered `hello`
```

----

```deen
include "lib.dn";

fn main() {
  println!("Multiply(10, 2) returns: {}", multiply(10, 2));
}
```

```
Multiply(10, 2) returns: 20
```

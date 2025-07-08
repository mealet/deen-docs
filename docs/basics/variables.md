# Variables
**Variables** in Deen are similar to those in languages like C, Rust, or even Gleam.

### Syntax
**Annotation:**
```deen
let identifier: type;
let identifier: type = value;
let identifier = value;
```

**Assignation:**
```deen
identifier = value; // default assignation
identifier BINOP= value; // binary assignation
identifier[index] = value; // slice assignation
identifier.field = value; // field assignation
*identifier = value; // dereference assignation
```

**Expressions Usage:**
```deen
identifier // default load
identifier[index] // slice load
identifier.field // field load
&identifier // reference load
*identifier // dereference load
```

### Explanation
A variable is a pointer to temporary, stack-allocated data. It provides the means to load, change, or remove this data.
When a variable goes out of scope, the backend automatically deallocates the data.

A pointer is also a stack-allocated value. Essentially, it is an usize integer value that contains the address of the pointed-to value.

> [!IMPORTANT] NOTE THAT
> The compiler will not allow you to create an uninitialized variable without an explicit type definition. <br/>
> Code like `let var;` will throw semantical analyzer exception.

----

```
IMAGINE THIS IS STACK
| ... | 100 | ... | ... | 0x0000001 |
         |--------------------|---------> let var = 100;
                              |---------> let var_ptr = &var;
```

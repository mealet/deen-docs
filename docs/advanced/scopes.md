# Scopes
**Scopes** in Deen are the main separators between code, variables, and data.
Every scope has its *own* set of variables, types, and full access to parent scope data.
When a scope ends, the compiler automatically cleans up data and variables.

In **Deen**, scopes can be defined with curly brackets.


## Example
```deen
// GLOBAL SCOPE

fn main() {
  // MAIN FN SCOPE
  let a = 10;

  {
    // TEMP SCOPE
    a = 5;
  }

  if a == 5 {
  // IF STATEMENT SCOPE
    println!("{}", a);
  }
}
```

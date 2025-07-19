# Operations
## Binary Operations
Arithmetic operations are fundamental mathematical operations available in any programming language. <br/>
Supported Types: `integer types / float types / and structs` <br/>
(for structures see [Structures Implementations](/advanced/structures-implementations))

Table of Supported Binary Operations:
| Operator | Name | Description | Limitations |
|----------|------|-------------|-------------|
| `+` | Add | Adds to constants together | Type Size Limits |
| `-` | Minus | Subtracts one number from another | Type Size Limits |
| `*` | Multiply | Multiplies two numbers | Type Size Limits |
| `/` | Divide | Divides one number by another | Type Size Limits, Division By Zero |
| `%` | Modulus | Returns the remainder of the division | Type Size Limits, Division By Zero |

**Example:**
```deen
fn main() i32 {
  println!("{}", 15 + 7);
  println!("{}", 15 - 7);
  println!("{}", 15 * 7);
  println!("{}", 15 / 7);
  println!("{}", 15 % 7);

  return 0;
}
```
```
22
8
105
2
1
```

## Unary Operations
Unary operations involve a single operand. <br/>
Supported Types: `integer types / float types / structs` <br/>
(for structures see [Structures Implementations](/advanced/structures-implementations))

Table of Supported Unary Operations:
| Operator | Name | Description | Limitations |
|----------|------|-------------|-------------|
| `-` | Negative | Negates provided expression | Type Size Limits |
| `!` | Not | Applies logical NOT to provided expression | Type Size Limits |

```deen
fn main() i32 {
  println!("{}", -15);
  println!("{}", !15);

  return 0;
}
```
```
-15
-16
```

## Boolean Operations
Comparison and logical operations return a boolean output. <br/>
Supported Types: `integer types / float types / char / *char / structs` <br/>
(for structures see [Structures Implementations](/advanced/structures-implementations))


Table of Supported Boolean Operations:
| Operator | Name | Description |
|----------|------|-------------|
| `>` | Bigger Than | Returns `true` if _LHS_ is bigger than _RHS_ | 
| `<` | Less Than | Returns `true` if _LHS_ is less than _RHS_ |
| `==` | Equals | Returns `true` if _LHS_ equals _RHS_ |
| `=>`, `>=` | Equals Or Bigger | Returns `true` if _LHS_ equals or bigger than _RHS_ |
| `<=`, `=<` | Equals Or Less | Returns `true` if _LHS_ equals or less than _RHS_ |
| `!=` | Not Equals | Returns `true` if _LHS_ not equals _RHS_ |
| `&&` | And | Returns `true` if _LHS_ and _RHS_ is `true` |
| `\|\|` | Or | Returns `true` if _LHS_ or _RHS_ is `true` |

```deen
fn main() i32 {
  println!("{}" 10 > 5);
  println!("{}" 10 < 5);
  println!("{}" 10 == 5);
  println!("{}" 10 => 5);
  println!("{}" 10 <= 5);
  println!("{}" 10 != 5);
  println!("{}" 10 == 0 && 5 == 0);
  println!("{}" 10 == 0 || 5 == 0);

  return 0;
}
```
```
true
false
false
true
false
true
false
false
```

## Bitwise Operations
Bitwise operations manipulate the individual bits of numbers. <br/>
Supported Types: `integer types`

Table Of Supported Bitwise Operations:
| Operator | Name | Description |
|----------|------|-------------|
| `&` | And | Copies bit to the result if it exists in both operands |
| `\|` | Or | Copies bit to the result if it exists in either operand |
| `^` | Xor | Copies the bit if it set in one operand but not both |
| `<<` | Left Shift | Shifts bits to left by provided index |
| `>>` | Right Shift | Shifts bits to right by provided index |

```deen
fn main() i32 {
  println!("{}", 100 & 25);
  println!("{}", 10 & 100);
  println!("{}", 20 ^ 10);
  println!("{}", 1 << 2);
  println!("{}", 10 >> 2);

  return 0;
}
```
```
0
0
30
4
2
```

# Constants
## Integer Constants
Numbers are a fundamental element of every programming language. They can be used for calculations using binary operations,
and can provide you with a tool to compare anything with boolean (0 for false, 1 for true) representation. <br/>
All concepts, such as bytes, strings, objects, etc., are ultimately just numbers. <br/>

The **Deen** compiler allows you to create number constants. <br/>
Currently supported ways to write numbers are: decimal, hexadecimal, and binary.
```deen
// 3 ways to write "1000"

1000 // -- decimal
1_000 // -- decimal with separation
0b111110100 // -- binary
0x3E8 // -- hexadecimal
```

You can do any math operations with the provided constants:
```deen
0b1101 + 0xF * 2;
```

## Float Constants
Float constants are a highly useful element for mathematical calculations in programming. They allow you to maintain maximum accuracy in calculations. <br/>
To define a float constant, simply use decimal notation with a dot:
```deen
1.00 // default number
51.32 // bigger number
3.1415926535897932384626 // PI number
```

## Boolean Constants
Boolean constants are just 1-bit numbers which represents comparison result (0 - false, 1 - true) <br/>
To define boolean constant use compiler keywords:
```deen
true, false
```

## Char Constants
A **char** is essentially an unsigned 8-bit integer that contains an ASCII symbol. 
To define a character constant, simply use single quotes:
```deen
'a', 'b', 'c'
```

## Strings Constants
**Strings** in the Deen compiler are similar to those in the C programming language.  <br/>
The core mechanics are as follows: every symbol is a `char`, and a string is simply a pointer to a `char` array. <br/>

To define a string constant, just use double quotes:
```deen
"Something here"
"Hello World!"
"Do you reading this?"
```

## Array Constants
**Array** is a basic collection of ordered data in memory. <br/>
To define array constant use brackets:
```deen
[1, 2, 3, 15, 144]
```

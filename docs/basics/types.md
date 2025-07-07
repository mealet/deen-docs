# Types
Types in Deen are the main mechanism of memory management. <br/>
They allow the user to define specific data with a strict size. <br/>

**Table of Deen Types:**
| Type | Description | Size (in bytes) | Designation |
|------|-------------|-----------------|-------------|
| i8 | Signed 8-bit integer type | 1 | `i8` |
| i16 | Signed 16-bit integer type | 2 | `i16` |
| i32 | Signed 32-bit integer type | 4 | `i32` |
| i64 | Signed 64-bit integer type | 8 | `i64` |
| u8 | Unsigned 8-bit integer type | 1 | `u8` |
| u16 | Unsigned 16-bit integer type | 2 | `u16` |
| u32 | Unsigned 32-bit integer type | 4 | `u32` |
| u64 | Unsigned 64-bit integer type | 8 | `u64` |
| usize | Unsigned integer type for size definitions (typically equivalent to u64) | 8 | `usize` |
| char | 8-bit unsigned integer type for character representation | 1 | `char` |
| *char | String type. Internally, this is just a pointer to a sequence of characters | - | `*char` |
| bool | 1-bit integer boolean flag (0 - false, 1 - true) | 1 | `bool` |
| void | Void type, representing the absence of a value | 0 | `void` |
| array | Basic array type | - | `[TYPE; SIZE]` |
| pointer | Pointer type for holding a reference to data | - | `*TYPE` |
| struct | Basic structure type | - | `ALIAS` |
| enum | Basic enumeration type | - | `ALIAS` |

# @bytes
Dynamic bytes buffer module. <br/>
Module Includes: `@string`

## `struct Bytes`
```deen
ptr: *u8,
size: usize,
len: usize,
iterator_ptr: usize
```

**Methods:**
> `fn new() Bytes` <br/>
> Creates new empty bytes buffer.
----
> `fn with_size(size: usize) Bytes` <br/>
> Creates new empty bytes buffer with provided size.
----
> `fn len(&self) usize` <br/>
> Returns bytes buffer length.
----
> `fn push(&self, value: u8)` <br/>
> Pushes byte to buffer.
----
> `fn pop(&self) u8` <br/>
> Removes latest byte from buffer and returns it.
----
> `fn peek(&self, position: usize) u8` <br/>
> Returns byte from buffer on provided position. `0` if buffer is empty, panic on position overflow.
----
> `fn set(&self, position: usize, value: u8)` <br/>
> Replaces byte on provided position with value. Nothing if buffer is empty, panic on position overflow.
----
> `fn raw(&self) *u8` <br/>
> Returns raw pointer to buffer.

**Compiler Implementations:**
- `fn display(&self) *char`
- `fn drop(&self)`
- `fn iterate(&self) (char, bool)`
- `fn slice(&self, index: usize) char`
- `fn slice_assign(&self, index: usize, value: char)`

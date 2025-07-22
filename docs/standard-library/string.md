# @string
Dynamic heap allocated string.

## `struct String`
```deen
ptr: *char,
line: usize,
len: usize
iterator_ptr: usize,
```

**Methods:**
> `fn new() String` <br/>
> Creates new empty string instance.
----
> `fn from(value: *char) String` <br/>
> Creates new string from CStr value (char pointer).
----
> `fn with_capacity(capacity: usize) String` <br/>
> Creates new empty string with provided capacity.
----
> `fn clone(&self) String` <br/>
> Clones string instance (allocates new heap string and copies value).
----
> `fn len(&self) usize` <br/>
> Returns string length
----
> `fn push(&self, value: char)` <br/>
> Appends provided character to the end of string.
----
> `fn push_str(&self, value: *char)` <br/>
> Appends CStr value to the end of string.
----
> `fn pop(&self) char` <br/>
> Removes last character and returns it. If empty returns '\0'
----
> `fn peek(&self, position: usize) char` <br/>
> Returns character on provided position. Panic if out of bounds.
----
> `fn set(&self, position: usize, value: char)` <br/>
> Replaces character on _position_ with provided value. Panic if out of bounds.
----
> `fn contains(&self, value: char) bool` <br/>
> Returns `true` if string instance contains provided char.
----
> `fn contains_str(&self, value: *char) bool` <br/>
> Returns `true` if string instance contains provided CStr value.
----
> `fn raw(&self) *char` <br/>
> Returns raw heap pointer.

**Compiler Implementations:**
- `fn display(&self) *char`
- `fn drop(&self)`
- `fn iterate(&self) (char, bool)`
- `fn compare(&self, other: *String) i32`
- `fn slice(&self, index: usize) char`
- `fn slice_assign(&self, index: usize, value: char)`
- `fn deref(&self) *char`

For more information see [Structures Implementations](/advanced/structures-implementations)

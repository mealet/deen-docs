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
> `fn from_raw_parts(ptr: *void, len: usize, capacity: usize) String` <br/>
> Creates new string from provided pointer, length and capacity.
----
> `fn with_capacity(capacity: usize) String` <br/>
> Creates new empty string with provided capacity.
----
> `fn clone(&self) String` <br/>
> Clones string instance (allocates new heap string and copies value).
----
> `fn clone_reversed(&self) String` <br/>
> Clones string instance with reversed content.
----
> `fn len(&self) usize` <br/>
> Returns string's length.
----
> `fn capacity(&self) usize` <br/>
> Returns string's capacity.
----
> `fn push(&self, value: char)` <br/>
> Appends provided character to the end of string.
----
> `fn push_str(&self, value: *char)` <br/>
> Appends CStr value to the end of string.
----
> `fn push_string(&self, other: String)` <br/>
> Appends other `String` content to the end of current.
----
> `fn pop(&self) char` <br/>
> Removes last character and returns it. If empty returns '\0'
----
> `fn remove(&self, position: usize)` <br/>
> Removes character on specified position (capacity doesn't change).
----
> `truncate(&self, new_len: usize)` <br/>
> Truncates string's length (capacity doesn't change)
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
> `fn replace(&self, from: *char, to: *char)` <br/>
> Replaces string occurences with provided CStr value.
----
> `find(&self, pattern: char) usize` <br/>
> Finds provided character in string and returns its index.
----
> `find_str(&self, pattern: *char) usize` <br/>
> Finds provided CStr occurence and returns index of its first character.
----
> `to_uppercase(&self) String` <br/>
> Returns clone of string instance in uppercase format.
----
> `to_lowercase(&self) String` <br/>
> Returns clone of string instance in lowercase format.
----
> `to_bytes(&self) Bytes` (from `stdlib.bytes`) <br/>
> Returns string instance represented in `Bytes` structure.
----
> `clear(&self)` <br/>
> Clears string (capacity doesn't change).
----
> `reverse(&self)` <br/>
> Reverses string content.
----
> `is_empty(&self)` <br/>
> Returns if string content is empty.
----
> `fn as_ptr(&self) *char` <br/>
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

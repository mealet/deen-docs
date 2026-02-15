# @fs

File System interaction module. <br/>
Module Includes: `@string`, `@bytes`

## `enum FSError`

```deen
  None,
  WriteableModeException,
  ReadableModeException,
  StdlibException,
  NullFileBuffer
```

## `enum FileMode`

```deen
  Read,
  ReadBinary,

  Write,
  WriteBinary,

  Append,
  AppendBinary,

  ReadWrite,
  ReadAppend
```

## `struct ModeHandler`

```deen
// PRIVATE STRUCTURE
// No fields
```

**Methods:**

> `fn specify(mode: FileMode) *char` <br/>
> Specifies filemode to C format

## `struct ModeHandler`

```deen
// No fields
```

**Methods:**

> `fn specify(err: FSError) *char` <br/>
> Specifies filesystem error to human readable.

## `struct File`

```deen
path: String,
mode: FileMode,
is_open: bool,
error_state: FSError,
size: usize,
ptr: *void
```

**Methods:**

> `fn open(filename: *char, mode: FileMode) File` <br/>
> Opens provided file. Opened and error status are in _`is_open`_ and _`error_state`_ fields.

---

> `fn close(&self) FSError` <br/>
> Closes file buffer and returns status.

---

> `fn opened(&self) bool` <br/>
> Returns if file is opened.

---

> `fn size(&self) usize` <br/>
> Returns opened file size.

---

> `fn get_error(&self) FSError` <br/>
> Returns current error state.

---

> `fn specify_error(&self) *char` <br/>
> Specifies current error state to human readable.

---

> `fn rewind(&self)` <br/>
> Rewinds file buffer if it open.

---

> `fn get_char(&self) char` <br/>
> Reads character from file buffer. If it's closed or EOF returns `'\0'`

---

> `fn read(&self) Bytes` <br/>
> Reads whole file to _`Bytes`_ structure.

---

> `fn read_string(&self) String` <br/>
> Reads whole file to _`String`_ structure.

---

> `fn write(&self, bytes: *Bytes) FSError` <br/>
> Writes bytes buffer to file and returns error state.

---

> `fn write_string(&self, value: *String) FSError` <br/>
> Write dynamic string buffer to file and returns error state.

---

> `fn write_str(&self, value: *char) FSError` <br/>
> Writes CStr value to file and returns error state.

**Compiler Implementations:**

- `fn drop(&self)`

For more information see [Structures Implementations](/advanced/structures-implementations)

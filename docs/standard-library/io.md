# @io

Standard input/output module. <br/>
Module Includes: `@string`, `@bytes`

## `struct Stdin`

```deen
// No fields
```

**Methods:**

> `fn read_line(buffer: *String)` <br/>
> Reads line from _stdin_ to dynamic string buffer.

---

> `fn getchar() char` <br/>
> Reads character from _stdin_ and returns it.

## `struct Stdout`

```deen
// No fields
```

**Methods:**

> `fn print(input: *char)` <br/>
> Prints raw string to _stdout_

---

> `fn println(input: *char)` <br/>
> Prints raw string with new line to _stdout_

---

> `fn flush()` <br/>
> Flushes _stdout buffer_

## `struct Stderr`

```deen
// No fields
```

> `fn print(input: *char)` <br/>
> Prints raw string to _stderr_

---

> `fn println(input: *char)` <br/>
> Prints raw string with new line to _stderr_

---

> `fn flush()` <br/>
> Flushes _stderr buffer_

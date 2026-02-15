# @vec

Dynamic heap allocated array module.

## `struct RawVec`

```deen
ptr: *void,
len: usize,
element_size: usize,
capacity: usize,
__iterator_ptr: usize,
```

**Methods:**

> `fn new(element_size: usize) RawVec` <br/>
> Creates new empty dynamic vector instance. <br/>
> _PANIC: Heap allocation returned NULL pointer_

---

> `fn from_raw_parts(ptr: *void, len: usize, element_size: usize, capacity: usize) RawVec` <br/>
> Creates new dynamic vector instance from provided raw parts.

---

> `clone(&self) RawVec` <br/>
> Clones dynamic vector with data inside. <br/>
> _PANIC: Heap allocation returned NULL pointer_

---

> `fn len(&self) usize` <br/>
> Returns dynamic vector length.

---

> `fn is_empty(&self) bool` <br/>
> Returns _true_ if vector is empty.

---

> `fn capacity(&self) usize` <br/>
> Returns dynamic vector's capacity (capacity is _element size \* allocated slots_).

---

> `fn element_size(&self) usize` <br/>
> Returns element size in bytes.

---

> `push(&self, element_ptr: *void)` <br/>
> Pushes new element from provided pointer (takes `element_size` bytes). <br/>
> _PANIC:_
>
> - _Attempt to push dropped vector_
> - _Attempt to push NULL value to vector_
> - _Heap reallocation returned NULL pointer_

---

> `fn set(&self, index: usize, value_ptr: *void)` <br/>
> Replaces element by provided index with element from value pointer. <br/>
> _PANIC:_
>
> - _Attempt to edit dropped vector_
> - _Index is out of len range_

---

> `fn pop(&self) *void` <br/>
> Deletes last element from vector and returns pointer to it. If vector is empty returns NULL pointer. <br/>
> _PANIC:_
>
> - _Attempt to pop dropped vector_

---

> `fn get(&self, index: usize) *void` <br/>
> Returns pointer to element by provided index. <br/>
> _PANIC:_
>
> - _Attempt to get dropped vector_
> - _Index is out of len range_

---

> `fn remove(&self, index: usize)` <br/>
> Removes element from vector by provided index.
> _PANIC:_
>
> - _Attempt to edit dropped vector_
> - _Index is out of len range_

---

> `fn clear(&self)` <br/>
> Clears dynamic vector (without reallocation).

---

> `fn as_ptr(&self) *void` <br/>
> Returns pointer to the first vector element.

---

**Compiler Implementations:**

- `fn drop(&self)`
- `fn iterate(&self) (*void, bool)`
- `fn slice(&self, index: usize) *void`
- `fn slice_assign(&self, index: usize, value: *void)`

For more information see [Structures Implementations](/advanced/structures-implementations)

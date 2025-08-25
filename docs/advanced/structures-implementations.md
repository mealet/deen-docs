# Structures Implementations
To provide an opportunity to interact with the compiler **Deen** reserved list of special functions signatures. It allows user to implement basic operators and automatization for structures.

## Reserved Functions
> [!NOTE]
> **Type notations in the functions below**
> - `&self` - Pointer of the structure to itself
> - `Self` - Denotes the same type as the structure itself
> - `_` - Any type

<br/>

- **`fn display(&self) *char`** - For output and format macros.

<details style="cursor: pointer"><summary style="user-select: none">Example</summary>
<p>

```deen
struct Int {
  value: i32,
  
  fn display(&self) *char {
    return format!("{}", self.value);
  }
}

fn main() {
  let num = Int { .value = 10 };
  println!("Integer number is: {}", num);
}
```
```
Integer number is: 10
```

</p>
</details>

----

- **`fn drop(&self)`** - Data destructor. Calls on scope exit.


<details style="cursor: pointer"><summary style="user-select: none">Example</summary>
<p>

```deen
struct Int {
  value: i32,
  
  fn drop(&self) {
    println!("Dropping value `{}`", self.value);
  }
}

fn main() {
  let num = Int { .value = 10 };
  println!("Hello!");
}
```
```
Hello!
Dropping value `10`
```

</p>
</details>

----

- **`fn iterate(&self) (_, bool)`** - Iterator function, used by `for` loop. <br/>
Boolean flag in return type is used to know if value is _something_.

<details style="cursor: pointer"><summary style="user-select: none">Example</summary>
<p>

```deen
struct Int {
  value: i32,
  iterator: i32,

  fn new(value: i32) Int {
    return Int { .value = value, .iterator = 0 };
  }

  fn iterate(&self) (i32, bool) {
    let output = self.iterator;

    if output >= self.value {
      self.iterator = 0;
      return (output, false);
    }

    self.iterator += 1;
    return (output, true);
  }
}

fn main() {
  let num = Int.new(5);

  for item = num {
    println!("{}", item);
  }
}
```
```
0
1
2
3
4
```

</p>
</details>

----

- **`fn binary(&self, other: *Self, operator: *char) Self`** - For binary operations on structures.

<details style="cursor: pointer"><summary style="user-select: none">Example</summary>
<p>

```deen
struct Int {
  value: i32,

  fn new(value: i32) Int {
    return Int { .value = value };
  }

  fn binary(&self, other: *Int, operator: *char) Int {
    let value = self.value;

    if operator == "+" {
      value += other.value;
    } else if operator == "-" {
      value -= other.value;
    } else if operator == "*" {
      value *= other.value;
    } else {
      value /= other.value;
    }

    return Int.new(value);
  }

  fn display(&self) *char {
    return format!("{}", self.value);
  }
}

fn main() {
  let a = Int.new(10);
  let b = Int.new(5);

  println!("{}", a + b);
  println!("{}", a - b);
  println!("{}", a * b);
  println!("{}", a / b);
}
```
```
15
5
50
2
```

</p>
</details>

----

- **`fn unary(&self, operator: *char) Self`** - For unary operations on structures.

<details style="cursor: pointer"><summary style="user-select: none">Example</summary>
<p>

```deen
struct Int {
  value: i32,

  fn new(value: i32) Int {
    return Int { .value = value };
  }

  fn unary(&self, operator: *char) Int {
    if operator == "!" {
      return Int.new(!self.value);
    } else {
      return Int.new(-self.value);
    }
  }

  fn display(&self) *char {
    return format!("{}", self.value);
  }
}

fn main() {
  let a = Int.new(10);

  println!("-a = {}", -a);
  println!("!a = {}", !a);
}
```
```
-a = -10
!a = -11
```

</p>
</details>

----

- **`fn compare(&self, other: *Self) i32`** - For boolean operators on structs (_-1_ - left is greater; _0_ - equal; _1_ - right is greater).

<details style="cursor: pointer"><summary style="user-select: none">Example</summary>
<p>

```deen
struct Int {
  value: i32,

  fn new(value: i32) Int {
    return Int { .value = value };
  }

  fn compare(&self, other: *Int) i32 {
    if self.value > other.value {
      return -1;
    } else if self.value < other.value {
      return 1;
    }

    return 0;
  }

}

fn main() {
  let a = Int.new(10);
  let b = Int.new(5);

  println!("{}", a > b);
  println!("{}", a => b);
  println!("{}", a < b);
  println!("{}", a <= b);
  println!("{}", a == b);
  println!("{}", a != b);
}
```
```
true
true
false
false
false
true
```

</p>
</details>

----

- **`fn deref(&self) _`** - For the dereference operator.

<details style="cursor: pointer"><summary style="user-select: none">Example</summary>
<p>

```deen
struct Int {
  value: i32,

  fn new(value: i32) Int {
    return Int { .value = value };
  }

  fn deref(&self) i32 {
    return self.value + 1;
  }

  fn display(&self) *char {
    return format!("{}", self.value);
  }
}

fn main() {
  let a = Int.new(10);

  println!("a: {}", a);
  println!("*a: {}", *a);
}
```
```
a: 10
*a: 11
```

</p>
</details>

----

- **`fn deref_assign(&self, value: _)`** - For the dereference assignment operator.

<details style="cursor: pointer"><summary style="user-select: none">Example</summary>
<p>

```deen
struct Int {
  value: i32,

  fn new(value: i32) Int {
    return Int { .value = value };
  }

  fn deref_assign(&self, value: i32) {
    self.value = value + 1;
  }

  fn display(&self) *char {
    return format!("{}", self.value);
  }
}

fn main() {
  let a = Int.new(10);

  *a = 100;

  println!("{}", a);
}
```
```
101
```

</p>
</details>

----

- **`fn slice(&self, index: usize) _`** - For the slice expression.

<details style="cursor: pointer"><summary style="user-select: none">Example</summary>
<p>

```deen
struct Int {
  value: i32,

  fn new(value: i32) Int {
    return Int { .value = value };
  }

  fn slice(&self, index: usize) i32 {
    return self.value + cast!(index, i32);
  }

  fn display(&self) *char {
    return format!("{}", self.value);
  }
}

fn main() {
  let a = Int.new(10);

  println!("a: {}", a);
  println!("a[10]: {}", a[10]);
}
```
```
a: 10
a[10]: 20
```

</p>
</details>

----

- **`fn slice_assign(&self, index: usize, value: _)`** - For the slice assign statement.

<details style="cursor: pointer"><summary style="user-select: none">Example</summary>
<p>

```deen
struct Int {
  value: i32,

  fn new(value: i32) Int {
    return Int { .value = value };
  }

  fn slice_assign(&self, index: usize, value: i32) {
    self.value = cast!(index, i32) + value;
  }

  fn display(&self) *char {
    return format!("{}", self.value);
  }
}

fn main() {
  let a = Int.new(10);

  a[10] = 10;

  println!("a: {}", a);
}
```
```
a: 20
```

</p>
</details>

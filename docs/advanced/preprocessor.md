# Preprocessor

Preprocessor in Deen is inspired by C. It provides toolchain to resolve code and portability at compile time.

## Directives

> [!NOTE]
>
> - **`#define [NAME] [VALUE]`** - define new preprocessor variable. Example:
>
> ```deen
> #define PI 3.14
> println!("Pi number is PI");
> ```
>
> - **`#if [EXPR]`, `#elif [EXPR]`, `#else`, `#endif`** - logical branches. Example:
>
> ```deen
> #define IS_COOL 1
> #if IS_COOL
>   println!("Cool!");
> #else
>   println!("Not cool!");
> #endif
> ```

## Predefined Variables

Compiler has its predefined variables for compile time resolves:

```deen
// Preprocessor uses 1/0 as boolean flags (1 = true, 0 = false)

__LANG__ // Language name: deen
__LANG_VERSION__ // Language version in SemVer: *.*.*

__OS_LINUX__ // Linux system boolean flag: 1 / 0
__OS_WINDOWS__ // Windows system boolean flag: 1 / 0
__OS_MACOS__ // MacOS system boolean flag: 1 / 0
__OS_FREEBSD__ // FreeBSD system boolean flag: 1 / 0
__OS_NETBSD__ // NetBSD system boolean flag: 1 / 0
__OS_OPENBSD__ // OpenBSD system boolean flag: 1 / 0
__OS_ANDROID__ // Android system boolean flag: 1 / 0
__OS_IOS__ // IOS system boolean flag: 1 / 0

__OS__ // System name: linux / windows / macos / ...

__ARCH_X86__ // x86 arch boolean flag: 1 / 0
__ARCH_x86_64__ // x86_64 arch boolean flag: 1 / 0
__ARCH_ARM__ // arm arch boolean flag: 1 / 0
__ARCH_AARCH64__ // aarch64 arch boolean flag: 1 / 0
__ARCH_RISCV64__ // riscv64 arch boolean flag: 1 / 0
__ARCH_WASM32__ // wasm32 arch boolean flag: 1 / 0

__ARCH__ // Arch name: x86 / x86_64 / arm / ...

__ENV_GNU__ // GNU environment boolean flag: 1 / 0
__ENV_MUSL__ // MUSL environment boolean flag: 1 / 0
__ENV_MSVC__ // MSVC environment boolean flag: 1 / 0
```

## Examples:

```deen
fn main() i32 {
  println!("Your system is: __OS__ with arch __ARCH__");
}
```

**↓**

```deen
// For example on my system

fn main() i32 {
  println!("Your system is: linux with arch x86_64");
}
```

---

```deen
fn main() i32 {
  #if __OS_LINUX__
    // linux stuff
  #elif __OS_WINDOWS__
    // windows stuff
  #else
    // other systems stuff
  #endif
}
```

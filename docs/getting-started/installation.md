# Installation

## Simple Installation
1. Install a supported C compiler: [clang](https://clang.llvm.org/), [gcc](https://gcc.gnu.org/), msvc
2. Download the latest build for your system from GitHub: [Latest Release](https://github.com/mealet/deen/releases/latest)
3. Unpack it anywhere and add the executable to your `PATH` environment variable.
4. Set the **`DEEN_LIB`** environment variable to the full path of the **`stdlib`** folder (located near the binary). Example: `/home/mealet/deen/stdlib`

## Build
1. Install the [Rust Programming Language](https://www.rust-lang.org/) from the official site.
2. Install [LLVM](https://www.llvm.org/docs/GettingStarted.html) following the official tutorial.
3. Clone this repository: `git clone https://github.com/mealet/deen`
4. Go to its directory and run: `cargo build --release`
5. The executable file will be in the `target/release` folder.
6. Don't forget to set the `DEEN_LIB` environment variable.

## How to use?
1. Write code. Example:
```deen
// source.dn
fn main() i32 {
  println!("Hello, World!");
  return 0;
}
```
2. Compile (check CLI Reference for more):
```
$> deen source.dn output
```
3. Run the executable file:
```
$> ./output
Hello World!
```

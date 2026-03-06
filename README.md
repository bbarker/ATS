# ATS Development Environment

A Nix flake providing development environments for both ATS2 (Postiats) and ATS3 (Xanadu).

## Overview

This flake provides ATS2 and ATS3 development environments. ATS3 dependencies (XATSHOME, ATS-Xanadu) are fetched as flake inputs from GitHub.

### ATS3 Components

ATS3 (Xanadu) consists of two repositories:

| Repository | Purpose |
|------------|---------|
| **ATS-Xanadu** | Compiler source code, standard libraries (prelude, xatslib), and language documentation. This is where ATS3 is developed. |
| **XATSHOME** | Pre-built compiler toolchains (xats2js, xats2py as JavaScript), runtime libraries for executing compiled output, and example projects. This is the distribution for end users. |

The `XATSHOME` environment variable points to XATSHOME, while `XATSXANADU` points to ATS-Xanadu. The compilers in XATSHOME need access to both repositories to locate the standard library sources.

## Prerequisites

- [Nix](https://nixos.org/download.html) with flakes enabled

To enable flakes, add to `~/.config/nix/nix.conf`:
```
experimental-features = nix-command flakes
```

## Usage

### Development Shells

**Enter the combined development shell (ATS2 + ATS3):**
```bash
nix develop
```

**Enter ATS2-only shell:**
```bash
nix develop .#ats2
```

**Enter ATS3-only shell:**
```bash
nix develop .#ats3
```

### Available Commands

#### ATS2 (Postiats)

| Command | Description |
|---------|-------------|
| `patscc` | ATS2 compiler driver (compiles `.dats` to executable) |
| `patsopt` | ATS2 compiler (type-checks and generates C code) |

#### ATS3 (Xanadu)

| Command | Description |
|---------|-------------|
| `xats2js-run` | Build (if needed) and run |
| `xats2js-build` | Compile to JS with runtime included |
| `xats2js` | Raw compiler (no runtime) |
| `xats2py` | ATS3 to Python compiler |

### Environment Variables

The development shells automatically set:

- `PATSHOME` - Path to ATS2 installation
- `XATSHOME` - Path to XATSHOME directory
- `XATSXANADU` - Path to ATS-Xanadu source

## Examples

### ATS2 Example

```bash
nix develop .#ats2

# Create a simple program
cat > hello.dats << 'EOF'
implement main0() = println!("Hello from ATS2!")
EOF

# Compile and run
patscc -o hello hello.dats
./hello
```

### ATS3 Example

```bash
nix develop .#ats3

# Create a simple program
cat > hello.dats << 'EOF'
#include
"prelude/HATS/prelude_dats.hats"
#include
"prelude/HATS/prelude_JS_dats.hats"

val () = println("Hello from ATS3!")
val () = console_log(the_print_store_flush())
EOF

# Build and run (rebuilds only if source changed)
xats2js-run hello.dats

# Or build separately
xats2js-build hello.dats -o hello.js
node hello.js
```

## Updating ATS3

To pull the latest changes for all local repos (ATS-Xanadu, XATSHOME, cargo-ats3):

```bash
./update-repos.sh
```

This fast-forward merges each repo's default branch from origin. It will **not** overwrite unstaged changes — `--ff-only` will abort if there are conflicts or divergent history.

To update the Nix flake inputs instead:

```bash
nix flake update xatshome ats-xanadu
```

## Resources

- [ATS Language Website](http://www.ats-lang.org/)
- [ATS2 Documentation](http://ats-lang.sourceforge.net/DOCUMENT/)
- [ATS-Xanadu README](https://github.com/githwxi/ATS-Xanadu/blob/master/README.md)
- [ATS Users Mailing List](https://groups.google.com/g/ats-lang-users)

## License

The ATS compilers are released under GPL v3. See individual repositories for full license details.

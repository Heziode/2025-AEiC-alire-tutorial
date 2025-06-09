---
layout: center
class: text-center
---

# Shared Builds

---
layout: default
---

# Old Behavior

```bash
$ alr init --bin myprogram && cd myprogram
$ alr settings --set dependencies.shared false
$ alr with hello # hello depends on libhello
$ tree .
```

```text
myprogram/
alire
alire.lock
alire.toml
myprogram.gpr
cache
  dependencies
    hello_1.0.1_dcc36a2f
    libhello_1.0.0_7bc7dcfd
alire.toml
myprogram.gpr
src
  myprogram.adb
```
---

# New Default Behavior

```bash
$ alr init --bin myprogram && cd myprogram
$ #
$ alr with hello
$ tree .
```

```text
myprogram/
alire
alire.lock
alire.toml
myprogram.gpr
src
  myprogram.adb
```

---

# Shared Build Structure

```bash
$ tree $HOME/.local/share/alire/
```

```text
$HOME/.local/share/alire/
├── builds
│ ├── hello_1.0.2_5715870b      # For each release in VAULT,
│ │ ├── f049a4cc2ce09           # SHARED build locations
│ │ └── 64359f1082c9d           # having unique config.
│ └── libhello_1.0.1_3c15bc7f
│   ├── 4ec0aaac3c670 
│   └── 6a8aaea7927c8
└── releases                    # "VAULT" of r/o releases
  ├── hello_1.0.2_5715870b      # downloaded just once,
  └── libhello_1.0.1_3c15bc7    # kept pristine.
```

---

# Unique Build Hash

```bash
$ cat $HOME/.local/share/alire/builds/hello_1.0.2_5715870b/f049a4cc2ce09/alire/build_hash_inputs
```

```text
dependency:libhello=1.0.1=5075676debf3
external:HELLO_LIBRARY_TYPE=default
external:LIBRARY_TYPE=default
profile:hello=VALIDATION
switches:hello=-O3,-fdata-sections,-ffunction-sections,-g,
-gnatVa,-gnatW8,-gnata,-gnatn,-gnato,-gnatw.X,-gnatwa,
-gnatwe,-gnaty-d,-gnaty3,-gnatyA,-gnatyB,-gnatyI,-gnatyO,
-gnatyS,-gnatya,-gnatyb,-gnatyc,-gnatye,-gnatyf,-gnatyh,
-gnatyi,-gnatyk,-gnatyl,-gnatym,-gnatyn,-gnatyp,-gnatyr,
```

<div class="mt-4 text-sm">
<strong>ALI for builds</strong> - unique hash based on all build inputs
</div>

---

# Shared Builds Environment

```bash
$ alr printenv
```

```text
export 
GPR_PROJECT_PATH="$HOME/.local/share/alire/builds/hello_1.0.2_5715870b/830a733e5eab:
$HOME/.local/share/alire/builds/libhello_1.0.1_3c15bc7f/eb3958dc41730:/tmp/a/myprogram"
```

<div class="mt-4 p-4 rounded-xl border border-yellow-400">

**IMPLICATION**: the hash cannot be computed unless all inputs (configuration values, environment variables, compiler to be used) are known.

**IMPLEMENTATION**:
- VAULT → BUILD sync is delayed until build time
- post-fetch is run only once after sync, not on fetch
</div>

---

# Shared Builds Paths

```bash
$ alr version
```

```text
CONFIGURATION
settings folder:   ~/.config/alire
cache folder:      ~/.local/share/alire
vault folder:      ~/.local/share/alire/releases
build folder:      ~/.local/share/alire/builds
toolchain folder:  ~/.local/share/alire/toolchains
```

<div class="mt-4 text-sm">

**cache** and **toolchain** folders can be relocated with settings:
- `cache.dir`
- `toolchain.dir`

By default, `alr` stores its global settings at `<user home>/.config/alire`. You can use any other location by setting in the environment the variable `ALIRE_SETTINGS_DIR=</absolute/path/to/settings/folder>`, or by using the global `-s` switch: `alr -s </path/to/settings> <command>`
</div>

---
---
layout: center
class: text-center
---

# Shared Builds

<!--
Now let's discuss one of the biggest architectural changes: shared builds.
-->

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

<!--
Previously, when you added dependencies to a project, they would be built locally in a cache directory within your project.

This meant every project had its own copy of compiled dependencies, even if multiple projects used the same versions of the same crates.
-->

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

<!--
Now, with shared builds enabled by default, your project directory stays clean.

Dependencies are now built in a shared location and reused across projects. This saves significant disk space and build time.
-->

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

<!--
Here's how the shared build system is organized. There's a `vault` of read-only releases that are downloaded just once and kept clean.

Then there are shared build locations, with unique configuration hashes for each build variant.

This ensures that different build configurations don't interfere with each other.
-->

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

<!--
The build hash is computed from all build inputs: 

- dependencies
- external variables
- build profiles
- and compiler switches.

This is like having ALI files for builds, it ensures that any change in build configuration results in a separate build directory.
-->

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

<!--
The implication of this design is that the hash cannot be computed until all build inputs are known.

This means the synchronization from vault to build directory is delayed until build time, and post-fetch actions are run only once after sync, not on initial fetch.
-->

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

<!--
Here's where everything is stored by default.

You can see the settings folder, cache folder, vault folder, build folder, and toolchain folder.

The cache and toolchain folders can be relocated with settings, and you can override the global settings directory with an `environment variable` or `command-line switch`.
-->

---
theme: default
class: text-center
layout: intro
themeConfig:
  primary: '#60a5fa'
---

# The Alire Package Manager Exercises

**Quentin DAUPRAT**  
June 10, 2025

https://alire.ada.dev/

---

## Getting started

Visit the following repository to get the materials:

- [https://github.com/heziode/2025-AEiC-alire-tutorial](https://github.com/heziode/2025-AEiC-alire-tutorial)

Also, if you don't have GNAT Studio:

- [https://github.com/AdaCore/gnatstudio/releases/tag/gnatstudio-cr-20240506](https://github.com/AdaCore/gnatstudio/releases/tag/gnatstudio-cr-20240506)

If you uses VS Code, you can use the [Ada & SPARK by AdaCore](https://marketplace.visualstudio.com/items?itemName=AdaCore.ada) extension.

---
layout: center
---

# Installation

---

## Installation

 - From binaries
    - https://github.com/alire-project/alire/releases
       - Scroll down to **Assets** section and expand
    - Grab latest stable release (2.1.0) for your platform
       - For Windows, the installer is recommended
    - **Ubuntu** recommended for minimal friction

---

## Installation from sources

Useful to experiment with the latest features in the master branch

1. Clone the repository: `git clone --recurse-submodules https://github.com/alire-project/alire.git`
1. Enter the cloned repository folder.
1. Build the executable:
   * if you have Bash on your system: `dev/build.sh`
   * if you don't have Bash on your system: `ALIRE_OS=<one of: freebsd, openbsd, linux, macos, windows> gprbuild -j0 -p -P alr_env`

1. The binary will be found at `bin/alr`.
1. Run e.g. `alr version`

---

## `alr version` output

```bash
$ alr version
APPLICATION
alr version:               2.1.0
libalire version:          2.1.0
source commit:             2681b313d08224014fa3f5e4f76e9c75347213d2
source changes:            clean
compilation date:          2025-03-04 10:21:32
compiled with version:     14.2.0

CONFIGURATION
settings folder:           /Users/heziode/.config/alire
cache folder:              /Users/heziode/.local/share/alire
vault folder:              /Users/heziode/.local/share/alire/releases
...
```

---

## Toolchain selection (interactive)

```bash
$ alr toolchain --select

1. gnat_native=11.2.4
2. None
3. gnat_external=9.4.0 [Detected at /usr/bin/gnat]
4. gnat_arm_elf=11.2.4
5. gnat_avr_elf=11.2.4
6. gnat_riscv64_elf=11.2.4
a. (See more choices...)
Enter your choice index (first is default):
>
```

---

## Toolchain selection (headless)

```bash
# Latest compiler and builder
$ alr toolchain --select gnat_native gprbuild

# Latest within a major version
$ alr toolchain --select gnat_native^11 gprbuild
                                    ^^^
# Precise version
$ alr toolchain --select gnat_native=10.3.2 gprbuild
                                    ^^^^^^^
```

---

## Toolchain selection (distro compiler)

- Choosing 'None' will use gprbuild blindly
  - You must ensure there is one gprbuild/gnat in $PATH

- Why choose a `gnat_external`?
  - The selected compiler takes precedence, as long as it is compatible with dependencies.
  - This may prevent a large download in some cases

---

## Toolchain inspection

```bash
$ alr toolchain
CRATE         VERSION  STATUS    NOTES
gprbuild      22.0.1   Default
gprbuild      2019.0.0 Available Detected at /usr/bin/gprbuild
gnat_arm_elf  11.2.3   Available
gnat_native   10.3.2   Available
gnat_native   11.2.4   Default
gnat_external 9.4.0    Available Detected at /usr/bin/gnat
```

- Available compilers take precedence over uninstalled ones
  - May avoid a large download

---

## Bash completion

Requires `alr` to be in `$PATH`

Adjust for your sources location:

```bash
if [ -f /path/to/alire/scripts/alr-completion.bash ]; then
    source /path/to/alire/scripts/alr-completion.bash
fi
```

---
layout: center
---

# Testing the (ecosystem) waters

---

## Retrieve and run a release

```bash
$ alr get hangman
$ ls
hangman_1.0.0_be628ad5
$ cd hangman*
$ alr run --list
Crate hangman builds these executables:
   hangmain (not found)
$ alr run
```

<Task title="Try these" icon="🚀" color="green">Other executable crates to experiment with:

`eagle_lander`, `lace_gel_full_demo`, `mathpaqs`, `play_2048`, `rsfile`, `septum`, `shoot_n_loot`, `zipada`

</Task>

You can install a crate globally with:

```bash
$ alr install <crate>
```

---

## Look up by name

- Look up crates by name/description:
  - `alr search --crates [<substring>]`
- look up releases by name/description:
  - `alr search <substring> [--full]`
  - `alr search --list [--full]`

Without `--full`, only the last release of a crate will be returned.

<Task title="Exercise" icon="🔍" color="purple">

Experiment with these commands to locate some crate related to a topic of your interest: `toml`, `yaml`, `py`, `math`, ...

</Task>

Check out most popular tags at [https://alire.ada.dev/tags/](https://alire.ada.dev/tags/)

---

## Deletion in <badge color="purple">2.1.0</badge> of `--property`

In <badge color="purple">2.0.0</badge>, search introduce the `--property` option.
This option is now deleted in <badge color="purple">2.1.0</badge>, because the search now looking into all properties.

---

## Showing details before retrieving

`$ alr show <crate>[version subset]`

<Task>Try it:

- `alr show hello`
- `alr show gnat_native^10`

</Task>

Details about dependencies:

- `alr show hello --solve | --tree | --graph`

<Task>

Try these with a crate with more dependencies: `lace_gel_full_demo, septum, shoot_n_loot`

</Task>

---

## Showing details after retrieving

From within a local crate folder, you can simply issue:

- `alr show`
- `alr show --solve | --tree | --graph`
- `alr with --solve | --tree | --graph | --versions`

Useful to display your work-in-progress manifest

<Task>Try it inside the own Alire source tree.</Task>

You can also use the global parameter `--format=[json|toml]` to get the details in a different format. For instance:

- `alr --format=json show`
- `alr --format=toml index --list`


---
layout: center
---

# Starting crates

---

## Starting from scratch

At the parent location:

- `$ alr init --lib <crate name>`
- `$ alr init --bin <crate name>`

Naming rules:

- `$ alr help identifiers`

---

## Starting from preexisting code

Inside the root of your existing code:

- `$ alr init --lib --in-place --no-skel <crate name>`

---

##  Generated disk structure

```bash
$ alr init --bin demo
✓ demo initialized successfully.

demo
├── alire                   # Alire folder
│   ├── alire.lock          # Dependency solution
│   ├── build_hash_inputs   # Build hash inputs (used to determine if a build is needed)
│   └── settings.toml       # Local configuration
├── alire.toml              # Manifest
├── config                  # Configuration (generated by Alire)
│   ├── demo_config.ads     # Generated metadata & config
│   ├── demo_config.gpr     # Generated project file
│   └── demo_config.h       # C equivalent to Ada spec
├── demo.gpr                # Project file
├── share
│   └── demo                # Place exported resources here (graphics, texts, databases, etc.)
└── src
    └── demo.adb            # Main subprogram
```

---

##  Generated disk structure (after build)

```bash
$ cd demo && alr build
Build finished successfully in 0.27 seconds.

demo
├── alire
│   ├── alire.lock
│   ├── build_hash_inputs       
│   ├── flags
│   │   └── post_fetch_done
│   └── settings.toml
├── alire.toml
├── bin
│   └── demo
├── config
│   ├── demo_config.ads
│   ├── demo_config.gpr
│   └── demo_config.h
├── demo.gpr
├── obj
│   └── development              # Intermediate build artifacts
     ...
├── share
│   └── demo
└── src
    └── demo.adb
```

<!-- SOME parts are not documented, see https://github.com/alire-project/alire/issues/1961 -->


---
layout: center
---

# Working with dependencies

---

## The goal

<Task title="Objective" icon="🎯" color="purple">

- Create a new binary crate (or reuse demo)
- Add the 'libhello' dependency
- Call its `Libhello.Hello_World` procedure from your main subprogram
- Run it

</Task>

---

## Adding a dependency via `alr`

<Task>Inside your crate:

`$ alr with libhello`
</Task>

&nbsp;

<Task>Verify new code is being built:

```bash
$ alr build
Compile
   [Ada]          demo.adb
   [Ada]          libhello.adb
```

</Task>

---

## Changes caused by adding a dependency

<Task>

Inspect the `alire.toml` manifest contents
</Task>

<Task>

Inspect the `config/demo_config.gpr` project file
</Task>

<Task>

Edit the main subprogram to obtain this output, using the library instead of `Ada.Text_IO`:

```bash
$ alr run
Hello, world!
```
</Task>

---

## Adding a dependency manually

<Task>

Try to remove the `[[depends-on]]` section from `alire.toml` and build again
</Task>

<Task>

Re-add the dependency manually, by editing `alire.toml`:

```toml
[[depends-on]]
libhello = "*"  # This means any version whatsoever
```

</Task>

<Task>

Observe the feedback from `alr` when the manifest is edited by hand
</Task>

---

## Conditional expressions in the manifest

Alire supports dynamic expressions in some properties:

`property = value` becomes `property.'case(var)'.var_case = value`

Available variables: `distribution`, `host-arch`, `os`, `word-size`

Valid values: [alire-platforms.ads](https://github.com/alire-project/alire/blob/master/src/alire/alire-platforms.ads)

---

## Conditional expression examples

```toml
available = true     # Implicit in all manifests unless...

[available.'case(os)']
linux = true
'...' = false

[[depends-on]]
[depends-on.'case(os)'.linux]
libhello = "*"
```

<Task>

Edit your manifest so the dependency on `libhello` is only for your operating system.
</Task>

---

## Verifying a conditional expression

```bash
$ alr show
demo=0.1.0-dev: 
Origin: path /tmp/demo
Available when: (case OS is Macos => True, others => False)
Properties:
   Author: Heziode
   …
Dependencies (direct):
   case OS is
      when Macos => libhello*
```

---
layout: center
---

# Build profiles

---

## Basics of build profiles

https://github.com/alire-project/alire/blob/master/doc/catalog-format-spec.md

- Predefined build profiles:
  - Development
  - Validation
  - Release
- Each defines a set of predefined switches
- You can totally override in your main project file
  - There are ways to avoid needing to do so

---

## Building with default profiles

- Dependencies by default use `release` mode
- For the root crate:
  - `alr build [--release|--validation|--development]`
  - Defaults to `development`
- Query last build mode with:
  - `alr settings last_build_profile`
  - Contents of `config/<crate>_config.ads`

---

## Overriding defaults via the manifest

```toml
[build-profiles]
"*"      = "development"   # Applies to non-explicit crates
libhello = "release"
demo     = "validation"    # The root crate may appear here
```

<Task>

Try it and verify via `config/demo_config.gpr`
</Task>

---

## Adjusting switches of a profile

Alire has collections of switches grouped by topic. E.g.:

- Optimization
  - Performance
  - Size
  - Debug

Then, *for the own crate*, you can:

```toml
[build-switches]
release.optimization = "performance"
"*".optimization     = "debug"
```

---

## Switches categories

[https://alire.ada.dev/docs/#release-information](https://alire.ada.dev/docs/#release-information)

- Ada_Version
- Compile_Checks
- Contracts
- Debug_Info
- Optimization
- Runtime_Checks
- Style_Checks

---

## Category overrides

```toml
[build-switches]
release.optimization = ["-O2", "-gnatn"]
```




---
layout: center
---

# Environment

---

## Display and set the environment

- `$ alr printenv`
  - `--unix` (default)
  - `--powershell`
  - `--wincmd`

<Task>

Use `alr help printenv` for ways to apply the output
</Task>

---

## Executing within the environment

- `$ alr edit`
  - Defaults to gnatstudio
  - `alr config --set editor.cmd <editor> ${GPR_FILE}`
- `$ alr exec -- <command>`




---
layout: center
---

# Publishing

---

## Preliminaries

- Have a github user
- For the automated publishing, you need a token from GitHub:
  - Go to [https://github.com/settings/tokens](https://github.com/settings/tokens)
  - Generate a new token with the `repo` scope
  - Store it in the `ALIRE_PUBLISH_TOKEN` environment variable
  - See [https://alire.ada.dev/docs/#creating-a-github-personal-access-token](https://alire.ada.dev/docs/#creating-a-github-personal-access-token)
- For manual publishing (**not recommended**), fork the community index repository:
  - [https://github.com/alire-project/alire-index](https://github.com/alire-project/alire-index)

- It is also possible to publish a tar/zip file hosted anywhere
  - No need to have fork of the index
  - GitHub account still needed

---

## Publishing a git commit

### Automated publishing

Just run `$ alr publish` at the root of your workspace.

### Manual publishing

Inside your up-to-date local repository:

`$ alr publish [--skip-build]`

Works only for trusted hostings:

`$ alr publish --trusted-sites`

```text
bitbucket.org
github.com
gitlab.com
savannah.gnu.org
savannah.nongnu.org
sf.net
```

---

## Publishing a tarball

Source file already on-line:

`$ alr publish https://url/of/file.zip`

Create file on the go:

`$ alr publish --tar`

---

## Example of on-line manifest (commit)

[https://github.com/alire-project/alire-index/blob/stable-1.2/index/aa/aaa/aaa-0.2.5.toml](https://github.com/alire-project/alire-index/blob/stable-1.2/index/aa/aaa/aaa-0.2.5.toml)

```toml
[origin]
commit = "521a8669cf8dbd0eeb71d22d2634421265d52f62"
url = "git+https://github.com/mosteo/aaa.git"
```

---

## Example of on-line manifest (tarball)

[https://github.com/alire-project/alire-index/blob/stable-1.2/index/ap/apdf/apdf-5.0.3.toml](https://github.com/alire-project/alire-index/blob/stable-1.2/index/ap/apdf/apdf-5.0.3.toml)

```toml
[origin]
url =
  "https://sourceforge.net/projects/apdf/files/apdf_005_r3.zip"
hashes =
  ["sha512:dbe27598986b1744b024803348350e48b9fe14a14b4..."]
```

---

## Example of on-line manifest (monorepo commit)

[https://github.com/alire-project/alire-index/blob/stable-1.2/index/js/json/json-5.0.2.toml](https://github.com/alire-project/alire-index/blob/stable-1.2/index/js/json/json-5.0.2.toml)

```toml
[origin]
url = "git+https://github.com/onox/json-ada.git"
commit = "d429d7af880ab9ed38d58ac08c1c9a16e7697752"
subdir = "json"
```


---
layout: center
---

# Pinning dependencies

---

## Inspecting pins

Pins are useful to substitute a dependency with a work-in-progress version, or with an unpublished commit.

List pins with `$ alr pin`

&nbsp;

<Task title="Important" icon="⚠️" color="yellow">Pins in `alr v2.1`:

1. `git clone https://github.com/alire-project/alire --branch release/2.1`
1. `cd alire`
1. `alr pin`

</Task>

---

## Pinning dependencies

- Pin to a local folder
  - `alr with --use /path/to/folder`
- Pin to a remote repository
  - `alr with https://github.com/mosteo/wordlist`

`alr with` will add dependency + pin

`alr pin` only works when the dependency already exists in the manifest

---

## Pins for testing/demo subcrates

<Task>Create a library crate and a binary demo subcrate:

1. `alr init --lib mylib`
1. `cd mylib`
1. `alr init --bin mylibdemo`
1. `cd mylibdemo`
1. `alr with --use ..`
1. `alr edit`

</Task>

---

## Structure of lib + demo subcrate

```bash
$ tree mylib

mylib
├── alire
│   …
├── alire.toml
├── config
│   …
├── mylib.gpr
├── mylibdemo
│   ├── alire
│   │   …
│   ├── alire.toml
│   ├── config
│   │   …
│   ├── mylibdemo.gpr
│   ├── share
│   │   └── mylibdemo
│   └── src
│       └── mylibdemo.adb
├── share
│   └── mylib
└── src
    └── mylib.ads
```



---
layout: center
---

# WORDLE example

---

## Implementing WORDLE in an afternoon

Wordle is a popular game of guessing a word of 5 letters in six attempts or less.

1. `$ git clone https://github.com/mosteo/wordle_ada --branch main`
1. `$ cd wordle_ada`
1. `$ alr run`

---

## Example run

```ansi
Please enter your guess "#6: beaks
PL[0;32mA[0mNE
QUIC[0;33mK[0m
YOL[0;32mKS[0m
T[0;33mA[0mN[0;32mKS[0m
R[0;33mA[0mC[0;32mKS[0m
BE[0;32mAKS[0m
I'm sorry, you ran out of attempts.
The word was: DHAKS
```

---

## Project structure

```bash
$ alr with --tree

wordle=0.1.0
├── aaa=0.2.6 (~0.2.6)
├── ansiada=1.0.0 (^1.0.0)
├── wordlelib=0.1.0 (~0.1.0)
│   └── aaa=0.2.6 (~0.2.5)
└── wordlist=0.1.2 (~0.1.2)
    ├── aaa=0.2.6 (~0.2.5)
    ├── ada_toml=0.3.0 (~0.3.0)
    ├── gnat=11.2.4 (gnat_native) (>=10 & <2000)
    └── resources=0.1.0 (~0.1.0)
```

---
layout: two-cols
---

## Used crates

- wordle
  - user interaction
- aaa
  - string casing
  - word containers
- ansiada
  - terminal colors

::right::

- wordlelib
  - game logic
- wordlist
  - list of English words
- ada_toml
  - wordlist loading
- resources
  - locating wordlist.toml

---

## Fix the WORDLE project yourself

<Task title="Challenge" icon="🏆" color="purple">Follow the STEPs in the source code to complete the WORDLE project
<Task variant="compact" title="Info" icon="ℹ️">Each STEP indicates where to locate the next one to continue</Task>
<Task variant="compact">Start with:

- `git clone https://github.com/mosteo/wordle_ada --branch tutorial`
- `cd wordle_ada`
- Your first STEP is at the top of `alire.toml`
  - Each step usually includes several TODOs
</Task>

</Task>

---
layout: center
---

# File generation

---

## Pre-build file generation

- In some restricted embedded environments, it is not feasible to use some ada dynamic constructs. This may difficult efficiently tailoring the code for a particular board.

- Alire allows to define variables that are generated into spec files before the build, and so can be used statically.

---

## Variable types

[https://github.com/alire-project/alire/blob/master/doc/catalog-format-spec.md#using-crate-configuration](https://github.com/alire-project/alire/blob/master/doc/catalog-format-spec.md#using-crate-configuration)

```toml
[configuration.variables]
Enable_Logs = {type = "Boolean", default = false}
Buffer_Size = {type = "Integer",
               first = 128, last = 1024, default = 256}
```

---

## Setting values

```toml
[configuration.values]
crate_name.Enable_Logs = true
```

<Task>

Try adding a configuration variable to your crate. Inspect the generated file in `config/demo_config.ads`
</Task>




---
layout: center
---

# Indexes

---

## Working with indexes

- Listing indexes:
  - `$ alr index`
- Updating indexes:
  - `$ alr index --update-all`
- Adding another index
  - `$ alr index --add <url> --name <name>`
  - <Task variant="minimal">Try adding <a href="https://github.com/simonjwright/alire-index.mac" target="_blank">https://github.com/simonjwright/alire-index.mac</a></Task>
- Removing an index:
  - `$ alr index --del <name>`
  - <Task variant="minimal">Try removing the community index to see the contents of my index only</Task>




---
layout: center
---

# Resources

---

## Exporting resources

Resources are files to be used at run-time: graphics, texts, databases, etc.

Place your resources at `./share/my_crate/`

```bash
$ tree demo
demo
├── alire.toml    # Manifest
├── demo.gpr      # Project file
├── share
│   └── demo      # Place exported resources here
└── src
    └── demo.adb  # Main subprogram
```

---

## Using resources [from other crates]

Crate within the community index:

- `$ alr show resources`
- `$ alr with resources`

<Task>

Check the `resources` crate documentation: [alire-project/resources > README.md](https://github.com/alire-project/resources/blob/main/README.md)
</Task>

Provides a path to a crate's resources:

- During development, inside the crate folder
- After `gprinstall`, relative to the binary


---
layout: center
---

# Configuration

---

## Inspecting configuration

`$ alr settings`

`$ alr help settings`

NB: `alr config` is deprecated, use `alr settings` instead.

---

## Setting variables

`$ alr settings --set [--global] <key> <value>`

&nbsp;

This is the basis of the *aliases* mechanism:

`$ alr help aliases`

&nbsp;

<Task>

Define the `alr graph` alias as suggested in the help output
</Task>



<!--

# Final task: Wordle

## Implementing a command-line wordle

Guess a word in six attempts

- Useful crates: ansiada, wordlist, wordlelib
- Crate 'wordlist' is not in the community index!
  - https:/github.com/mosteo/aeic22_index
-->

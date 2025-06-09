---
theme: default
background: https://source.unsplash.com/1920x1080/?technology,programming
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Alire 2.0: A Quality-of-Life Update
  Presentation about the new features and improvements in Alire 2.0
drawings:
  persist: false
transition: slide-left
title: Alire 2.0 - A Quality-of-Life Update
mdc: true
---

# Alire 2.0
## A Quality-of-Life Update

**Alejandro R. Mosteo**  
June 14, 2024

https://alire.ada.dev/

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: default
---

# Contents

<v-clicks>

- **Context**
- **Ecosystem** 
- **Use cases**
  - Novelties

</v-clicks>

---
layout: center
---

# Package Managers

<div class="grid grid-cols-3 gap-8 items-center justify-center">
  <div class="text-center">
    <div class="text-6xl">🏠</div>
    <div class="text-sm">Homebrew</div>
  </div>
  
  <div class="text-center">
    <div class="text-6xl">📦</div>
    <div class="text-sm">apt-get</div>
  </div>
  
  <div class="text-center">
    <div class="text-6xl">📮</div>
    <div class="text-sm">npm</div>
  </div>
  
  <div class="text-center">
    <div class="text-6xl font-bold">ALR</div>
  </div>
  
  <div class="text-center">
    <div class="text-6xl">🐍</div>
    <div class="text-sm">pip</div>
  </div>
  
  <div class="text-center">
    <div class="text-6xl">💎</div>
    <div class="text-sm">gem</div>
  </div>
  
  <div class="text-center">
    <div class="text-6xl">🐘</div>
    <div class="text-sm">Gradle</div>
  </div>
</div>

---
layout: default
---

# Taxonomy

<v-clicks>

## **SYSTEM** vs <span class="text-red-500">**USER**</span>

## **PLATFORM** vs <span class="text-red-500">**LANGUAGE**</span>

## **BINARY** vs <span class="text-red-500">**SOURCE**</span>

## **OFFICIAL** vs <span class="text-red-500">**COMMUNITY**</span>

</v-clicks>

---
layout: two-cols
---

# Contexts

## Alire
- Project as a whole
- Community index
  - https://…/alire-index
  - Project = "crate"

**Ada Library Repository**

::right::

## alr
- Command-line tool
  - https://…/alire
  - Source download
  - Dependency management
  - Build

<div class="mt-8">
  <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><rect width='100' height='100' fill='%23000'/><text x='50' y='50' text-anchor='middle' dy='.35em' fill='white' font-size='40'>QR</text></svg>" alt="QR Code" class="w-24 h-24">
</div>

https://github.com/alire-project

---
layout: default
---

# Timeline

<v-clicks>

- **Feb 2016**: 1st repo created (early ideas)
- **Jun 2018**: AEiC 2018 paper & current org+repo creation  
- **Aug 2019**: Website online
- **Feb 2021**: 1.0
- **Sep 2021**: 1.1
- **May 2022**: 1.2
- **Mar 2024**: 2.0

</v-clicks>

---
layout: center
class: text-center
---

# Ecosystem

---
layout: default
---

# Crates

<div class="grid grid-cols-2 gap-8">

<div>

**Statistics:**
- **407 crates** (1064 releases)
  - 56 Embedded
  - 16 SPARK

**Top 10 tags:**
- #embedded(56) #nostd(33)
- #web(26) #linux(18)
- #database(17) #spark(16)
- #game(15) #orka(14)
- #gnatcoll(14) #bindings(14)

</div>

<div>

**Network visualization available at:**  
https://alire.ada.dev/network

<div class="text-center mt-4">
  <div class="w-48 h-32 bg-gray-200 rounded flex items-center justify-center">
    <span class="text-gray-500">Network Graph</span>
  </div>
</div>

</div>

</div>

---
layout: default
---

# Downloads

**Almost 100k downloads**  
https://hanadigital.github.io/grev/?user=alire-project&repo=alire

<div class="grid grid-cols-2 gap-8 mt-6">

<div class="bg-gray-100 p-4 rounded">

**v2.0.1: 4325 downloads**
- alr-2.0.1-bin-x86_64-linux.zip: 1949
- alr-2.0.1-bin-x86_64-macos.zip: 676  
- alr-2.0.1-bin-x86_64-windows.zip: 308
- alr-2.0.1-full-sources.zip: 32
- **alr-2.0.1-installer-x86_64-windows: 1068** ⬅️
- alr-2.0.1-x86_64.AppImage: 292

</div>

<div class="bg-gray-100 p-4 rounded">

**Total Downloads: 98850**
- Nightly: 0
- v2.0.1: 4325
- v2.0.0: 1799
- v2.0.0-rc1: 125
- v2.0.0-beta1: 182
- v1.2.2: 30544

</div>

</div>

---
layout: default
---

# New Platforms

## **Tested**
- **Homebrew/MacPorts on macOS** (Simon Wright)
  - x86_64 arch

## **Untested** (no GH workflow runs)  
- **SUSE/openSUSE/zypper** (John Serock)
  - Docker image needed
- **FreeBSD** (Stephane Carrez)

---
layout: default
---

# Community

<div class="text-center text-6xl font-bold text-red-500 mb-8">
257 pull requests
</div>

## New Contributors

<div class="grid grid-cols-2 gap-4 text-sm">

<div>

- @AJ-lanozi made their first contribution in #1141
- @reznikmm made their first contribution in #1179  
- @serock made their first contribution in #1173
- @0rzech made their first contribution in #1249
- @godunko made their first contribution in #1292
- @timlag1305 made their first contribution in #1265

</div>

<div>

- @mgrojo made their first contribution in #1313
- @corinthian13 made their first contribution in #1343
- @atalli made their first contribution in #1408
- @rowan-walshe made their first contribution in #1525
- @dalybrown made their first contribution in #1541
- @rocher made their first contribution in #1619

</div>

</div>

**Full Changelog**: v1.2.2...v2.0.0

---
layout: center
class: text-center
---

# General Use Cases

---
layout: default
---

# Crate Retrieval

```bash
# Retrieve crate for learning/testing
# NEW: nested report
$ alr get umwi
```

<div class="bg-black text-green-400 p-4 rounded mt-4">
<pre>
umwi=0.1.0 successfully retrieved.
ⓘ Found 2 nested crates in ./umwi_0.1.0_34abe384:
demo/demo=1.0.0: Demo of default and corner 
cases
generator/generator=1.0.0: Generate the proper
bodies based on Unicode spec
</pre>
</div>

```bash
# Also works for `alr with`
```

---
layout: default
---

# Crate Inspection

```bash
# NEW: describe projects under current location
$ alr show --nested
```

<div class="bg-black text-green-400 p-4 rounded mt-4">
<pre>
ⓘ Found 80 nested crates in /home/user/prog:
...
wordle_ada/wordle=0.1.0: Wordle for the terminal
wordlist_ada/wordlist=0.1.3: An English word 
list
wordlist_ada/demo/demo=0.1.0-dev: Demo project
yeison/yeison=0.1.0-dev: A JSON-like data
structure using Ada 2022 features
</pre>
</div>

---
layout: default
---

# Initialization

```bash
# NEW: interactive initialization (optional)
$ alr init --bin myproject
```

<div class="bg-black text-green-400 p-4 rounded mt-4">
<pre>
Enter a short description of the crate:
> Cool program
Select a software license for the crate?
1. MIT OR Apache-2.0 WITH LLVM-exception
9. Other...
Enter a comma (',') separated list of tags:
> cool,executable
✓ myprogram initialized successfully.
</pre>
</div>

---
layout: default
---

# Edition

```bash
# NEW: lets you pick editor the 1st time
$ alr init --bin myprogram
$ cd myprogram
$ alr run
$ alr edit
```

<div class="bg-black text-green-400 p-4 rounded mt-4">
<pre>
ⓘ Please select your prefered editor 
1. VS Code
2. GNAT studio
3. Other
</pre>
</div>

---
layout: default
---

# Installation

```bash
$ alr install wordle # new command to build + gprinstall
$ tree ~/.alire/
```

<div class="bg-black text-green-400 p-4 rounded mt-4">
<pre>
$HOME/.alire/ # default location
├── bin/
│ └── wordle
└── share/
  └── wordlist/
    ├── large.toml
    ├── small.toml
    └── wordle.txt
</pre>
</div>

<div class="mt-4 p-4 border-l-4 border-blue-500 bg-blue-50">
<strong>"Resources"</strong>
</div>

```bash
$ alr install gnatprove # binary crates too
$ alr install # installs current workspace crate
$ alr test # tests current workspace crate
```

---
layout: center
class: text-center
---

# Publishing

---
layout: default
---

# Publishing

```bash
# Complete command-line workflow (--> automatable)
$ export GH_TOKEN=... # GitHub Personal Access Token
$ alr publish
```

<div class="bg-black text-green-400 p-4 rounded mt-4">
<pre>
...
✓ Pull request created successfully
ⓘ Visit https://.../alire-index/pull/4 for details
⚠ The submission is in draft mode. 
Please request a review once automated checks 
have succeeded.
</pre>
</div>

---
layout: default
---

# Publishing Status

```bash
$ alr publish --status
```

<div class="bg-black text-green-400 p-4 rounded mt-4">
<pre>
PR REFERENCE                     STATUS           URL 
8  mosteo:release/umwi-2.0.0     Checks_Ongoing   https://…
5  mosteo:release/dashera-0.15.1 Checks_Failed    https://…
2  mosteo:release/rxada-0.1.2    Checks_Passed    https://…
</pre>
</div>

```bash
$ alr publish --request-review=2
$ alr publish --cancel=5 --reason="Obsolete"
```

---
layout: center
class: text-center
---

# Dependency-related

---
layout: default
---

# Finding Libraries

```bash
# Enhanced default search with match identification
$ alr search emoji
```

<div class="bg-black text-green-400 p-4 rounded mt-4">
<pre>
NAME       VERSION  DESCRIPTION                                    MATCHES
emojis     1.0.1    A library to replace names between colons     Description, Name, Tag,
                    with emojis                                    Website
keypadder  0.3.0    Programmable virtual keypad for your Linux    Long_Description
                    desktop
umwi       0.1.0    Unicode Monospace Width Information           Tag
</pre>
</div>

---
layout: default
---

# Finding Dependents

```bash
$ alr show ada_toml --dependents[=direct]
# Direct dependents
```

<div class="bg-black text-green-400 p-4 rounded">
<pre>
CRATE     VERSION  DEPENDENCY 
clic      0.2.1    ~0.2.0|~0.3.0 
wordlist  0.1.3    ~0.3.0
</pre>
</div>

```bash
$ alr show ada_toml --dependents=shortest
# Shortest dependency path for every dependent
```

<div class="bg-black text-green-400 p-4 rounded">
<pre>
CRATE     VERSION  DEPENDENCY  CHAIN 
clic      0.2.1    ~0.2.0|~0.3.0    clic=0.2.1»ada_toml=0.3.0
wordle    0.1.1    ~0.3.0           wordle=0.1.1»wordlist=0.1.3»ada_toml=0.3.0
wordlist  0.1.3    ~0.3.0           wordlist=0.1.3»ada_toml=0.3.0
</pre>
</div>

```bash
$ alr show ada_toml --dependents=all
# Every dependency path for every dependent
```

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

<div class="bg-black text-green-400 p-4 rounded mt-4">
<pre>
myprogram/
├── alire
│ ├── alire.lock
│ └── cache
│   └── dependencies
│     ├── hello_1.0.1_dcc36a2f
│     └── libhello_1.0.0_7bc7dcfd
├── alire.toml
├── myprogram.gpr
└── src
  └── myprogram.adb
</pre>
</div>

---
layout: default
---

# New Default Behavior

```bash
$ alr init --bin myprogram && cd myprogram
$ alr with hello
$ tree .
```

<div class="bg-black text-green-400 p-4 rounded mt-4">
<pre>
myprogram/
├── alire
│ └── alire.lock
├── alire.toml
├── myprogram.gpr
└── src
  └── myprogram.adb
</pre>
</div>

---
layout: default
---

# Shared Build Structure

```bash
$ tree $HOME/.local/share/alire/
```

<div class="bg-black text-green-400 p-4 rounded mt-4">
<pre>
$HOME/.local/share/alire/
├── builds
│ ├── hello_1.0.2_5715870b      # For each release in VAULT,
│ │ ├── f049a4cc2ce09          # SHARED build locations
│ │ └── 64359f1082c9d          # having unique config.
│ └── libhello_1.0.1_3c15bc7f
│   ├── 4ec0aaac3c670 
│   └── 6a8aaea7927c8
└── releases                    # "VAULT" of r/o releases
  ├── hello_1.0.2_5715870b     # downloaded just once,
  └── libhello_1.0.1_3c15bc7   # kept pristine.
</pre>
</div>

---
layout: default
---

# Unique Build Hash

<div class="bg-black text-cyan-400 p-4 rounded">
<pre>
$ cat …/builds/hello…/f049a4cc2ce09/alire/build_hash_inputs

dependency:libhello=1.0.1=5075676debf3
external:HELLO_LIBRARY_TYPE=default
external:LIBRARY_TYPE=default
profile:hello=VALIDATION
switches:hello=-O3,-fdata-sections,-ffunction-sections,-g,
-gnatVa,-gnatW8,-gnata,-gnatn,-gnato,-gnatw.X,-gnatwa,
-gnatwe,-gnaty-d,-gnaty3,-gnatyA,-gnatyB,-gnatyI,-gnatyO,
-gnatyS,-gnatya,-gnatyb,-gnatyc,-gnatye,-gnatyf,-gnatyh,
-gnatyi,-gnatyk,-gnatyl,-gnatym,-gnatyn,-gnatyp,-gnatyr,
</pre>
</div>

<div class="mt-4 text-sm">
<strong>ALI for builds</strong> - unique hash based on all build inputs
</div>

---
layout: default
---

# Shared Builds Environment

```bash
$ alr printenv
```

<div class="bg-black text-green-400 p-4 rounded mt-4">
<pre>
export 
GPR_PROJECT_PATH="$HOME/.local/share/alire/builds/hello_1.0.2_5715870b/830a733e5eab:$HOME/.local/share/alire/builds/libhello_1.0.1_3c15bc7f/eb3958dc41730:/tmp/a/myprogram"
</pre>
</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400">

**IMPLICATION**: the hash cannot be computed unless all inputs (configuration values, environment variables, compiler to be used) are known.

**IMPLEMENTATION**:
- VAULT → BUILD sync is delayed until build time
- post-fetch is run only once after sync, not on fetch

</div>

---
layout: default
---

# Shared Builds Paths

```bash
$ alr version
```

<div class="bg-black text-green-400 p-4 rounded mt-4">
<pre>
CONFIGURATION
settings folder:   ~/.config/alire
cache folder:      ~/.local/share/alire
vault folder:      ~/.local/share/alire/releases
build folder:      ~/.local/share/alire/builds
toolchain folder:  ~/.local/share/alire/toolchains
</pre>
</div>

<div class="mt-4 text-sm">

**cache** and **toolchain** folders can be relocated with settings:
- `cache.dir`
- `toolchain.dir`

</div>

---
layout: center
class: text-center
---

# Miscellanea

---
layout: default
---

# Index Improvements

<v-clicks>

- **Indexes are loaded on demand and piecemeal**
  - Decreased latency for many commands

- **Community index is refreshed once a day**
  - Asks for permission on first refresh

- **Indexes can be accessed over ssh+git**
  - Contributors: Daly Brown/Rowal Walshe

</v-clicks>

---
layout: default
---

# Breaking Changes

<v-clicks>

- **Unicode enabled by default (-gnatW8)**
  - UTF-8-encoded sources created and expected
  - No significant trouble to date

- **Cache locations**
  - Manual cleanup needed of ~/.config/alire/

- **Toolchain export through `alr toolchain`**
  - Removed `--install/--uninstall/--install-dir`
  - Use `alr install` (or `alr get` for the old behavior)

</v-clicks>

---
layout: center
class: text-center
---

# Plans for 2024

---
layout: default
---

# Roadmap Items

<div class="space-y-4">

<div class="flex items-center gap-3">
  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
  <div class="flex-1">
    <span class="font-semibold">Structured output</span>
    <span class="ml-2 px-2 py-1 bg-pink-200 text-pink-800 rounded text-xs">cost: 2-medium</span>
    <span class="ml-1 px-2 py-1 bg-yellow-200 text-yellow-800 rounded text-xs">semver: minor</span>
    <span class="ml-1 px-2 py-1 bg-blue-200 text-blue-800 rounded text-xs">type: feature</span>
  </div>
</div>

<div class="flex items-center gap-3">
  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
  <div class="flex-1">
    <span class="font-semibold">Interactive command-line</span>
    <span class="ml-2 px-2 py-1 bg-red-200 text-red-800 rounded text-xs">cost: 4-extreme</span>
    <span class="ml-1 px-2 py-1 bg-orange-200 text-orange-800 rounded text-xs">semver: major</span>
    <span class="ml-1 px-2 py-1 bg-blue-200 text-blue-800 rounded text-xs">type: feature</span>
    <span class="ml-1 px-2 py-1 bg-purple-200 text-purple-800 rounded text-xs">type: usability</span>
  </div>
</div>

<div class="flex items-center gap-3">
  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
  <div class="flex-1">
    <span class="font-semibold">Fallback origins</span>
    <span class="ml-2 px-2 py-1 bg-orange-200 text-orange-800 rounded text-xs">cost: 3-high</span>
    <span class="ml-1 px-2 py-1 bg-yellow-200 text-yellow-800 rounded text-xs">semver: minor</span>
    <span class="ml-1 px-2 py-1 bg-blue-200 text-blue-800 rounded text-xs">type: feature</span>
  </div>
</div>

<div class="flex items-center gap-3">
  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
  <div class="flex-1">
    <span class="font-semibold">Crate signing</span>
    <span class="ml-2 px-2 py-1 bg-orange-200 text-orange-800 rounded text-xs">cost: 3-high</span>
    <span class="ml-1 px-2 py-1 bg-yellow-200 text-yellow-800 rounded text-xs">semver: minor</span>
    <span class="ml-1 px-2 py-1 bg-blue-200 text-blue-800 rounded text-xs">type: feature</span>
    <span class="ml-1 px-2 py-1 bg-yellow-200 text-yellow-800 rounded text-xs">type: security</span>
  </div>
</div>

<div class="flex items-center gap-3">
  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
  <div class="flex-1">
    <span class="font-semibold">pkg-config support</span>
    <span class="ml-2 px-2 py-1 bg-orange-200 text-orange-800 rounded text-xs">cost: 3-high</span>
    <span class="ml-1 px-2 py-1 bg-yellow-200 text-yellow-800 rounded text-xs">semver: minor</span>
    <span class="ml-1 px-2 py-1 bg-blue-200 text-blue-800 rounded text-xs">type: feature</span>
  </div>
</div>

</div>

---
layout: center
class: text-center
---

# Thanks for Your Interest

<div class="space-y-4 mt-8">

🔗 **https://github.com/alire-project**  
🌐 **https://alire.ada.dev**  
💬 **https://gitter.im/ada-lang/Alire**

<div class="mt-8">

**GitHub Contributors:**  
@mosteo (Alejandro R. Mosteo)  
@Fabien-Chouteau (Fabien Chouteau)

</div>

<div class="mt-8 text-sm text-gray-600">
Centro Universitario de la Defensa Zaragoza
</div>

</div>

---
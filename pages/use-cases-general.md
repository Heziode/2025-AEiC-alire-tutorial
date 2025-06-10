---
layout: center
class: text-center
---

# General Use Cases

<!--
Let's explore some common use cases for Alire.
-->

---
layout: default
---

# Crate Retrieval

Retrieve crate for learning/testing:

```bash
$ alr get umwi
```

<badge color="purple">2.0.0</badge> Nested report
```text
umwi=0.1.0 successfully retrieved.
ⓘ Found 2 nested crates in /private/tmp/umwi_0.1.0_34abe384:
   demo/demo=1.0.0: Demo of default and corner cases
   generator/generator=1.0.0: Generate the proper bodies based on Unicode spec
There are no dependencies.
```

Also works for `alr with`

<!--
One of the most basic operations is retrieving a crate for learning or testing.

You simply use `alr get` followed by the crate name.

What's new in version 2.0 is the nested report feature: Alire will now tell you if there are nested crates within the project you just downloaded.

In this example, the `umwi` crate contains two nested crates: a demo and a generator.

This also works with the `alr with` command when adding dependencies.
-->

---

# Crate Inspection


<badge color="purple">2.0.0</badge> Describe projects under current location

```bash
$ alr show --nested
```

```text
Found 80 nested crates in /home/user/prog:
...
wordle_ada/wordle=0.1.0: Wordle for the terminal
wordlist_ada/wordlist=0.1.3: An English word 
list
wordlist_ada/demo/demo=0.1.0-dev: Demo project
yeison/yeison=0.1.0-dev: A JSON-like data
structure using Ada 2022 features
```

<!--
Version 2.0 also introduced better project inspection capabilities.

You can use `alr show --nested` to discover all the crates in your current directory tree.

This is particularly useful when you're working in a large workspace with multiple projects.

As you can see in this example, it found 80 nested crates and gives you a nice overview of what's available.
-->

---

# Initialization

<badge color="purple">2.0.0</badge> Interactive initialization (optional):

```bash
$ alr init --bin myproject
```

```text
Enter a short description of the crate:
> Cool program
Select a software license for the crate?
1. MIT OR Apache-2.0 WITH LLVM-exception
9. Other...
Enter a comma (',') separated list of tags:
> cool,executable
myprogram initialized successfully.
```

<!--
Project initialization has become more user-friendly with interactive prompts.

When you run `alr init --bin myproject`, Alire will now ask you for a description, let you select a license from common options, and specify tags for your project.

This makes it much easier to get started with proper metadata from the beginning.
-->

---

# Edition

<badge color="purple">2.0.0</badge> Lets you pick editor the 1st time:

```bash
$ alr init --bin myprogram
$ cd myprogram
$ alr run
$ alr edit
```

```
Please select your prefered editor 
1. VS Code
2. GNAT studio
3. Other
```

<!--
Another nice quality-of-life improvement is editor selection.

The first time you use `alr edit`, Alire will ask you to choose your preferred editor:

- VS Code
- GNAT Studio

Or you can specify something else.
This preference is remembered for future use.

In theory, all editors that support the Language Server Protocol (LSP) should works with the Ada Language Server, this means it should works on JetBrains IDE, or VIM, Emacs, Zed Editor, etc.
-->

---

# Installation

<badge color="purple">2.0.0</badge> New command to build + gprinstall

```bash
$ alr install wordle
$ tree ~/.alire/
```

```
$HOME/.alire/ # default location
    bin/
    wordle
    share/
        wordlist/
            large.toml
            small.toml
            wordle.txt
```

Resources:

```bash
$ alr install gnatprove # binary crates too
$ alr install # installs current workspace crate
$ alr test # tests current workspace crate
```

<!--
Version 2.0 introduced a new `alr install` command that combines building with `gprinstall`.

This installs your crate into a standard location under your home directory.

You can install specific crates like `wordle` here, or even binary crates like `gnatprove`.

You can also install the current workspace crate, and there's a corresponding `alr test` command for testing.

The `alr test` command is to try the compilation of some or all releases of a crate.
-->

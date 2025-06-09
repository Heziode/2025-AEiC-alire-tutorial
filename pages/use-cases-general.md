---
layout: center
class: text-center
---

# General Use Cases

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

---
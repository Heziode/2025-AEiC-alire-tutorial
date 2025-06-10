---
layout: center
class: text-center
---

# Dependency-related

<!--
Let's look at the dependency management improvements.
-->

---
layout: default
---

# Finding Libraries

<badge color="purple">2.0.0</badge> Enhanced default search with match identification:

```bash
$ alr search emoji
```

```text
NAME       VERSION  DESCRIPTION                                    MATCHES
emojis     1.0.1    A library to replace names between colons     Description, Name, Tag,
                    with emojis                                    Website
keypadder  0.3.0    Programmable virtual keypad for your Linux    Long_Description
                    desktop
umwi       0.1.0    Unicode Monospace Width Information           Tag
```

<!--
The search functionality has been enhanced significantly in version 2.1.

When you search for libraries, you now get a detailed breakdown of where the matches were found, whether in the description, name, tags, or website.

This makes it much easier to find what you're looking for when you have partial information.

In version 1.0 it only searching in name and short description.
-->

---

# Finding Dependents <badge color="purple">2.0.0</badge> 

```bash
$ alr show ada_toml --dependents[=direct]
# Direct dependents
```

```text
CRATE     VERSION  DEPENDENCY 
clic      0.2.1    ~0.2.0|~0.3.0 
wordlist  0.1.3    ~0.3.0
```

```bash
$ alr show ada_toml --dependents=shortest
# Shortest dependency path for every dependent
```

```
CRATE     VERSION  DEPENDENCY  CHAIN 
clic      0.2.1    ~0.2.0|~0.3.0    clic=0.2.1»ada_toml=0.3.0
wordle    0.1.1    ~0.3.0           wordle=0.1.1»wordlist=0.1.3»ada_toml=0.3.0
wordlist  0.1.3    ~0.3.0           wordlist=0.1.3»ada_toml=0.3.0
```

```bash
$ alr show ada_toml --dependents=all
# Every dependency path for every dependent
```

<!--
A really powerful new feature is the ability to find dependents of a crate.

You can see direct dependents with `alr show --dependents=direct`, find the shortest dependency path to every dependent, or get a complete view of all dependency paths.

This is incredibly useful for understanding the impact of changes to your crate and for discovering who's using your code.
-->

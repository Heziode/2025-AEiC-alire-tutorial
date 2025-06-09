---
layout: center
class: text-center
---

# Dependency-related

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

---
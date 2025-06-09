---
layout: center
class: text-center
---

# Publishing

---
layout: default
---

# Publishing


<badge color="purple">2.0.0</badge> Complete command-line workflow (→ automatable)

```bash
$ export GH_TOKEN=... # GitHub Personal Access Token
$ alr publish
```

```text
...
Pull request created successfully
Visit https://github.com/alire-project/alire-index/pull/840 for details
The submission is in draft mode. 
Please request a review once automated checks 
have succeeded.
```
---

# Publishing Status

```bash
$ alr publish --status
```

```text
PR REFERENCE                     STATUS           URL 
8  mosteo:release/umwi-2.0.0     Checks_Ongoing   https://github.com/alire-project/alire-index/pull/8
5  mosteo:release/dashera-0.15.1 Checks_Failed    https://github.com/alire-project/alire-index/pull/5
2  mosteo:release/rxada-0.1.2    Checks_Passed    https://github.com/alire-project/alire-index/pull/2
```

Arguments:

```bash
$ alr publish --request-review=2
$ alr publish --cancel=5 --reason="Obsolete"
```

---
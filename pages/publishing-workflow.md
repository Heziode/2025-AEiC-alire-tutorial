---
layout: center
class: text-center
---

# Publishing

<!--
Now let's talk about the publishing workflow, which has been completely overhauled.
-->

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

<!--
The big news is that we now have a complete command-line workflow for publishing, which means it's fully automatable.

You just need to set your GitHub personal access token and run `alr publish`.

Alire will create a pull request for you automatically and even puts it in draft mode initially, so you can review the automated checks before requesting a review.
-->

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

<!--
You can track the status of your submissions with `alr publish --status`.

This shows you all your pending pull requests, their current status, whether checks are ongoing, failed, or passed, and direct links to the GitHub pull requests.

You can also interact with them directly from the command line: request a review or cancel a submission with a reason.
-->

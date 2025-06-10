---
layout: center
class: text-center
---

# Ecosystem

<!--
Now let's look at the current state of the Alire ecosystem.
-->

---
layout: default
---

# Crates

<StatsDisplay
  class="mt-12"
  :stats="[
    { value: 550, label: 'Crates', valueClass: 'bg-linear-to-r from-slate-500 dark:from-slate-400 to-slate-700 dark:to-slate-100 bg-clip-text text-transparent' },
    { value: 134, label: 'Authors', valueClass: 'bg-linear-to-r from-slate-500 dark:from-slate-400 to-slate-700 dark:to-slate-100 bg-clip-text text-transparent' },
    { value: '1,393', label: 'Releases', valueClass: 'bg-linear-to-r from-slate-500 dark:from-slate-400 to-slate-700 dark:to-slate-100 bg-clip-text text-transparent' }
  ]"
/>

<StatsDisplay
  class="my-6"
  valueClass="text-2xl md:text-4xl font-bold"
  :stats="[
    { value: 107, label: 'Embedded', valueClass: 'bg-linear-to-r from-slate-500 dark:from-slate-400 to-slate-700 dark:to-slate-100 bg-clip-text text-transparent' },
    { value: 18, label: 'SPARK', valueClass: 'bg-linear-to-r from-slate-500 dark:from-slate-400 to-slate-700 dark:to-slate-100 bg-clip-text text-transparent' },
  ]"
/>

**Top 10 tags:** <Badge color="none" class="custom-tag-style">embedded: <span class="!font-normal">107</span></Badge> <Badge color="none" class="custom-tag-style">nostd: <span class="!font-normal">33</span></Badge> <Badge color="none" class="custom-tag-style">a0b: <span class="!font-normal">32</span></Badge> <Badge color="none" class="custom-tag-style">web: <span class="!font-normal">29</span></Badge> <Badge color="none" class="custom-tag-style">database: <span class="!font-normal">18</span></Badge> <Badge color="none" class="custom-tag-style">linux: <span class="!font-normal">18</span></Badge> <Badge color="none" class="custom-tag-style">spark: <span class="!font-normal">18</span></Badge> <Badge color="none" class="custom-tag-style">game: <span class="!font-normal">18</span></Badge> <Badge color="none" class="custom-tag-style">stm32: <span class="!font-normal">16</span></Badge> <Badge color="none" class="custom-tag-style">graphics: <span class="!font-normal">15</span></Badge>

**Almost 139k downloads:** https://hanadigital.github.io/grev/?user=alire-project&repo=alire

<!--
We currently have 550 crates in the index, contributed by 134 different authors, with more than 1,4k releases.

The ecosystem has a strong focus on embedded development.
We have 107 crates tagged as `embedded`, and 18 specifically for `SPARK`.

Looking at the most popular tags, you can see that `embedded` leads with 107 crates, followed by `nostd` with 33, and `a0b`, that's an Ada embedded framework with 32 crates.

We also have good multiples crates in web development, databases, and gaming. The ecosystem has seen more than 140,000 downloads total, which you can track at the GitHub repository statistics.
-->

---

# New Platforms

## **Tested**
- **Homebrew/MacPorts on macOS** (Simon Wright)
  - x86_64 arch

## **Untested** (no GH workflow runs)  
- **SUSE/openSUSE/zypper** (John Serock)
  - Docker image needed
- **FreeBSD** (Stephane Carrez)

<!--
We've also expanded platform support.

Platform support has been added for Homebrew and MacPorts on macOS, specifically for x86_64 architecture, with contributions that were provided by the late Simon Wright.

Untested support, meaning continuous integration workflows haven't been established for them yet, has been added for SUSE and openSUSE with zypper package manager, contributed by John Serock, and FreeBSD support thanks to Stephane Carrez.
-->

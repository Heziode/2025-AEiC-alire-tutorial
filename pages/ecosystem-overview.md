---
layout: center
class: text-center
---

# Ecosystem

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

---

# New Platforms

## **Tested**
- **Homebrew/MacPorts on macOS** (Simon Wright)
  - x86_64 arch

## **Untested** (no GH workflow runs)  
- **SUSE/openSUSE/zypper** (John Serock)
  - Docker image needed
- **FreeBSD** (Stephane Carrez)

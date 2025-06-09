---
layout: default
---

# Package Managers

<div class="grid grid-cols-3 gap-4 items-center mt-8">
  <div class="text-center">
    <img class="h-20 mx-auto my-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" />
    <p class="text-lg mt-2">npm (JavaScript)</p>
  </div>
  <div class="text-center">
    <img class="h-20 mx-auto my-2" src="/images/python.svg" />
    <p class="text-lg mt-2">pip (Python)</p>
  </div>
  <div class="text-center">
    <img class="h-20 mx-auto my-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg" />
    <p class="text-lg mt-2">Gradle (Java)</p>
  </div>
  <div class="text-center">
    <img class="h-20 mx-auto my-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuget/nuget-original.svg" />
    <p class="text-lg mt-2">NuGet (.NET)</p>
  </div>
  <div class="text-center">
    <img class="h-20 mx-auto my-2" src="https://crates.io/assets/cargo.png" />
    <p class="text-lg mt-2">Cargo (Rust)</p>
  </div>
  <div class="text-center">
    <img class="h-20 mx-auto my-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/composer/composer-original.svg" />
    <p class="text-lg mt-2">Composer (PHP)</p>
  </div>
</div>

---
layout: default
---

# Package Manager Taxonomy

<div class="mt-16 text-center text-2xl">

<ul class="!list-none">
<li><strong>System</strong> vs <strong class="text-blue-400">User</strong></li>
<li><strong>Platform</strong> vs <strong class="text-blue-400">Language</strong></li>
<li><strong>Binary</strong> vs <strong class="text-blue-400">Source</strong></li>
<li><strong>Official</strong> vs <strong class="text-blue-400">Community</strong></li>
</ul>

</div>

<!-- 

<p class="text-sm opacity-80">Alire is designed for regular users (not system administrators),<br>tailored specifically to the Ada/SPARK language ecosystem,<br>primarily deals with source distribution, and<br>is a community-driven project rather than an official Ada standard.</p>

-->

---

# Alire - <span class="font-bold">A</span>da <span class="font-bold">Li</span>brary <span class="font-bold">Re</span>pository

<div class="grid grid-cols-2 gap-8 mt-6">
  <div>
    <h3 class="text-2xl font-bold">Alire (Project)</h3>
    <p>The project as a whole.</p>
    <h3 class="text-xl font-bold mt-4">Community Index</h3>
    <ul class="!list-disc list-inside">
      <li>Available packages</li>
      <li>Packages ⇒ "crates"</li>
    </ul>
  </div>
  <div>
    <h3 class="text-2xl font-bold">alr (CLI Tool)</h3>
    <p>Command-line tool.</p>
    <ul class="!list-disc list-inside">
      <li>Dependency solver</li>
      <li>Source downloading</li>
      <li>Building</li>
    </ul>
  </div>
</div>

<div class="mt-8">
  <a href="https://github.com/alire-project" class="text-center" target="_blank">
    <qrcode-vue value="https://github.com/alire-project" :size="128" class="rounded-xl text-center m-auto" :margin="4" level="H" render-as="svg" />
    <p class="text-sm !mt-0 opacity-80">https://github.com/alire-project</p>
  </a>
</div>

---
layout: center
---

# Timeline

<Timeline :click="false" :items="[
  {
    time: 'Feb 2016',
    title: 'First repository & discussions',
    description: 'Seeds sown at Ada-Europe 2016'
  },
  {
    time: 'June 2018',
    title: 'Presentation at Ada-Europe 2018'
  },
  {
    time: 'Apr 2019',
    title: 'AdaCore sponsorship'
  },
  {
    time: 'Aug 2019',
    title: 'Website goes live'
  },
  {
    time: 'Nov 2019',
    title: 'Internal beta'
  },
  {
    time: 'Feb 2021',
    title: 'v1.0'
  },
  {
    time: 'Sep 2021',
    title: 'v1.1'
  },
  {
    time: 'May 2022',
    title: 'v1.2'
  },
  {
    time: 'Jun 2022',
    title: 'First tutorial'
  },
  {
    time: 'Mar 2024',
    title: 'v2.0'
  },
  {
    time: 'Mar 2025',
    title: 'v2.1'
  }
]" />

---
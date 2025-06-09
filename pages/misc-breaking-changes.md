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

# Format output <badge color="purple">2.1.0</badge>

- **New `--format` global switch to produce structured output**
  - Produces JSON, TOML or YAML output with commands like `index`, `search`, `show`
  - Example:
  ```bash
  $ alr --format=toml search --crates hello
  [[data]]
  description = "'Hello, world!' demonstration project"
  name = "hello"
  [[data]]
  description = "Basic library demonstration project"
  name = "libhello"
  ```

For more details about new features, see [user-changes documentation](https://github.com/alire-project/alire/blob/master/doc/user-changes.md)

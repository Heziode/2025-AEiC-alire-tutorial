---
layout: center
class: text-center
---

# Miscellanea

<!--
Let's cover some additional improvements and changes.
-->

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

<!--
We've made several improvements to how indexes are handled.

Indexes are now loaded on demand and piecemeal, which decreases latency for many commands.

The community index is refreshed automatically once a day, though it asks for permission on first refresh.

And indexes can now be accessed over SSH with Git, thanks to contributions from Daly Brown and Rowal Walshe.
-->

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

<!--
There are some breaking changes to be aware of.

Unicode is now enabled by default with the `-gnatW8` switch, meaning UTF-8 encoded sources are created and expected.

Cache locations have changed, so you'll need to manually clean up the old `~/.config/alire/` directory.

And toolchain export has been moved from `alr toolchain` to `alr install` - the old install/uninstall/install-dir switches are gone.
-->

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

<!--
Looking ahead to version 2.1, we're introducing a new `--format` global switch that produces structured output in JSON, TOML, or YAML format.

This works with commands like `index`, `search`, and `show`, making Alire much more scriptable and integration-friendly.
-->

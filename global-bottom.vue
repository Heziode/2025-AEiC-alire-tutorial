<template>
    <footer
      v-if="!['cover', 'end'].includes($slidev.nav.currentLayout)"
      class="absolute bottom-0 text-xs text-gray-500 dark:text-gray-400 right-0 p-2"
    >
      {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
    </footer>
  </template>
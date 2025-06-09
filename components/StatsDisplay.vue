<script setup lang="ts">
defineProps({
  stats: {
    type: Array,
    required: true,
    // Each stat should have a value and a label
    // e.g. [{ value: 550, label: 'Crates' }, ...]
  },
  valueClass: {
    type: String,
    default: 'text-4xl md:text-6xl font-bold'
  },
  labelClass: {
    type: String,
    default: 'mt-1'
  }
})
</script>

<template>
  <div class="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-20">
    <div 
      v-for="(stat, index) in stats" 
      :key="index" 
      class="flex flex-col items-center justify-center"
    >
      <div :class="[valueClass, stat.valueClass]">
        {{ stat.value }}
      </div>
      <div :class="[labelClass, stat.labelClass]">
        {{ stat.label }}
      </div>
    </div>
  </div>
</template>

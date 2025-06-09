<script setup>
defineProps({
  title: {
    type: String,
    default: 'Task'
  },
  icon: {
    type: String,
    default: '📝'
  },
  color: {
    type: String,
    default: 'blue'
  },
  variant: {
    type: String,
    default: 'default' // options: default, compact, minimal
  }
});

const colorClasses = {
  blue: 'border-blue-500 dark:border-blue-700',
  green: 'border-green-500 dark:border-green-700',
  red: 'border-red-500 dark:border-red-700',
  yellow: 'border-yellow-500 dark:border-yellow-700',
  purple: 'border-purple-500 dark:border-purple-700'
};

const titleColorClasses = {
  blue: 'text-blue-600 dark:text-blue-400',
  green: 'text-green-600 dark:text-green-400',
  red: 'text-red-600 dark:text-red-400',
  yellow: 'text-yellow-600 dark:text-yellow-400',
  purple: 'text-purple-600 dark:text-purple-400'
};

const variantClasses = {
  default: 'p-4 rounded-lg border border-l-4',
  compact: 'p-3 rounded-lg border border-l-3',
  minimal: 'pl-3 border-l-3'
};
</script>

<template>
  <div class="flex my-4" :class="[colorClasses[color], variantClasses[variant]]">
    <div class="text-xl mr-3" :class="titleColorClasses[color]" v-if="icon">{{ icon }}</div>
    <div class="flex-1">
      <div v-if="title && variant !== 'minimal'" class="font-bold mb-1 text-sm" :class="titleColorClasses[color]">{{ title }}</div>
      <div class="leading-relaxed"><slot /></div>
    </div>
  </div>
</template>

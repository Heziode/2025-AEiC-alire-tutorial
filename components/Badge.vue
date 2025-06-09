<template>
  <span :class="[
    'text-xs font-medium px-2.5 py-0.5 rounded-sm border',
    colorClasses
  ]">
    <slot></slot>
  </span>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  color: {
    type: String,
    default: 'blue',
    validator: (value) => [
      'none', 'blue', 'gray', 'red', 'green', 'yellow', 'indigo', 'purple', 'pink', 'cyan'
    ].includes(value)
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'outline'].includes(value)
  },
  size: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'sm', 'lg'].includes(value)
  }
});

const colorClasses = computed(() => {
  const colors = {
    none: '',
    blue: 'bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-400 border-blue-400',
    gray: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400 border-gray-500',
    slate: 'bg-slate-100 text-slate-800 dark:bg-gray-700 dark:text-slate-400 border-slate-500',
    red: 'bg-red-100 text-red-800 dark:bg-gray-700 dark:text-red-400 border-red-400',
    green: 'bg-green-100 text-green-800 dark:bg-gray-700 dark:text-green-400 border-green-400',
    yellow: 'bg-yellow-100 text-yellow-800 dark:bg-gray-700 dark:text-yellow-300 border-yellow-300',
    indigo: 'bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-400 border-indigo-400',
    purple: 'bg-purple-100 text-purple-800 dark:bg-gray-700 dark:text-purple-400 border-purple-400',
    pink: 'bg-pink-100 text-pink-800 dark:bg-gray-700 dark:text-pink-400 border-pink-400',
    cyan: 'bg-cyan-100 text-cyan-800 dark:bg-gray-700 dark:text-cyan-400 border-cyan-400'
  };

  return colors[props.color] || colors.blue;
});
</script>

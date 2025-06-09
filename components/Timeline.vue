<template>
    <ol :class="[
      'relative ml-10', 
      borderClass, 
      customClasses.container
    ]">
      <li v-for="(item, index) in items" :key="index" v-click="click" :class="[
        index !== items.length - 1 ? timelineItemBottomMargin : '',
        'ms-4 list-none timeline-item',
        customClasses.item
      ]">
        <div :class="[
          'absolute w-3 h-3 rounded-full mt-1.5 -start-1.8 border border-2',
          item.dotClass || defaultDotClass,
          customClasses.dot
        ]"></div>
        
        <time v-if="item.time" :class="[
          'text-sm font-normal leading-none absolute -left-20 mt-1',
          item.timeClass || defaultTimeClass,
          customClasses.time
        ]">{{ item.time }}</time>
        
        <h3 v-if="item.title" :class="[
          '!text-lg !font-semibold',
          item.titleClass || defaultTitleClass,
          customClasses.title
        ]">{{ item.title }}</h3>
        
        <p v-if="item.description" :class="[
          'text-base font-normal !mt-1',
          item.descriptionClass || defaultDescriptionClass,
          customClasses.description
        ]">{{ item.description }}</p>
        
        <a 
          v-if="item.link" 
          :href="item.link.url || '#'" 
          :class="[
            'inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg',
            item.link.class || defaultLinkClass,
            customClasses.link
          ]"
        >
          {{ item.link.text }}
          <svg 
            v-if="item.link.showArrow !== false" 
            class="w-3 h-3 ms-2 rtl:rotate-180" 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 14 10"
          >
            <path 
              stroke="currentColor" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </li>
    </ol>
  </template>
  
  <script setup>
  import { defineProps, computed } from 'vue';
  
  const props = defineProps({
    // Main content items
    items: {
      type: Array,
      required: true,
      /* Expected format for each item:
        {
          time: String,
          title: String,
          description: String,
          link: {
            text: String,
            url: String,
            showArrow: Boolean,
            class: String (optional)
          },
          // Optional custom classes for each element
          dotClass: String,
          timeClass: String,
          titleClass: String,
          descriptionClass: String
        }
      */
    },

    click: {
        type: Boolean,
        default: false
    },
    
    // Theme options
    theme: {
      type: String,
      default: 'light', // 'light' or 'dark'
      validator: (value) => ['light', 'dark'].includes(value)
    },
    
    // Spacing between timeline items
    itemSpacing: {
      type: String,
      default: 'mb-2'
    },
    
    // Border options
    border: {
      type: Boolean,
      default: true
    },
    
    borderColor: {
      type: String,
      default: null // Will use default colors if null
    },
    
    // Default element classes (can be overridden)
    defaultDotClass: {
      type: String,
      default: null // Will use theme defaults if null
    },
    
    defaultTimeClass: {
      type: String,
      default: null // Will use theme defaults if null
    },
    
    defaultTitleClass: {
      type: String,
      default: null // Will use theme defaults if null
    },
    
    defaultDescriptionClass: {
      type: String,
      default: null // Will use theme defaults if null
    },
    
    defaultLinkClass: {
      type: String,
      default: null // Will use theme defaults if null
    },
    
    // Custom classes object for additional styling
    customClasses: {
      type: Object,
      default: () => ({
        container: '',
        item: '',
        dot: '',
        time: '',
        title: '',
        description: '',
        link: ''
      })
    }
  });
  
  // Computed values based on theme and props
  const timelineItemBottomMargin = computed(() => props.itemSpacing);
  
  const borderClass = computed(() => {
    if (!props.border) return '';
    
    if (props.borderColor) {
      return `border-s ${props.borderColor}`;
    }
    
    return 'border-s-2 border-gray-700 dark:border-white';
  });
  
  // Default classes based on the selected theme
  const defaultDotClass = computed(() => {
    if (props.defaultDotClass) return props.defaultDotClass;
    
    return 'bg-white dark:bg-gray-900 border-gray-700 dark:border-white';
  });
  
  const defaultTimeClass = computed(() => {
    if (props.defaultTimeClass) return props.defaultTimeClass;
    
    return 'text-gray-500 dark:text-gray-400';
  });
  
  const defaultTitleClass = computed(() => {
    if (props.defaultTitleClass) return props.defaultTitleClass;
    
    return 'text-gray-900 dark:text-white';
  });
  
  const defaultDescriptionClass = computed(() => {
    if (props.defaultDescriptionClass) return props.defaultDescriptionClass;
    
    return 'text-gray-500 dark:text-gray-400';
  });
  
  const defaultLinkClass = computed(() => {
    if (props.defaultLinkClass) return props.defaultLinkClass;
    
    return 'text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700';
  });
  </script>

  <style scoped>
    .slidev-vclick-hidden.timeline-item {
      display: none;
    }
  </style>
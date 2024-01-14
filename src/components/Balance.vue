<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h4>Your Balance</h4>
  <h1 id="balance">$ {{ props.totalBalance }}</h1>
</template>

<script setup lang="ts">
const props = defineProps({
  totalBalance: {
    defaultValue: 0,
    type: Number,
    required: true
  }
})
</script>

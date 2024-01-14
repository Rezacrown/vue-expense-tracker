<template>
  <h3>History</h3>
  <ul id="list" class="list" v-if="props.transactions.length > 0">
    <li
      v-for="transaction in props.transactions"
      :key="transaction.id"
      :class="transaction.ammount < 0 ? 'minus' : 'plus'"
    >
      {{ transaction.name }}
      <span>$ {{ transaction.ammount }}</span>
      <button class="delete-btn" @click="handleDelete(transaction.id)">x</button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps({
  transactions: {
    default: [],
    required: true,
    type: [] as any[]
  }
})

const emit = defineEmits(['removeTransaction'])

const handleDelete = (id: any) => {
  emit('removeTransaction', id)
}
</script>

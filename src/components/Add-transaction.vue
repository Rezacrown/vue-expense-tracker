<template>
  <h3>Add new transaction</h3>
  <form id="form" @submit.prevent="handleSubmit">
    <div class="form-control">
      <label for="text">Text</label>
      <input v-model="name" type="text" id="text" placeholder="Enter text..." />
    </div>
    <div class="form-control">
      <label for="amount"
        >Amount <br />
        (negative - expense, positive - income)</label
      >
      <input v-model="ammount" type="number" id="amount" placeholder="Enter amount..." />
    </div>
    <button class="btn" type="submit">Add transaction</button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
const emit = defineEmits(['transactionSubmit'])

const toast = useToast()

const name = ref('')
const ammount = ref('')

const handleSubmit = () => {
  if (!name.value || !ammount.value) {
    toast.error('Both Input Required Filled')
  } else {
    const transactionData = {
      name: name.value,
      ammount: parseFloat(ammount.value)
    }

    emit('transactionSubmit', transactionData)

    name.value = ''
    ammount.value = ''
  }
}
</script>

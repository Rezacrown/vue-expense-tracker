<template>
  <HeaderApp />

  <div class="container">
    <Balance :total-balance="total" />

    <IncomeExpense :income="+income" :expense="-expense" />

    <TransactionList :transactions="transactions" @remove-transaction="handleDeleteTransaction" />

    <AddTransaction @transaction-submit="handleAddTransaction" />
  </div>
</template>

<script setup lang="ts">
import HeaderApp from './components/Header.vue'
import Balance from './components/Balance.vue'
import IncomeExpense from './components/Income-expense.vue'
import TransactionList from './components/Transaction-list.vue'
import AddTransaction from './components/Add-transaction.vue'

import { generateUniqueId } from '@/utils/generateId'

import { computed, ref, onMounted } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()

const transactions = ref<
  {
    id: any
    name: string
    ammount: 0
  }[]
>([])

// get total balance
const total = computed(() => {
  return transactions.value.reduce((acc, curr) => acc + curr.ammount, 0)
})

onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem('transactions')!)

  if (savedTransactions) {
    transactions.value = savedTransactions
  }
})

// get income
const income = computed(() => {
  return transactions.value
    .filter((income) => income.ammount > 0)
    .reduce((acc, curr) => acc + curr.ammount, 0)
})

// get expense
const expense = computed(() => {
  return transactions.value
    .filter((expense) => expense.ammount < 0)
    .reduce((acc, curr) => acc + curr.ammount, 0)
})

// add transaction
const handleAddTransaction = (data: any) => {
  transactions.value.push({
    id: generateUniqueId(),
    name: data.name,
    ammount: data.ammount
  })
  saveTransactionsToLocalStorage()
  toast.success('success add Transaction')
}

// remove transaction
const handleDeleteTransaction = (id: any) => {
  transactions.value = transactions.value.filter((value) => value.id != id)
  saveTransactionsToLocalStorage()
  toast.success('success remove Transaction')
}

// Save transactions to local storage
const saveTransactionsToLocalStorage = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value))
}
</script>

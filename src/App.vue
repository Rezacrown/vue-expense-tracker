<script setup lang="ts">
import HeaderApp from './components/Header.vue'
import Balance from './components/Balance.vue'
import IncomeExpense from './components/Income-expense.vue'
import TransactionList from './components/Transaction-list.vue'
import AddTransaction from './components/Add-transaction.vue'
</script>

<template>
  <HeaderApp />

  <div class="container">
    <Balance />
    <IncomeExpense />
    <TransactionList />
    <AddTransaction />3
  </div>
</template>

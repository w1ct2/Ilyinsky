<template>
  <router-view/>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/MainStore'
const mainStore = useMainStore()
</script>

<style lang="scss">
</style>

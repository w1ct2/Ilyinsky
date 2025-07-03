<template>
  <router-view/>
  <div>{{ mainStore.test }} <br> fkkfkfkf</div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/MainStore'
const mainStore = useMainStore()
</script>

<style lang="scss">
</style>

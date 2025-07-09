<template>
  <router-view/>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore'
const mainStore = useMainStore()
</script>

<style lang="scss" scoped>
@function rem($pixels) {
    @return calc($pixels / 16) * 1rem;
}
</style>

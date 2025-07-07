<template>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore'
const mainStore = useMainStore()
</script>

<style lang="scss">
@function rem($pixels) {
    @return calc($pixels / 16) * 1rem;
}
</style>

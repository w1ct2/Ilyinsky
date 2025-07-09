<template>
    <div class="burger-menu" v-show="isActive">

    </div>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore'
const mainStore = useMainStore()

const props = defineProps({
    isActive: {
        type: Boolean,
        required: true
    }
})
</script>

<style lang="scss" scoped>
@function rem($pixels) {
    @return calc($pixels / 16) * 1rem;
}
.burger-menu {
    display: flex;
    position: fixed;
    background-color: #fff;
    z-index: 2;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
</style>

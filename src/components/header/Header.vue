<template>
    <header class="header">
        <HeaderMain></HeaderMain>
    </header>
</template>

<script setup>
import HeaderSpecialOffer from './HeaderSpecialOffer.vue';
import HeaderMain from './HeaderMain.vue';
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.header {
    z-index: 11;
    position: relative;
}
</style>
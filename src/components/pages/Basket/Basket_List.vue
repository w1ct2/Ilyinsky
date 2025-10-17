<template>
    <div class="basket-list">
        <div class="basket-list__header">
            <h1 class="basket-list__title catalog-title">корзина</h1>
            <button class="basket-list__clear-btn">Очистить</button>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.basket-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #6B6B6B;
        font-size: 14px;
        margin-bottom: rem(40);
    }
}
</style>
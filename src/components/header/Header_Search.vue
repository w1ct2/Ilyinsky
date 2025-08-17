<template>
    <div class="search">
        <input type="text" placeholder="Начать поиск" class="search__input">
        <img :src="search" class="search__img">
    </div>
</template>

<script setup>
import search from '@/assets/img/svg/search1.svg'
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.search {
    width: rem(315);
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    &__input {
        width: 100%;
        height: 100%;
        border: 1px solid #E1E1E1;
        border-radius: 16px;
        padding-left: 15px;
        padding-right: 40px;
        color: #6B6B6B;
    }
    &__img {
        position: absolute;
        right: 15px;
        transition: all .3s ease;
    }
    &:hover {
        .search__img {
            transform: rotate(-15deg) scale(1.2);
        }
    }
}
</style>
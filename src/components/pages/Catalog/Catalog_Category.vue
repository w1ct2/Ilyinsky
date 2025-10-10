<template>
    <div class="category">
        <h4 class="category__title">{{ title }}</h4>
        <ul class="category__list">
            <li 
                class="category__item"
                v-for="item in data"
                :key="item.id">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String
    },
    data: {
        type: Array
    }
})
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.category {
    color: #000;
    &__title {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: rem(10);
        cursor: pointer;
    }
    &__list {
        display: flex;
        flex-direction: column;
    }
    &__item {
        color: #000;
        font-size: 20px;
        font-weight: 300;
        margin-left: rem(25);
        height: rem(32);
        cursor: pointer;
    }
}
</style>
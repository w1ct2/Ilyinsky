<template>
    <div class="category">
        <h4 class="category__title">{{ title }}</h4>
        <ul class="category__list">
            <li 
                class="category__item"
                :style="{backgroundColor: category === item.category ? item.styles.backgroundColor : ''}"
                v-for="item in data"
                :key="item.id"
                @click="AllData.setCategory(item.category, item.name)">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script setup>
import { useAllData } from '@/store/AllData';
import { ref } from 'vue'
const AllData = useAllData()
const props = defineProps({
    title: {
        type: String
    },
    data: {
        type: Array
    },
    category: {
        type: String
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
        padding-left: rem(25);
        height: rem(32);
        cursor: pointer;
        overflow: hidden;
    }
}
</style>
<template>
    <div class="section-content">
        <RouterLink
            v-for="(item) in data"
            :key="item.id"
            class="section-content__item"
            :style="[item.styles]"
            :to="'catalog'"
            @click="AllData.setCategory(item.category, item.name)"
            >
            <h4 class="section-content__title">{{ item.name }}</h4>
        </RouterLink>
    </div>
</template>

<script setup>
import { useAllData } from '@/store/AllData';
import { RouterLink } from 'vue-router';
const AllData = useAllData()
const props = defineProps({
    data: {
        type: Array,
        required: true
    },
    styles: {
        type: Object,
    }
})
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.section-content {
    width: 100%;
    display: grid;
    gap: 25px;
    justify-content: space-between;
    grid-template-columns: repeat(4, 1fr);
    &__item {
        cursor: pointer;
        width: 100%; 
        aspect-ratio: 1 / 1;
        min-width: 0;
        border: 1px solid #000;
        border-radius: 58px;
        font-size: 30px;
        color: #000;
        padding: 45px 40px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: bottom right;
    }
    &__title {
        overflow: hidden;
    }
    @media (max-width: 1300px) {
        &__item {
            font-size: 26px;
            padding: 35px;
            border-radius: 50px;
        }
    }
    @media (max-width: 1000px) {
        &__item {
            font-size: 22px;
            padding: 30px;
            border-radius: 40px;
        }   
    }
    @media (max-width: 768px) {
        & {
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
        }
        &__item {
            font-size: 18px;
            padding: 20px;
            border-radius: 30px;
        }
    }
    @media (max-width: 480px) {
        &__item { 
            font-size: 12px;
            padding: 15px;
            border-radius: 20px;
        }
    }
}
</style>

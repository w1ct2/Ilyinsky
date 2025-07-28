<template>
    <div class="slide" :style="[data.styles]">
        <h4 class="slide__title">{{ data.title }}</h4>
        <article class="slide__article" v-if="data.article">{{ data.article }}</article>
    </div>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore'
const mainStore = useMainStore()
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.slide {
    max-width: rem(310);
    width: 100%;
    height: rem(450);
    border-radius: 30px;
    background-color: #FF594D;
    color: #fff;
    padding: 30px 35px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    &__title {
        font-size: 24px;
        font-weight: 600;
    }
    &__article {
        color: #000;
        background-color: #fff;
        border-radius: 40px;
        height: rem(40);
        font-weight: 600;
        padding: 0 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
    }
    @media (max-width: 1000px) {
        padding: 30px;
        &__title {
            font-size: 22px;
        }
    }
    @media (max-width: 768px) {
        padding: 25px;
        height: rem(390);
        border-radius: 25px;
        &__article {
            font-size: 14px;
            height: rem(35);
        }
        &__title {
            font-size: 20px;
        }
    }
    @media (max-width: 480px) {
        height: rem(320);
        &__article {
            font-size: 12px;
            height: rem(30);
        }
        &__title {
            font-size: 18px;
        }
    }
}
</style>

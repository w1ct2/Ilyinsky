<template>
    <div class="slide" :style="blockStyles">
        <h1 class="slide__title">{{ title }}</h1>
        <RouterLink class="slide__button" :to="'/catalog'">{{ button }}</RouterLink>
        <img :src="imgUrl" :style="imgStyles" class="slide__img">
    </div>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore'
const mainStore = useMainStore()
const props = defineProps({
    title: {
        type: String,
    },
    button: {
        type: String
    },
    blockStyles: {
        type: Object
    },
    imgUrl: {
        type: String
    },
    imgStyles: {
        type: Object
    }
})
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.slide {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    padding: 50px;
    flex-direction: column;
    justify-content: end;
    border-radius: 21px;
    gap: 25px;
    &__title {
        max-width: rem(480);
        color: #ffffff;
        font-size: 50px;
        font-weight: 700;
        z-index: 2;
    }
    &__button {
        border-radius: 30px;
        height: rem(55);
        width: auto;
        max-width: rem(300);
        padding: 0 20px;
        font-size: 22px;
        font-weight: 600;
        border: 1px solid #ffff;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 2;
    }
    &__img {
        position: absolute;
        right: 0;
        bottom: 0;
    }
    @media (max-width: 1000px) {
        &__title {
            font-size: 32px;
            max-width: rem(400);
            min-height: rem(140);
        }
        &__button {
            font-size: 18px;
        }
    }
    @media (max-width: 768px) {
        & {
            padding: 33px;
        }
        &__title {
            font-size: 25px;
            max-width: rem(240);
            min-height: 0;
        }
        &__button {
            font-size: 14px;
            width: rem(200);
            height: auto;
            padding: rem(10);
        }
    }
    @media (max-width: 480px) {
        & {
            padding: 15px;
        }
        &__title {
            font-size: 18px;
            line-height: 1.2;
            max-width: rem(180);
        }
        &__button {
            font-size: 12px;
            width: fit-content;
            height: rem(30);
        }
    }
}
</style>

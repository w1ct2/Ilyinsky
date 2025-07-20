<template>
    <div class="panorama-item" :style="titleStyles">
        <h3 class="panorama-item__title" v-html="title"></h3>
        <img :src="imgUrl" class="panorama-item__img" :style="imgStyles">
    </div>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore'
const mainStore = useMainStore()
const props = defineProps({
    title: {
        type: String,
    },
    imgUrl: {
        type: String
    },
    imgStyles: {
        Object
    },
    titleStyles: {
        type: Object
    }
})
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.panorama-item {
    width: 100%;
    height: 100%;
    max-height: rem(280);
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 25px;
    border-radius: 26px;
    position: relative;
    &__title {
        font-weight: 700;
        z-index: 2;
        font-size: 28px;
    }
    &__img {
        position: absolute;
        max-width: 100%;
    }
    @media (max-width: 768px) {
        &__title {
            font-size: 18px;
        }
    }
    @media (max-width: 480px) {
        & {
            padding: 10px;
            border-radius: 10px;
            &__title {
                font-size: 12px;
            }
        }
    }
}
</style>

<template>
    <section class="promotions-content">
        <div class="container">
            <div class="promotions-content__inner">
                <h2 class="promotions-content__title catalog-title">{{ title }}</h2>
                <div class="promotions-content__container">
                    <Promotions_ContentItem 
                        v-for="(item, index) in data"
                        :data="item">
                    </Promotions_ContentItem>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore'
import Promotions_ContentItem from './Promotions_Content-Item.vue';
const mainStore = useMainStore()
const props = defineProps({
    title: {
        type: String, 
        required: true,
        default: "скидки" 
    },
    data: {
        type: Array,
        required: true
    }
})
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.promotions-content {
    margin-top: rem(55);
    margin-bottom: rem(140);
    &__inner {
        display: flex;
        flex-direction: column;
        gap: rem(50);
    }
    &__container {
        display: grid;
        row-gap: rem(40);
        column-gap: rem(25);
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
    }
}
</style>

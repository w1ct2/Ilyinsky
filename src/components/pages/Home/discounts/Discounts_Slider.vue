<template>
    <div class="discounts">
        <div class="discounts-header">
            <h2 class="discounts-header__title catalog-title">скидки</h2>
            <button class="discounts-header__button catalog-button">Смотреть все</button>
            <div class="discounts-header__navigation catalog-navigation">
                <div class="prevButton"></div>
                <div class="nextButton"></div>
            </div>
        </div>
        <div class="discounts-slider">
            <swiper
                class="discounts-slider__wrapper"
                :loop="true"
                :space-between="25"
                :slides-per-view="4"
                :modules="modules"
                :navigation="{
                    nextEl: '.nextButton',
                    prevEl: '.prevButton'
                }">
                <swiper-slide 
                    class="iscounts-slider__item"
                    v-for="(card, index) in data"
                    :key="card.id"
                >
                    <Discounts_SliderItem :indexCard="index"></Discounts_SliderItem>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import Discounts_SliderItem from './Discounts_Slider-Item.vue';
import 'swiper/css';
const modules = [Navigation];
const mainStore = useMainStore()
const data = mainStore.discounts
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.discounts-header {
    width: 100%;
    height: rem(50);
    display: flex;
    gap: 30px;
    align-items: center;
    color: #000000;
}
.discounts-slider {
    width: 100%;
    max-height: rem(400);
    height: 100%;
    margin-top: rem(35);
    &__wrapper {
        display: flex;
        justify-content: space-between;
    }
    &__item {
        min-width: 0;
        width: 100% !important;
        min-height: 0;
    }
}
</style>

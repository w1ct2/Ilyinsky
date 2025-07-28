<template>
    <div class="promotions">
        <div class="promotions-header">
            <h2 class="catalog-title">акции</h2>
            <button class="catalog-button">Смотреть все</button>
            <div class="catalog-navigation">
                <div class="prevButton"></div>
                <div class="nextButton"></div>
            </div>
        </div>
        <swiper
            class="promotions-slider__wrapper"
            :loop="true"
            :space-between="15"
            :slides-per-view="slidesPerView"
            :modules="modules"
            :navigation="{
                nextEl: '.nextButton',
                prevEl: '.prevButton'
            }">
            <swiper-slide 
                class="promotions-slider__item"
                v-for="(card, index) in data"
                :key="card.id"
            >
                <Promotions_SliderItem :data="card"></Promotions_SliderItem>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import Promotions_SliderItem from './Promotions_Slider-Item.vue';
import { onBeforeUnmount, onMounted, ref } from 'vue';
const modules = [Navigation]
const mainStore = useMainStore()
const data = mainStore.promotions

const {width} = mainStore
const slidesPerView = ref(4)
const updateSlides = ()=>{
    if (width <= 480) {
        slidesPerView.value = 1.5
    } 
    else if (width <= 768) {
        slidesPerView.value = 2.5
    } 
    else if (width <= 1000) {
        slidesPerView.value = 3
    }
    else {
        slidesPerView.value = 4
    }
}
onMounted(()=>{
    updateSlides()
    window.addEventListener('resize', updateSlides)
})
onBeforeUnmount(() => {
    window.removeEventListener('resize', updateSlides)
})
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.promotions-header {
    width: 100%;
    height: rem(50);
    display: flex;
    gap: 30px;
    align-items: center;
    color: #000000;
    margin-bottom: 45px;
}
.promotions-slider {
    width: 100%;
    max-height: rem(400);
    height: 100%;
    margin-top: rem(35);
    &__wrapper {
        display: flex;
        justify-content: space-between;
    }
}
@media (max-width: 480px) {
    .promotions-header {
        margin-bottom: 25px;
    }
    .catalog-navigation {
        display: none;
    }
}
</style>

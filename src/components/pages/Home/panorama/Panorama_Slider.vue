<template>
    <div class="panorama-slider__wrapper">
        <swiper
            class="panorama-slider"
            :slides-per-view="1"
            :space-between="20"
            :modules="modules"
            :navigation="{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }"
        >
            <swiper-slide class="panorama-slider__item"><Panorama_SliderItem 
                :title="'Начните день с вкусной выпечи из нашей кулинарии'" 
                :button="'Перейти к покупкам'" 
                :imgUrl="imgBackground"
                :blockStyles="blockStyles"
                :imgStyles="imgStyles"></Panorama_SliderItem>
            </swiper-slide>
            <swiper-slide class="panorama-slider__item"><Panorama_SliderItem 
                :title="'Начните день с вкусной выпечи из нашей кулинарии'" 
                :button="'Перейти к покупкам'" 
                :imgUrl="imgBackground"
                :blockStyles="blockStyles"
                :imgStyles="imgStyles"></Panorama_SliderItem>
            </swiper-slide>
            <swiper-slide class="panorama-slider__item"><Panorama_SliderItem 
                :title="'Начните день с вкусной выпечи из нашей кулинарии'" 
                :button="'Перейти к покупкам'" 
                :imgUrl="imgBackground"
                :blockStyles="blockStyles"
                :imgStyles="imgStyles"></Panorama_SliderItem>
            </swiper-slide>
        </swiper>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script setup>
import imgBackground from '@/assets/img/Home_panorama/img3.png'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import Panorama_SliderItem from './Panorama_Slider-item.vue';
import 'swiper/css';

import { useMainStore } from '@/store/MainStore'
import { ref } from 'vue';
const modules = [Navigation];
const mainStore = useMainStore()
const blockStyles = ref({
    backgroundColor: '#FFA900',
    background: 'radial-gradient(76.52% 265.61% at 69.72% 6.74%, #FFA900 0%, #FF5C00 100%)',
})
const imgStyles = ref({
    width: '70%',
    heigth: '70%',
})
</script>

<style lang="scss" scoped>
@function rem($pixels) {
    @return calc($pixels / 16) * 1rem;
}
.panorama-slider {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    &__wrapper {
        width: 100%;
        position: relative;
        height: auto;
        max-height: rem(460);
        min-width: rem(860);
        border-radius: 26px;
        display: flex;
        border-radius: 26px;
        align-items: center;
        &__item {
            border-radius: inherit;
        }
    }
}

.swiper-button-prev, 
.swiper-button-next {
    position: absolute;
    cursor: pointer;
    background-color: #FFF1D6;
    border: 1px solid #FFF1D6;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3 !important;
    top: 50%;
    transform: translateY(-50%);
}
.swiper-button-prev {
    left: -25px;
    &::after, &::before {
        content: '';
        position: absolute;
        width: 7px;
        height: 2px;
        background-color: #323232;
    }
    &::after {
        transform: rotate(45deg);
        margin-top: 4.2px;
    }
    &::before {
        transform: rotate(-45deg);
        margin-bottom: 4.2px;
    }
}
.swiper-button-next {
    right: -25px;
    &::after, &::before {
        content: '';
        position: absolute;
        width: 7px;
        height: 2px;
        background-color: #323232;
    }
    &::after {
        transform: rotate(-45deg);
        margin-top: 4.2px;
    }
    &::before {
        transform: rotate(45deg);
        margin-bottom: 4.2px;
    }
}
</style>

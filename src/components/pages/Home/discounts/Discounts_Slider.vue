<template>
    <div class="discounts">
        <div class="discounts-header">
            <h2 class="discounts-header__title catalog-title">{{ title }}</h2>
            <RouterLink class="discounts-header__button catalog-button" :to="'/promotions'">Смотреть все</RouterLink>
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
                :slides-per-view="slidesPerView"
                :modules="modules"
                :navigation="{
                    nextEl: '.nextButton',
                    prevEl: '.prevButton'
                }">
                <swiper-slide 
                    class="discounts-slider__item"
                    v-for="(card, index) in data"
                    :key="card.id"
                >
                    <ProductCard
                        :dataCard="card"></ProductCard>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useAllData } from '@/store/AllData';
import ProductCard from '@/components/product-card/ProductCard.vue';
const props = defineProps({
    title: {
        type: String, 
        required: true,
        default: 'скидки'
    }
})
const modules = [Navigation];
const mainStore = useMainStore()
const AllDataStore = useAllData()
const data = AllDataStore.discountsData
const {width} = mainStore
const slidesPerView = ref(4)
const updateSlides = ()=>{
    if (width <= 480) {
        slidesPerView.value = 2
    } else if (width <= 768) {
        slidesPerView.value = 2.5
    } else {
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
}
@media (max-width: 768px) {
    .discounts-header__title {
        overflow: hidden;
        white-space: nowrap;
    }
}
@media (max-width: 480px) {
    .discounts-header__navigation {
        display: none;
    }
}
</style>

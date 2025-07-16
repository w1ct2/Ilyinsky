<template>
    <section class="panorama">
        <div class="container">
            <div class="panorama__inner">
                <PanoramaSlider class="panorama__slider"></PanoramaSlider>
                <PanoramaItem 
                    class="panorama__item" 
                    :title="'Кэшбэк</br> с каждой</br> покупки'"
                    :titleStyles="item1Text"
                    :imgUrl="img1"
                    :imgStyles="item1Img">
                </PanoramaItem>
                <PanoramaItem 
                    class="panorama__item"
                    :title="'Оставьте  отзыв</br> и получи 5% скидку'"
                    :titleStyles="item2Text"
                    :imgUrl="img2"
                    :imgStyles="item2Img">
                </PanoramaItem>
            </div>
        </div>
    </section>
</template>

<script setup>
import PanoramaSlider from '@/components/pages/Home/panorama/Panorama_Slider.vue'
import PanoramaItem from '@/components/pages/Home/panorama/Panorama_Item.vue'
import img1 from '@/assets/img/Home_panorama/img1.png'
import img2 from '@/assets/img/Home_panorama/img2.png'

import { useMainStore } from '@/store/MainStore'
import { ref } from 'vue'
const mainStore = useMainStore()

const item1Text = ref({
    color: '#3E5828',
    backgroundColor: '#A9D288',
    background: 'radial-gradient(55.5% 137.72% at 4.95% 0%, #A9D288 0%, #CEEEB5 100%)',
})
const item2Text = ref({
    color: '#fff',
    backgroundColor: '#FF0000',
    background: 'radial-gradient(62.38% 214.22% at 78.22% 32.11%, #FF0000 0%, #FF3103 100%)',
})
const item1Img = ref({
    width: '300px',
    height: '100%',
    right: '0',
    bottom: '0'
})
const item2Img = ref({
    width: '120px',
    height: '120px',
    right: '20px',
    top: '30px'
})
</script>

<style lang="scss" scoped>
@function rem($pixels) {
    @return calc($pixels / 16) * 1rem;
}
.panorama {
    margin-top: rem(25);
    margin-bottom: rem(50);
    height: rem(460);
    max-height: rem(460);
    &__inner {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: auto 400px;
        grid-template-rows: repeat(2, 1fr);
        gap: 25px;
    }
    &__slider {
        grid-row: 1/3;
        grid-column: 1/2;
    }
}
</style>

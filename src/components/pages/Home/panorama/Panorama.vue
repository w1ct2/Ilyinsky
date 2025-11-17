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
import { ref } from 'vue'
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
    height: '100%',
    right: '0',
    bottom: '0'
})
const item2Img = ref({
    height: '35%',
    right: '20px',
    top: '20px'
})
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.panorama {
    margin-top: rem(25);
    margin-bottom: rem(50);
    height: rem(460);
    min-height: 0;
    max-height: rem(460);
    overflow: hidden;
    user-select: none;
    &__inner {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr minmax(300px, 365px);
        grid-template-rows: repeat(2, 1fr);
        gap: 25px;
    }
    &__slider {
        grid-row: 1/3;
        grid-column: 1/2;
    }
    @media (max-width:1000px) {
        & {
            max-height: none;
            height: auto;
        }
        &__inner {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 2fr 1fr;
        }
        &__slider {
            grid-row: 1/2;
            grid-column: 1/3;
            max-height: rem(420);
        }
        &__item {
            max-height: rem(210);
        }
    }
    @media (max-width: 480px) {
        margin-top: 0;
        &__inner {
            grid-template-rows: 200px 90px;
            gap: rem(10);
        }
    }
}
</style>

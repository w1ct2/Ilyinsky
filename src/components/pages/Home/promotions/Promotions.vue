<template>
    <section class="promotions">
        <div class="container">
            <div class="promotions__inner">
                <Promotions_Slider></Promotions_Slider>
            </div>
        </div>
    </section>
</template>

<script setup>
import Promotions_Slider from './Promotions_Slider.vue';
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.promotions {
    margin-bottom: rem(100);
    margin-top: rem(130);
    @media (max-width: 1000px) {
        margin-top: rem(110);
        margin-bottom: rem(90);
    }
    @media (max-width: 768px) {
        margin-top: rem(100);
        margin-bottom: rem(80);
    }
    @media (max-width: 480px) {
        margin-top: rem(80);
        margin-bottom: rem(60);
    }
}
</style>

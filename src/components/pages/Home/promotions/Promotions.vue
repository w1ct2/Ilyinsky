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
}
</style>

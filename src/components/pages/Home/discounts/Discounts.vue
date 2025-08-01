<template>
    <section class="discounts">
        <div class="container">
            <div class="discounts__inner">
                <Discounts_Slider :title="title"></Discounts_Slider>
            </div>
        </div>
    </section>
</template>

<script setup>
import Discounts_Slider from './Discounts_Slider.vue';
const props = defineProps({
    title: {
        type: String
    }
})
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.discounts {
    margin-bottom: rem(200);
}
</style>

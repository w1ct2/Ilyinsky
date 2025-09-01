<template>
    <div class="address">
        <img :src="address" alt="" class="address__img1">
        <h6 class="address__title">{{ data.title }}</h6>
        <p class="address__p">{{ data.text }}</p>
        <img :src="clock" alt="" class="address__img2">
        <p class="address__time">{{ data.time }}</p>
    </div>
</template>

<script setup>
import clock from '@/assets/img/svg/clock1.png'
import address from '@/assets/img/svg/address1.svg'
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.address {
    display: grid;
    grid-template-columns: 17px 1fr;
    column-gap: 10px;
    row-gap: 10px;
    &__title {
        font-weight: 700;
        font-size: 22px;
    }
    &__p, &__time {
        font-size: 20px;
        grid-column: 2/3;
    }
    & img {
        margin: auto;
    }
    &__img1 {
        grid-row: 1/2;
    }
    &__img2 {
        grid-column: 1/2;
        grid-row: 3/4;
    }
}
</style>
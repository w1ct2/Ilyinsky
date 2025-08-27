<template>
    <div class="alert" @click.stop="$emit('close-alert')">
        <div class="alert__container">
            <h1 class="alert__title">Вы успешно авторизовались!</h1>
            <img 
                v-for="(fruit, index) in fruits" 
                :src="fruit" 
                :key="fruit"
                class="alert__img"
                :class="`alert__img--${index}`"></img>
        </div>
    </div>
</template>

<script setup>
import img1 from '@/assets/img/fruits/grapes_1f347.png'
import img2 from '@/assets/img/fruits/banana_1f34c.png'
import img3 from '@/assets/img/fruits/cherries_1f352.png'
import img4 from '@/assets/img/fruits/pizza.png'
import img5 from '@/assets/img/fruits/pear_1f350.png'
import img6 from '@/assets/img/fruits/green-apple_1f34f.png'
import img7 from '@/assets/img/fruits/cupcake_1f9c1.png'
import img8 from '@/assets/img/fruits/fire.png'
import img9 from '@/assets/img/fruits/broccoli_1f966.png'
import img10 from '@/assets/img/fruits/cheese-wedge_1f9c0.png'
import img11 from '@/assets/img/fruits/sponge.png'
import { ref } from 'vue'
const fruits = ref([
    img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11
])
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.alert {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,.8);
    animation: opacity .5s;
    &__title {
        font-size: 38px;
        letter-spacing: 3px;
        font-weight: 600;
    }
    &__container {
        width: fit-content;
        height: rem(60);
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &__img {
        position: absolute;
        min-width: rem(40);
        max-width: rem(40);
        &--0 {
            bottom: -100%;
            right: 20%;
        }
        &--1{
            bottom: rem(-30);
            left: rem(-50);
        }
        &--2 {
            top: rem(-40);
            left: 40%;
        }
        &--3 {
            top: rem(-60);
            left: -5%;
        }
        &--4 {
            left: 20%;
            bottom: -70%;
        }
        &--5{
            right: rem(-40);
            bottom: 20%;
        }
        &--6 {
            right: rem(-70);
            top: -80%;
        }
        &--7 {
            top: rem(-70);
            right: 35%;
        }
        &--8 {
            top: -130%;
            left: 20%;
        }
        &--9 {
            bottom: -80%;
            right: 40%;
        }
        &--10 {
            top: -80%;
            right: 15%;
        }
    }
}
</style>
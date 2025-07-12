<template>
    <header class="header">
        <!-- <HeaderSpecialOffer
            v-if="active === true"
            :btn="'Получить скидку'" 
            :title="'Питайтесь разнообразно и копите <span>скидку</span> до 10%'"
            @closeBlock="closeBlock(n)">
        </HeaderSpecialOffer> -->
        <HeaderMain></HeaderMain>
        <!-- <img 
            :src="img.icon" 
            :alt="img.name"
            :key="img.name"
            class="fruit-item"
            :class="`fruit-item__${index}`"
            v-for="(img, index) in fruits"> -->
    </header>
</template>

<script setup>
import HeaderSpecialOffer from './HeaderSpecialOffer.vue';
import HeaderMain from './HeaderMain.vue';

import avocado from '@/assets/img/fruits/avocado_1f951.png'
import banana from '@/assets/img/fruits/banana_1f34c.png'
import broccoli from '@/assets/img/fruits/broccoli_1f966.png'
import candy from '@/assets/img/fruits/candy_1f36c.png'
import cheese from '@/assets/img/fruits/cheese-wedge_1f9c0.png'
import cherries from '@/assets/img/fruits/cherries_1f352.png'
import croissant from '@/assets/img/fruits/croissant_1f950.png'
import cupcake from '@/assets/img/fruits/cupcake_1f9c1.png'
import cutOfMeat from '@/assets/img/fruits/cut-of-meat_1f969.png'
import dumpling from '@/assets/img/fruits/dumpling_1f95f.png'
import grapes from '@/assets/img/fruits/grapes_1f347.png'
import apple from '@/assets/img/fruits/green-apple_1f34f.png'
import leafy from '@/assets/img/fruits/leafy-green_1f96c.png'
import lemon from '@/assets/img/fruits/lemon_1f34b.png'
import pear from '@/assets/img/fruits/pear_1f350.png'
import watermelon from '@/assets/img/fruits/watermelon_1f349.png'
import { onMounted, ref } from 'vue';

const fruits = ref([
    { name: 'avocado', icon: avocado },
    { name: 'banana', icon: banana },
    { name: 'broccoli', icon: broccoli },
    { name: 'candy', icon: candy },
    { name: 'cheese', icon: cheese },
    { name: 'cherries', icon: cherries },
    { name: 'croissant', icon: croissant },
    { name: 'cupcake', icon: cupcake },
    { name: 'cutOfMeat', icon: cutOfMeat },
    { name: 'dumpling', icon: dumpling },
    { name: 'grapes', icon: grapes },
    { name: 'apple', icon: apple },
    { name: 'leafy', icon: leafy },
    { name: 'lemon', icon: lemon },
    { name: 'pear', icon: pear },
    { name: 'watermelon', icon: watermelon }
])
const active = ref(true)
const closeBlock = (n)=>{
    active.value = n
}
</script>

<style lang="scss" scoped>
@function rem($pixels) {
    @return calc($pixels / 16) * 1rem;
}
.fruit-item {
    position: absolute;
    width: 30px;
    height: auto;
    z-index: 1;
    object-fit: contain;
    object-position: center;
}
.fruit-item__0 {
    top: -5px;
    right: 601px;
    width: 50px;
    height: 50px;
}
.fruit-item__1 {
    top: 5px;
    left: 250px;
    width: 42px;
    height: 42px;
}
.fruit-item__2 {
    top: 30px;
    left: 450px;
    width: 25px;
    height: 25px;
}
.fruit-item__3 {
    top: -5px;
    left: 190px;
    width: 37px;
    height: 37px;
}
.fruit-item__4 {
    top: 20px;
    right: 500px;
    width: 41px;
    height: 41px;
}
.fruit-item__5 {
    top: -5px;
    left: 360px;
    width: 40px;
    height: 40px;
}
.fruit-item__6 {
    top: 0;
}
.fruit-item__7 {
    top: 0;
}
.fruit-item__8 {
    top: 0;
}
.fruit-item__9 {
    top: 0;
}
.fruit-item__10 {
    top: 0;
}
.fruit-item__11 {
    top: 0;
}
.fruit-item__12 {
    top: 0;
}
.fruit-item__13 {
    top: 0;
}
.fruit-item__14 {
    top: 0;
}
.fruit-item__15 {
    top: 0;
}
.fruit-item__16 {
    top: 0;
}
</style>
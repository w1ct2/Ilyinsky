<template>
    <section class="addresses">
        <div class="container">
            <div class="addresses__inner">
                <h2 class="addresses__title catalog-title">МАГАЗИНЫ ГК «ИЛЬИНСКИЙ»</h2>
                <div class="addresses__container">
                    <div 
                        class="addresses__item"
                        v-for="item in addresses"
                        :key="item.id">
                        <img :src="address" alt="" class="addresses__img1">
                        <h6 class="addresses__item-title">{{ item.title }}</h6>
                        <p class="addresses__item-p">{{ item.text }}</p>
                        <img :src="clock" alt="" class="addresses__img2">
                        <p class="addresses__item-time">{{ item.time }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import clock from '@/assets/img/svg/clock1.png'
import address from '@/assets/img/svg/address1.svg'
import { ref } from 'vue';
const addresses = ref([
    {
        id: 1,
        title: 'Ильинский Супермаркет',
        text: 'Магазин продуктов посёлок Ильинское-Усово, городской округ Красногорск',
        time: '7:00-00:00'
    },
    {
        id: 2,
        title: 'Ильинский Супермаркет',
        text: 'Магазин продуктов посёлок Ильинское-Усово, городской округ Красногорск',
        time: '7:00-00:00'
    },
    {
        id: 3,
        title: 'Ильинский Супермаркет',
        text: 'Магазин продуктов посёлок Ильинское-Усово, городской округ Красногорск',
        time: '7:00-00:00'
    },
    {
        id: 4,
        title: 'Ильинский Супермаркет',
        text: 'Магазин продуктов посёлок Ильинское-Усово, городской округ Красногорск',
        time: '7:00-00:00'
    },
    {
        id: 5,
        title: 'Ильинский Супермаркет',
        text: 'Магазин продуктов посёлок Ильинское-Усово, городской округ Красногорск',
        time: '7:00-00:00'
    },
    {
        id: 6,
        title: 'Ильинский Супермаркет',
        text: 'Магазин продуктов посёлок Ильинское-Усово, городской округ Красногорск',
        time: '7:00-00:00'
    },
    {
        id: 7,
        title: 'Ильинский Супермаркет',
        text: 'Магазин продуктов посёлок Ильинское-Усово, городской округ Красногорск',
        time: '7:00-00:00'
    },
    {
        id: 8,
        title: 'Ильинский Супермаркет',
        text: 'Магазин продуктов посёлок Ильинское-Усово, городской округ Красногорск',
        time: '7:00-00:00'
    },
])
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.addresses {
    margin-bottom: rem(190);
    color: #000;
    &__container {
        margin-top: rem(45);
        display: grid;
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 20px;
        row-gap: 50px;
    }
    &__item {
        display: grid;
        grid-template-columns: 17px 1fr;
        column-gap: 15px;
        row-gap: 15px;
        &-title {
            font-weight: 700;
            font-size: 22px;
        }
        &-p, &-time {
            font-size: 20px;
            grid-column: 2/3;
        }
        & img {
            margin: auto;
        }
    }
    &__img1 {
        grid-row: 1/2;
    }
    &__img2 {
        grid-column: 1/2;
        grid-row: 3/4;
    }
    @media (max-width: 1000px) {
        &__item {
            &-title {
                font-size: 20px;
            }
            &-p, &-time {
                font-size: 18px;
            }
        }
    }
    @media (max-width: 768px) {
        &__container {
            grid-template-columns: repeat(2, 1fr);
        }
        &__item {
            &-title {
                font-size: 19px;
            }
            &-p, &-time {
                font-size: 17px;
            }
        }
        & {
            margin-bottom: rem(140);
        }
    }
    @media (max-width: 480px) {
        &__container {
            grid-template-columns: 1fr;
        }
        &__item {
            &-title {
                font-size: 18px;
            }
            &-p, &-time {
                font-size: 16px;
            }
        }
        & {
            margin-bottom: rem(100);
        }
    }
}
</style>
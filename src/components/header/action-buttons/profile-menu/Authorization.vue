<template>
    <div class="auth">
        <div 
            class="auth__item"
            v-for="item in content">
            <div class="auth__img" :style="{backgroundImage: `url(${item.imgUrl})`}"></div>
            <p class="auth__title">{{ item.title }}</p>
        </div>
        <button class="auth__button" @click="$emit('nextPage', true)">Войти по номеру телефона</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import star from '@/assets/img/svg/star1.svg'
import gift from '@/assets/img/svg/gift.svg'
import procent from '@/assets/img/svg/procent.svg'

const content = ref([
    {
        id: 1,
        title: 'Покупайте продукты со скидкой',
        imgUrl: procent
    },
    {
        id: 2,
        title: 'Заказывайте товары с доставкой день в день',
        imgUrl: gift
    },
    {
        id: 3,
        title: 'Узнавайте первыми и участвуйте в акциях ',
        imgUrl: star
    }
    
])
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.auth {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: rem(15);
    margin-top: rem(30);
    &__item {
        display: flex;
        align-items: center;
        gap: rem(20);
    }
    &__button {
        margin-top: auto;
        font-size: 18px;
        width: rem(260);
        height: rem(45);
        border-radius: 16px;
        background-color: var(--red);
    }
    &__title {
        max-width: rem(185);
        color: #000;
        font-size: 14px;
    }
    &__img {
        background-color: #FFF8EB;
        border: 1px solid #FFA90073;
        border-radius: 16px;
        width: rem(44);
        height: rem(44);
        background-repeat: no-repeat;
        background-position: center;
        background-size: auto;
    }
}
</style>
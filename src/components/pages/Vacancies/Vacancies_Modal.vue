<template>
    <div class="vacancy" @click="$emit('resetModal', null)">
        <div class="vacancy__inner" @click.stop>
            <div class="vacancy__close-btn" @click="$emit('resetModal', null)"></div>
            <div class="vacancy__icon"><img :src="data.imgUrl" alt=""></div>
            <div class="vacancy__content">
                <div class="vacancy__content-block">
                    <h2 class="vacancy__title">{{ data.name }}</h2>
                    <p class="vacancy__p" v-html="data.income"></p>
                </div>
                <div class="vacancy__content-block">
                    <h2 class="vacancy__title">{{ data.info.titles[0] }}</h2>
                    <p class="vacancy__p" v-for="paragraph in data.info.p_1">{{ paragraph }}</p>
                </div>
                <div class="vacancy__content-block">
                    <h2 class="vacancy__title">{{ data.info.titles[1] }}</h2>
                    <p class="vacancy__p" v-for="paragraph in data.info.p_2">{{ paragraph }}</p>
                </div>
                <div class="vacancy__content-block">
                    <h2 class="vacancy__title">{{ data.info.titles[2] }}</h2>
                    <p class="vacancy__p" v-for="paragraph in data.info.p_3">{{ paragraph }}</p>
                </div>
            </div>
            <Vacancies_Form></Vacancies_Form>
        </div>
    </div>
</template>

<script setup>
import Vacancies_Form from './Vacancies_Form.vue';

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
@keyframes opacity {
    0% {
        opacity: 0;
    } 100% {
        opacity: 1;
    }
}
.vacancy {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, .5);
    animation: opacity .5s;
    &__inner {
        background-color: #fff;
        max-width: rem(1290);
        width: 100%;
        aspect-ratio: 1290/840;
        border-radius: 20px;
        padding: 60px 70px;
        margin: 0 40px;
        display: grid;
        grid-template-columns: rem(100) 1.2fr 1fr;
        justify-content: space-between;
        column-gap: 50px;
        overflow-y: scroll;
        position: relative;
    }
    &__icon {
        width: rem(100);
        height: rem(100);
        border-radius: 50%;
        background-color: #FFFBEF;
        border: 1px solid #FFC425;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        & img {
            max-height: rem(100);
            width: auto;
            margin-bottom: rem(25);
        }
    }
    &__content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
    }
    &__content-block {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    &__title {
        font-size: 32px;
        font-weight: 500;
        margin-bottom: -5px;
    }
    &__p {
        font-size: 20px;
    }
    &__close-btn {
        position: absolute;
        background-color: #F2F3F5;
        width: rem(38);
        height: rem(38);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 10px;
        right: 10px;
        cursor: pointer;
        &::after, &::before {
            content: '';
            background-color: #AAAAAA;
            height: rem(2.5);
            width: rem(18);
            position: absolute;
        }
        &::after {
            transform: rotate(-45deg);
        }
        &::before {
            transform: rotate(45deg);
        }
    }
}
</style>
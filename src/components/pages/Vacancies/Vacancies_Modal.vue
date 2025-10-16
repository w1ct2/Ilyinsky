<template>
    <div class="vacancy modal-page" @click="$emit('resetModal', null)">
        <div class="vacancy__inner modal-page__inner" @click.stop>
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
            <Vacancies_Form class="vacancy__form"></Vacancies_Form>
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
.vacancy {
    &__inner {
        padding: 60px 70px;
        display: grid;
        grid-template-columns: rem(100) 1.2fr 1fr;
        justify-content: space-between;
        column-gap: 50px;
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
        gap: 30px;
        width: 100%;
    }
    &__content-block {
        display: flex;
        flex-direction: column;
        gap: 12px;
        min-height: fit-content;
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
    @media (max-width: 1300px) {
        &__title {
            font-size: 28px;
        }
        &__p {
            font-size: 19px;
        }
        &__inner {
            grid-template-columns: rem(100) 1fr;
            grid-template-rows: rem(100) auto auto;
            row-gap: 40px;
        }
        &__icon {
            grid-row: 1/4;
        }
        &__content {
            grid-column: 2/3;
            grid-row: 1/3;
        }
        &__form {
            grid-column: 2/3;
            grid-row: 3/4;
        }
    }
    @media (max-width: 1000px) {
        &__inner {
            height: 100%;
            width: 100%;
            margin: 0;
            border-radius: 0;
            padding-bottom: rem(80);
        }
        &__title {
            font-size: 26px;
        }
        &__p {
            font-size: 18px;
        }
    }
    @media (max-width: 768px) {
        &__title {
            font-size: 24px;
        }
        &__inner {
            grid-template-columns: repeat(1, 1fr);
            padding: 40px;
            padding-bottom: rem(70);
        }
        &__icon {
            grid-row: 1/2;
        }
        &__content {
            grid-column: 1/2;
            grid-row: 2/3;
        }
        &__form {
            grid-column: 1/2;
            grid-row: 3/4;
        }
    }
    @media (max-width: 480px) {
        &__inner {
            padding-left: 0;
            padding-right: 0;
            padding-top: rem(40);
            padding-bottom: rem(70);
        }
        &__icon, &__content {
            margin: 0 30px;
        }
        &__content {
            min-width: 0;
            max-width: 90%;
        }
    }
}
</style>
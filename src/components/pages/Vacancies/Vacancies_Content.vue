<template>
    <section class="vacancies">
        <div class="container">
            <div class="vacancies__inner">
                <h2 class="vacancies__title catalog-title">вакансии</h2>
                <div class="vacancies__list">
                    <div 
                        class="vacancies__item"
                        v-for="(vacancy, index) in vacanciesStore.vacancies"
                        :key="vacancy.id"
                        :style="vacancy.styles">
                        <h4 class="vacancies__item-title">{{ vacancy.name }}</h4>
                        <p class="vacancies__item-p" v-html="vacancy.income"></p>
                        <button class="vacancies__item-button" @click="setActiveModal(index)">Подробнее</button>
                        <img :src="vacancy.imgUrl" class="vacancies__item-img" :style="vacancy.imgPosition">
                        <Vacancies_Modal 
                            v-show="isActiveModal === index" 
                            :data="vacancy"
                            @resetModal="resetActiveModal"></Vacancies_Modal>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useVacanciesStore } from '@/store/VacanciesStore'
import Vacancies_Modal from './Vacancies_Modal.vue';
import { ref } from 'vue';
const vacanciesStore = useVacanciesStore()
const isActiveModal = ref(null)
const setActiveModal = (index) => {
    isActiveModal.value = index
}
const resetActiveModal = ()=>{
    setActiveModal(null)
}

</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.vacancies {
    margin-top: rem(40);
    margin-bottom: rem(120);
    &__list {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 25px;
        margin-top: rem(65);
        grid-auto-rows: 1fr;
    }
    &__item {
        color: #000;
        height: 100%;
        width: 100%;
        aspect-ratio: 300/255;
        border-radius: 30px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        position: relative;
        &-img {
            position: absolute;
            max-width: 60%;
        }
        &-title {
            font-size: 22px;
            font-weight: 500;
            overflow: hidden;
            white-space: nowrap;
            z-index: 2;
        }
        &-p {
            font-size: 18px;
            z-index: 2;
        }
        &-button {
            font-size: 22px;
            border: 1px solid #000;
            border-radius: 30px;
            max-width: 200px;
            aspect-ratio: 200/55;
            margin-top: auto;
            z-index: 2;
        }
    }
    @media (max-width: 1300px) {
        &__list {
            grid-template-columns: repeat(3, 1fr);
            max-width: rem(1000);
            margin: 0 auto;
            margin-top: rem(70);
        }
    }
    @media (max-width: 1000px) {
        &__item {
            padding: 25px;
            aspect-ratio: 0;
            min-width: 0;
            min-height: rem(260);
            // &-title {
            //     font-size: 20px;
            // }
            // &-p {
            //     font-size: 18px;
            // }
            &-button {
                font-size: 20px;
            }
            &-img {
                max-width: rem(70);
                max-height: rem(70);
                top: -10px !important;
            }
        }
    }
    @media (max-width: 768px) {
        & {
            margin-top: rem(20);
        }
        &__list {
            grid-template-columns: repeat(2, 1fr);
            max-width: rem(520);
        }
        &__item {
            min-height: rem(200);
            &-title {
                white-space: wrap;
            }
            &-img {
                max-width: rem(60);
                max-height: rem(60);
            }
            &-p {
                font-size: 16px;
            }
        }
    }
    @media (max-width: 480px) {
        &__title {
            font-size: 22px;
        }
        &__list {
            grid-template-columns: 1fr;
            margin-top: rem(30);
        }
        &__item {
            padding: 30px;
            &-p {
                font-size: 18px;
            }
            &-img {
                max-width: rem(90);
                max-height: rem(90);
                top: 50% !important;
                right: 10px !important;
                transform: translateY(-50%);
            }
        }
    }
}
</style>

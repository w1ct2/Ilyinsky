<template>
    <div class="personal-data">
        <form class="personal-data__form" @submit.prevent>
            <div class="personal-data__item">
                <label for="" class="personal-data__label">Имя</label>
                <input type="text" class="personal-data__input">
            </div>
            <div class="personal-data__item">
                <label for="" class="personal-data__label">Номер телефона</label>
                <input type="text" class="personal-data__input" v-model="phoneNumber" :disabled="phoneNumber">
            </div>
            <div class="personal-data__item">
                <label for="" class="personal-data__label">День рождения</label>
                <input type="text" class="personal-data__input">
            </div>
            <div class="personal-data__item">
                <label for="" class="personal-data__label">Эл. почта</label>
                <input type="text" class="personal-data__input">
            </div>
        </form>
    </div>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore'
const mainStore = useMainStore()
const phoneNumber = mainStore.mainPhoneUser
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.personal-data {
    margin-top: rem(50);
    margin-bottom: rem(110);
    display: flex;
    &__form {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
    &__item {
        display: flex;
        flex-direction: column;
        gap: 3px;
    }
    &__label {
        color: #888888;
    }
    &__input {
        max-width: rem(310);
        height: rem(45);
        width: 100vh;
        background-color: #F3F3F7;
        border: 1px solid #E2E2E9;
        border-radius: 10px;
        font-size: 20px;
        color: #000;
        padding: 0 25px;
    }
}
</style>
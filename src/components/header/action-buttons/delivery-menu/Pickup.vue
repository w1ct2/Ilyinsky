<template>
<form class="form">
        <h4 class="title">Выберите адрес самовывоза</h4>
        <div class="form__input">
            <input type="text" placeholder="Введите адрес доставки">
            <div class="form__list" @click="isActiveList = !isActiveList">
                <div class="form__list-btn"><span></span></div>
                <p>Список</p>
            </div>
            <Pickup_List v-show="isActiveList" @close-list="isActiveList = false"></Pickup_List>
        </div>
        <h4 class="title">Последние адреса</h4>
        <div class="form__addresses"></div>
        <h4 class="title">Когда зайдете в магазин?</h4>
        <div class="form__select">
            <v-select
                class="form__select-field"
                label="name"
                v-model="selected1"
                :options="selectOptions1"></v-select>
            <v-select
                class="form__select-field"
                label="name"
                v-model="selected2"
                :options="selectOptions2"></v-select>
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import Pickup_List from './Pickup_List.vue';
const isActiveList = ref(1)
const selectOptions1 = ref([
    { id: 1, name: 'Сегодня' },
    { id: 2, name: 'Завтра' },
    { id: 3, name: 'В понедельник' },
])
const selected1 = ref(selectOptions1.value[0]);
const selectOptions2 = ref([
    { id: 1, name: 'за 25 мин.' },
    { id: 2, name: 'с 21:00 до 23:00' },
    { id: 3, name: 'с 23:00 до 20:00' },
])
const selected2 = ref(selectOptions2.value[0]);
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.form {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    cursor: default;
    &__input {
        position: relative;
        display: flex;
        align-items: center;
        gap: 8px;
        & input {
            height: rem(45);
            width: 100%;
            border: 1px solid #E1E1E1;
            border-radius: 16px;
            color: #000;
            padding-left: 15px;
            padding-right: 40px;
            &::placeholder {
                color: #6B6B6B;
            }
        }
        & button {
            position: absolute;
            z-index: 2;
            cursor: pointer;
            right: 12px;
            height: 100%;
            width: rem(24);
            background-repeat: no-repeat;
            background-position: center;
            background-size: 100%;
        }
    }
    &__address {
        display: flex;
        align-items: center;
        gap: 25px;
    }
    &__addresses {
        display: flex;
        flex-direction: column;
        gap: 40px;
        margin-bottom: rem(55);
        &--else {
            font-size: 14px;
            color: #6B6B6B;
            margin-bottom: rem(30);
        }
    }
    &__delete {
        cursor: pointer;
        margin-left: auto;
    }
    &__select {
        display: flex;
        gap: 15px;
        width: 100%;
        align-items: center;
        &-field {
            width: 50%;
            & :deep(.vs__dropdown-menu) {
                padding: 0;
                margin-top: 10px;
                border-radius: 14px;
                box-shadow: 0px 2px 8px 0px #00000040;
            }
            & :deep(.vs__dropdown-option) {
                font-size: 18px;
                height: rem(38);
                &:hover {
                    background-color: #F4F4F4;
                    color: #000;
                }
            }
            & :deep(.vs__clear) {
                display: none;
            }
            & :deep(.vs__dropdown-toggle) {
                border-radius: 16px;
                border: 1px solid #E1E1E1;
                height: rem(74);
            }
            & :deep(.vs__search) {
                width: 50%;
            }
            & :deep(.v-select) {
                width: 50% !important;
            }
            & :deep(.vs__actions) { 
                align-items: end;
                padding-bottom: 10px;
                padding-right: 17px;
            }
            & :deep(.vs__open-indicator) { 
                width: 20px;
            }
            // & :deep(.vs__selected) { 
            //     justify-content: end !important;
            // }
            & :deep(.vs__selected-options) { 
                flex-wrap: nowrap;
                white-space: nowrap;
                overflow: hidden;
            }
            & :deep(.vs__dropdown-toggle:focus-within) {
                border: 1px solid var(--red);
            }
        }
    }
    &__list {
        display: flex;
        gap: 10px;
        align-items: center;
        width: rem(125);
        height: 100%;
        border: 1px solid #E1E1E1;
        border-radius: 16px;
        padding: 0 10px;
        cursor: pointer;
    }
    &__list-btn {
        width: rem(16);
        height: rem(14);
        display: flex;
        justify-content: center;
        align-items: center;
        & span {
            background-color: #AAAAAA;
            width: 100%;
            height: rem(2.5);
            position: relative;
            &::after, &::before {
                content: '';
                width: 100%;
                height: inherit;
                background-color: #AAAAAA;
                position: absolute;
            }
            &::after {
                bottom: -5px;
            }
            &::before {
                top: -5px;
            }
        }
    }
}
.title {
    font-size: 20px;
    font-weight: 500;
}
</style>
<template>
    <form class="footer-form">
        <h4 class="footer-form__title">Подпишитесь на вкусные и полезые новости</h4>
        <input type="text" class="footer-form__input">
        <button class="footer-form__button">Подписаться</button>
        <div class="footer-form__checkbox">
            <input type="checkbox" id="checkbox">
            <label for="checkbox">Согласен с политикой конфиденциальности</label>
        </div>
    </form>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore'
const mainStore = useMainStore()
</script>

<style lang="scss" scoped>
@function rem($pixels) {
    @return calc($pixels / 16) * 1rem;
}
.footer-form {
    &__title {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
    }
    &__input {
        background-color: #fff;
        border-radius: 16px;
        max-width: rem(250);
        height: rem(45);
        width: 100%;
        margin-right: 10px;
        color: #2E0505;
        padding: 0 15px;
    }
    &__button {
        font-size: 18px;
        font-weight: 600;
        border-radius: 16px;
        border: 1px solid #fff;
        width: rem(140);
        height: rem(45);
        margin-top: 10px;
    }
    &__checkbox {
        margin-top: 12px;
        display: flex;
        align-items: center;
        gap: 4px;
        & input {
            border-radius: 50%;
            width: 14px;
            height: 14px;
            cursor: pointer;
            background-color: #FFFFFF80;
            border: none;
            appearance: none;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            &::after {
                position: absolute;
                content: '';
                width: 6px;
                height: 6px;
                background-color: #FF0000;
                border-radius: 50%;
            }
            &:checked::after {
                background-color: #fff;
            }
            &:checked + label {
                color: #fff;
            }
        }
        & label {
            font-weight: 600;
            font-size: 14px;
            color: #FFFFFF80;
            user-select: none;
        }
    }
    @media (max-width: 769px) {
        &__title {
            font-size: 16px;
            font-weight: 400;
        }
    }
}
</style>

<template>
    <div class="phone">
        <div class="phone__input">
            <p class="phone__input-p">Ваш телефон</p>
            <PhoneField></PhoneField>
        </div>
        <div class="phone__checkbox">
            <div class="phone__checkbox-item">
                <input type="checkbox" class="phone__checkbox-input" id="phone__checkbox-input1" name="phone__checkbox-input" v-model="privacyPolicy" value="true"> 
                <label for="phone__checkbox-input1" class="phone__checkbox-label">Соглашаюсь с <span :style="{borderBottom: '1px solid #6B6B6B'}">политикой конфиденциальности</span></label>
            </div>
            <div class="phone__checkbox-item">
                <input type="checkbox" class="phone__checkbox-input" id="phone__checkbox-input2" name="phone__checkbox-input"> 
                <label for="phone__checkbox-input2" class="phone__checkbox-label">Соглашаюсь получать новости и специальные предложения</label>
            </div>
        </div>
        <button class="phone__button" :disabled="!privacyPolicy" @click="$emit('nextPage', true)"  :class="{'phone__button--active': privacyPolicy}">Получить код по SMS</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import PhoneField from './PhoneField.vue';

const privacyPolicy = ref(false)
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.phone {
    display: flex;
    flex-direction: column;
    &__input {
        width: 100%;
        margin-top: rem(10);
        border-radius: 16px;
        padding: 7px 15px;
        border: 1px solid #C4C4C4;
        height: rem(62);
        position: relative;
    }
    &__input-p {
        font-size: 14px;
        color: #6B6B6B;
    }
    &__checkbox {
        display: flex;
        flex-direction: column;
        margin-top: 15px;
        gap: 11px;
        &-item {
            display: flex;
            gap: 15px;
        }
        &-input {
            min-width: rem(14);
            min-height: rem(14);
            max-width: rem(14);
            max-height: rem(14);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #FFA90059;
            appearance: none;
            cursor: pointer;
            position: relative;
            &::after {
                content: '';
                display: none;
                width: rem(6);
                height: rem(6);
                background-color: var(--red);
                border-radius: 50%;
                position: absolute;
            }
            &:checked {
                &::after {
                    display: block;
                }
            }
        }
        &-label {
            font-size: 14px;
            color: #6B6B6B;
            user-select: none;
        }
    }
    &__button {
        margin-top: auto;
        font-size: 18px;
        width: rem(260);
        height: rem(45);
        border-radius: 16px;
        color: #6B6B6B;
        background-color: #F2F3F5;
        &--active {
            background-color: var(--red);
            color: #fff;
        }
    }
}
</style>
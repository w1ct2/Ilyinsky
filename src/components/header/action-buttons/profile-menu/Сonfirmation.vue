<template>
    <div class="confirmation">
        <p class="confirmation__p">Код подтверждения отправлен на номер  +7 999 999 99 99</p>
        <article class="confirmation__article">Введите код подтверждения</article>
        <div class="confirmation__input-container">
            <input type="text" class="confirmation__input">
            <input type="text" class="confirmation__input">
            <input type="text" class="confirmation__input">
            <input type="text" class="confirmation__input">
        </div>
        <button class="confirmation__button" :disabled="!codeValid">Подтвердить</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const codeValid = ref(false)
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.confirmation {
    display: flex;
    flex-direction: column;
    &__button {
        margin-top: auto;
        font-size: 18px;
        width: rem(260);
        height: rem(45);
        border-radius: 16px;
        color: #6B6B6B;
        background-color: #F2F3F5;
    }
    &__p {
        font-size: 14px;
        color: #000;
        margin-top: rem(38);
    }
    &__article {
        font-size: 14px;
        color: #6B6B6B;
        margin-top: rem(8);
    }
    &__input-container {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: rem(15);
    }
    &__input {
        width: rem(60);
        height: rem(60);
        padding: 0 25px;
        border-radius: 16px;
        border: 1px solid #C4C4C4;
        color: #000;
    }
}
</style>
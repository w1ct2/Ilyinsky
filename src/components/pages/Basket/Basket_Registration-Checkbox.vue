<template>
    <form class="checkbox">
        <h3 class="checkbox__title">Способ оплаты</h3>
        <div class="checkbox__item">
            <input type="radio" name="basket-regist-checkbox" id="basket-regist-checkbox-1">
            <label for="basket-regist-checkbox-1">Оплата картой при получении</label>
        </div>
        <div class="checkbox__item">
            <input type="radio" name="basket-regist-checkbox" id="basket-regist-checkbox-2">
            <label for="basket-regist-checkbox-2">Оплата наличными при получении</label>
        </div>
        <div class="checkbox__item">
            <input type="radio" name="basket-regist-checkbox" id="basket-regist-checkbox-3">
            <label for="basket-regist-checkbox-3">Онлайн оплата</label>
        </div>
    </form>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.checkbox {
    margin-top: rem(45);
    display: flex;
    flex-direction: column;
    gap: rem(25);
    &__title {
        font-weight: 600;
        font-size: 22px;
    }
    &__item {
        display: flex;
        align-items: center;
        gap: rem(25);
        & label {
            font-size: 20px;
            user-select: none;
        }
        & input {
            border-radius: 50%;
            width: rem(19);
            height: rem(19);
            cursor: pointer;
            background-color: #FFF8EB;
            border: 1px solid #FFA90073;
            appearance: none;
            display: flex;
            align-items: center;
            justify-content: center;
            &::after {
                content: '';
                width: rem(9);
                height: rem(9);
                border-radius: 50%;
            }
            &:checked::after {
                background-color: #FF0000;
            }
        }
    }
    @media (max-width: 768px) {
        &__item {
            gap: rem(15);
            & label {
                font-size: 18px;
            }
        }
    }   
    @media (max-width: 480px) {
        &__title {
            font-size: 20px;
        }
    }
}
</style>
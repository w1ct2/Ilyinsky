<template>
    <form class="form">
        <input type="text" class="form__input" placeholder="Ф.И.О">
        <input type="text" class="form__input" placeholder="Телефон">
        <input type="text" class="form__input" placeholder="Дата рождения">
        <div class="form__select">
            <span>▼</span>
            <select>
                <option value="России" selected>России</option>
                <option value="Белоруси">Белоруси</option>
                <option value="Казахстана">Казахстана</option>
            </select>
        </div>
        <div class="form__checkbox">
            <input type="checkbox" id="checkbox">
            <label for="checkbox">согласие на <span>обработку персональных данных</span></label>
        </div>
        <button class="form__button" @click.prevent>Откликнуться</button>
    </form>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.form {
    background-color: #FFECCA;
    border: 1px solid #FFE7B9;
    max-width: rem(440);
    width: 100%;
    min-width: 0;
    aspect-ratio: 440/480;
    border-radius: 16px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    &__input {
        width: 100%;
        height: rem(55);
        background-color: #fff;
        padding: 0 20px;
        font-size: 20px;
        color: #000;
        border-radius: 10px;
        &::placeholder {
            color: rgba(0, 0, 0, .5);
        }
    }
    &__select select {
        width: 100%;
        height: rem(55);
        background-color: #fff;
        padding: 0 20px;
        font-size: 20px;
        color: #000;
        border-radius: 10px;
        appearance: none;
    }
    &__select {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        & span {
            font-size: 12px;
            color: #000;
            pointer-events: none; 
            position: absolute;
            right: 22px;
        }
    }
    &__checkbox {
        display: flex;
        gap: 12px;
        align-items: center;
        & input {
            width: rem(24);
            height: rem(24);
            background-color: #fff;
            appearance: none;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            border-radius: 4px;
            cursor: pointer;
            &:checked {
                &::after {
                    content: '';
                    background-color: #000;
                    width: rem(9);
                    height: rem(9);
                    border-radius: 50%;
                    position: absolute;
                }
            }
        }
        & label {
            user-select: none;
            font-size: 15px;
        }
        & span {
            border-bottom: 1px solid #000;
        }
    }
    &__button {
        border-radius: 30px;
        color: #fff;
        font-size: 22px;
        background-color: var(--red);
        aspect-ratio: 225/55;
        max-width: rem(255);
        width: 100%;
        margin: 0 auto;
        margin-top: auto;
    }
}
</style>
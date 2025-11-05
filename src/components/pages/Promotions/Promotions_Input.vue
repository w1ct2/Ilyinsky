<template>
    <section class="input-card">
        <div class="container">
            <div class="input-card__inner">
                <div class="input-card__title">
                    <h2>Не нашли, что искали?</h2>
                    <p>Оставьте ссылку на товар или бренд.</p>
                </div>
                <form class="input-card__container">
                    <div class="input-card__checkbox">
                        <input type="checkbox" name="input1" id="input1">
                        <label for="input1">Товар</label>
                    </div>
                    <div class="input-card__checkbox">
                        <input type="checkbox" name="input2" id="input2">
                        <label for="input2">Бренд</label>
                    </div>
                    <input type="text" placeholder="Ссылка">
                    <button>Отправить</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.input-card {
    margin-bottom: rem(120);
    &__container {
        display: grid;
        width: 100%;
        min-width: 0;
        grid-template-columns: auto auto 1fr;
        grid-template-rows: 1fr rem(55);
        column-gap: rem(35);
        row-gap: rem(15);
        max-width: 6rem(30);
        & input[type="text"] {
            height: rem(36);
            background-color: #fff;
            border-radius: rem(16);
            padding: 0 rem(20);
            font-size: rem(20);
            &::placeholder {
                color: #C3B4B4;
            }
        }
        & button {
            grid-column: 1/4;
            grid-row: 2/3;
            border-radius: rem(30);
            border:rem( 1) solid var(--red);
            color: var(--red);
            height: 100%;
            width: fit-content;
            font-size: rem(22);
            padding: 0 rem(20);
        }
    }
    &__checkbox {
        display: flex;
        align-items: center;
        gap:rem( 8);
        & label {
            font-size: rem(22);
            user-select: none;
        }
        & input {
            background-color: #FFA90059;
            appearance: none;
            width: rem(17);
            height: rem(17);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            border-radius: 50%;
            cursor: pointer;
            &::after {
                content: '';
                display: none;
                width: rem(7);
                height: rem(7);
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
    }
    &__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: rem(165);
        background-color: #FFECCA;
        border:rem( 1) solid #FFE7B9;
        border-radius: rem(16);
        color: #2E0505;
        padding-left: rem(60);
        padding-right: rem(20);
        padding-top: rem(35);
        padding-bottom: rem(25);
    }
    &__title {
        display: flex;
        flex-direction: column;
        gap: rem(15);
        height: 100%;
        max-width: rem(510);
        & h2 {
            font-size: rem(38);
            text-transform: uppercase;
        }
        & p {
            font-size: rem(20);
        }
    }
    @media (max-width: 1300px) {
        &__inner {
            padding: rem(25) rem(30);
        }
        &__title {
            gap: rem(10);
            & h2 {
                font-size: rem(30);
            }
            & p {
                font-size: rem(18);
            }
        }
        &__container {
            max-width: 4rem(70);
            grid-template-rows: 1fr rem(40);
            column-gap: rem(20);
            button {
                font-size: rem(18);
            }
        }
        &__checkbox label {
            font-size: rem(20);
        }
    }
    @media (max-width: 1000px) {
        &__inner {
            flex-direction: column;
            align-items: start;
            height: auto;
            gap: rem(20);
        }
        &__container {
            max-width: 6rem(00);
        }
        &__title {
            & h2 {
                font-size: rem(26);
            }
            & p {
                font-size: rem(16);
            }
        }
        &__checkbox label {
            font-size: rem(18);
        }
        & input[type="text"] {
            font-size: rem(18);
        }
    }
    @media (max-width: 768px) {
        &__container {
            grid-template-columns: repeat(5, 1fr);
            grid-template-rows: 1fr 1fr 1fr;
            & button {
                grid-row: 3/4;
            }
            & input[type="text"] {
                grid-row: 2/3;
                grid-column: 1/6;
                max-width: 3rem(80);
            }
        }
        &__title {
            & h2 {
                font-size: rem(22);
            }
            & p {
                font-size: rem(14);
            }
        }
        &__checkbox label {
            font-size: rem(16);
        }
        & input[type="text"] {
            font-size: rem(16);
        }
        &__container {
            button {
                font-size: rem(16);
            }
        }
    }
    @media (max-width: 480px) {
        &__inner {
            padding: rem(15);
            border-radius: rem(6);
        }
        &__checkbox label {
            font-size: rem(14);
        }
        & input[type="text"] {
            font-size: rem(14);
        }
        &__container {
            button {
                font-size: rem(13);
            }
        }
    }
}
</style>

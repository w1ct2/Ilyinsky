<template>
    <div class="delivery">
        <h3 class="delivery__title">Доставка сегодня за n минут</h3>
        <p class="delivery__p">«Ильинский Супермаркет», ул. Новая,Ильинское-Усово, городской округ Красногорск</p>
        <form class="delivery__form">
            <input type="text" class="delivery__input" placeholder="квартира">
            <input type="text" class="delivery__input" placeholder="этаж">
            <input type="text" class="delivery__input" placeholder="домофон">
            <input type="text" class="delivery__input" placeholder="подъезд">
            <textarea 
                name="basket-comment" 
                id="basket-comment1" 
                rows="4" 
                class="delivery__textarea"
                placeholder="комментарий для курьера"></textarea>
        </form>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.delivery {
    display: flex;
    flex-direction: column;
    gap: rem(25);
    margin-top: rem(50);
    width: 100%;
    &__title {
        font-size: 22px;
        font-weight: 600;
    }
    &__p {
        font-size: 20px;
    }
    &__form {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: rem(75) rem(165);
        gap: rem(20);
    }
    &__input {
        background-color: #FFF8EB;
        width: 100%;
        height: 100%;
        border-radius: rem(16);
        border: 1px solid #FFA90073;
        padding: rem(20) rem(25);
        font-size: 20px;
        color: #000;
        &::placeholder {
            color: #00000080;
        }
    }
    &__textarea {
        width: 100%;
        height: 100%;
        border-radius: rem(16);
        border: 1px solid #FFA90073;
        background-color: #FFF8EB;
        color: #000;
        font-size: 20px;
        padding: rem(20) rem(25);
        grid-column: 1/5;
        resize: none;
        &::placeholder {
            color: #00000080;
        }
        &:focus {
            outline: none;
        }
    }
    @media (max-width: 768px) { 
        &__title {
            font-size: 20px;
        }
        &__p {
            font-size: 18px;
        }
        &__form {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: rem(65) rem(65) rem(165);
        }
        &__input {
            font-size: 18px;
        }
        &__textarea {
            grid-column: 1/3;
            font-size: 18px;
        }
    }
}
</style>
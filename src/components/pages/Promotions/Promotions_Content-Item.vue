<template>
    <div class="item" :style="[data.stylesDescription]">
        <div class="item__preview" :style="[data.styles]">
            <h4 class="item__title">{{ data.title }}</h4>
            <article class="item__article" v-if="data.article">{{ data.article }}</article>
        </div>
        <div class="item__description">
            <p class="item__p">{{ data.description }}</p>
            <button class="item__button">К покупкам</button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.item {
    display: flex;
    border-radius: 30px;
    min-width: 0;
    &__description {
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    &__p {
        color: #000000;
        font-size: 20px;
    }
    &__button {
        border: 1px solid var(--red);
        color: var(--red);
        border-radius: 30px;
        width: fit-content;
        font-size: 22px;
        height: rem(55);
        padding: 0 25px;
        white-space: nowrap;
    }
    &__preview {
        max-width: rem(310);
        width: 100vh;
        height: rem(450);
        border-radius: inherit;
        background-color: #FF594D;
        color: #fff;
        padding: 30px 35px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        cursor: pointer;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: bottom;
    }
    &__title {
        font-size: 24px;
        font-weight: 600;
    }
    &__article {
        color: #000;
        background-color: #fff;
        border-radius: 40px;
        height: rem(40);
        font-weight: 600;
        padding: 0 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
    }
    @media (max-width: 1300px) {
        &__description {
            padding: 25px;
        }
        &__p {
            font-size: 18px;
        }
        &__button {
            font-size: 20px;
            height: rem(50);
        }
        &__title {
            font-size: 22px;
        }
        &__article {
            font-size: 15px;
        }
    }
    @media (max-width: 1000px) {
        & {
            flex-direction: column;
            max-height: 500px;
            height: 100vh;
        }
        &__preview {
            width: 100%;
            height: 50%;
            max-width: none;
            background-size: 60% !important;
            background-position: bottom right;
        }
        &__description {
            height: 50%;
        }
    }
    @media (max-width: 768px) {
        & {
            max-height: 400px;
            border-radius: 20px;
        }
        &__preview {
            padding: 20px;
        }
        &__description {
            padding: 20px;
        }
        &__p {
            font-size: 16px;
        }
        &__button {
            font-size: 16px;
            height: rem(40);
        }
        &__title {
            font-size: 18px;
        }
        &__article {
            font-size: 13px;
        }
    }
    @media (max-width: 480px) {
    }
}
</style>

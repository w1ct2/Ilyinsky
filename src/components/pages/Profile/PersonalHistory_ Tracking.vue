<template>
    <div class="tracking-page modal-page" @click="$emit('closePage')">
        <div class="tracking-page__inner modal-page__inner" @click.stop>
            <div class="modal-page__close-btn" @click="$emit('closePage')">
                <span></span>
            </div>
            <h3 class="tracking-page__title">Отслеживание заказа<br> №{{ numberOrder }}</h3>
            <div class="tracking-page__line">
                <div class="tracking-page__status">
                    <span class="tracking-page__status-item">
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 9.34292L6.5638 14L18 2" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <span class="tracking-page__status-item"></span>
                    <span class="tracking-page__status-item"></span>
                    <span class="tracking-page__status-item"></span>
                </div>
                <ul class="tracking-page__labels">
                    <li>Заказ принят</li>
                    <li>Заказ готовится</li>
                    <li>Заказ в пути</li>
                    <li>Заказ прибыл</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    numberOrder: {
        type: Number
    }
})
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.tracking-page {
    color: #000;
    &__inner {
        width: rem(570);
        min-height: rem(400);
        aspect-ratio: 0;
        padding: rem(30);
        display: flex;
        flex-direction: column;
    }
    &__title {
        font-size: 32px;
        font-weight: 600;
    }
    &__line {
        width: 100%;
        margin-top: rem(100);
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: rem(25);
    }
    &__status {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: rem(40);
        position: relative;
        align-items: center;
        &::after {
            content: '';
            background-color: var(--red);
            height: rem(4);
            width: 80%;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }
        &-item {
            margin: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            width: rem(33);
            height: rem(33);
            border-radius: 50%;
            border: 3px solid #FF000080;
            background-color: #fff;
            position: relative;
            z-index: 2;
            &:first-child {
                background-color: var(--red);
            }
        }
    }
    &__labels {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: rem(40);
        & li {
            font-size: 20px;
            opacity: .7;
        }
    }
}
</style>
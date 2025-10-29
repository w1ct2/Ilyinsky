<template>
    <div class="card-modal modal-page" @click="$emit('close')">
        <div class="card-modal__inner modal-page__inner" @click.stop>
            <div class="modal-page__close-btn" @click="$emit('close')"></div>
            <div class="card-modal__img">
                <img :src="data.imgUrl" alt="">
            </div>
            <div class="card-modal__content">
                <h2 class="card-modal__title">
                    {{ data.title }}
                </h2>
                <p class="card-modal__availability-title">{{ data.availabilityTitle }}</p>
                <div class="card-modal__action">
                    <div class="card-modal__price">
                        <h4 
                            :class="{'card-modal__price--active' : data.discount}" 
                            class="card-modal__price-title">
                            {{ data.price }}
                        </h4>
                        <p v-if="data.discount">{{ data.oldPrice }}</p>
                    </div>
                    <button 
                        class="card-modal__basket"
                        @click.stop="
                            BasketData.addToStorage(data); 
                            basketBtnIsClicked = true"
                        :class="{'card-modal__basket--active': basketBtnIsClicked}"
                            >В корзину</button>
                    <button class="card-modal__favorite" @click="$emit('handleFavorite', data.id)">
                        <img :src="isActiveFavoriteUrl">
                    </button>
                </div>
                <p class="card-modal__info">Состав: {{ data.compound }}</p>
                <p class="card-modal__info">{{ data.nutritionalValue }}</p>
                <p class="card-modal__info">Время хранения: {{ data.shelfLife }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import favorUnactive from '@/assets/img/discounts/favorActive.svg'
import favorActive from '@/assets/img/discounts/favorUnactive.svg'
import { useBasketData } from '@/store/BasketData'
import { computed, ref } from 'vue'
const isActiveFavoriteUrl = computed(() => {
    return props.data.favorite ? favorActive : favorUnactive
})
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})
const basketBtnIsClicked = ref(false)
const BasketData = useBasketData()
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.card-modal {
    &__inner {
        padding: rem(60);
        display: grid;
        grid-template-columns: 2.1fr 2.5fr;
        gap: 70px;
        color: #000;
    }
    &__img {
        width: 100%;
        height: 100%;
        max-height: rem(490);
        border: 1px solid #FFD481;
        border-radius: rem(20);
        display: flex;
        align-items: start;
        justify-content: center;
        padding: 10px;
        & img {
            height: 100%;
            max-height: rem(490);
        }
    }
    &__content {
        display: flex;
        flex-direction: column;
    }
    &__title {
        font-size: 32px;
        font-weight: 600;
    }
    &__availability-title {
        margin-top: rem(25);
    }
    &__action {
        margin-top: rem(35);
        margin-bottom: rem(45);
        display: flex;
        align-items: center;
    }
    &__price {
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #000;
        margin-right: rem(40);
        &--active {
            color: var(--red);
        }
        &-title {
            font-size: 32px;
            font-weight: 600;
        }
        & p {
            font-size: 14px;
            text-decoration: line-through;
            color: #434343;
        }
    }
    &__basket {
        color: #fff;
        background-color: var(--red);
        height: rem(40);
        border-radius: 60px;
        border: 1px solid var(--red);
        transition: all .2s ease;
        width: fit-content;
        font-size: 20px;
        padding: 0 25px;
        margin-right: rem(10);
        &--active {
            background-color: #fff;
            color: var(--red);
            border: 1px solid var(--red);
        }
    }
    &__favorite {
        width: rem(43);
        height: rem(43);
        border-radius: 50%;
        cursor: pointer;
        border: 1px solid #E1E1E1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__info {
        font-size: 20px;
        margin-top: rem(15);
        line-height: 1.5;
    }
}
</style>
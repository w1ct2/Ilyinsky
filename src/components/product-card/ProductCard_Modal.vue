<template>
    <div class="card-modal modal-page" @click.stop="$emit('close')">
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
import { computed, onMounted, onUnmounted, ref } from 'vue'
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
onMounted(()=> {
    document.body.classList.add('no-scroll')
})
onUnmounted(()=>{
    document.body.classList.remove('no-scroll')
})
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
        max-height: fit-content;
        border: 1px solid #FFD481;
        border-radius: rem(20);
        display: flex;
        align-items: start;
        justify-content: center;
        padding: 10px;
        & img {
            height: 100%;
            max-height: fit-content;
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
    @media (max-width: 1000px) {
        &__inner {
            padding: rem(30);
            grid-template-columns: 1fr 2fr;
            gap: rem(40);
            color: #000;
            margin: auto 0;
            height: fit-content;
        }
        &__img {
            height: auto;
            & img {
                height: auto;
            }
        }
        &__title {
            font-size: 26px;
        }
        &__availability-title {
            margin-top: rem(20);
        }
        &__action {
            margin: rem(25) 0;
        }
        &__price-title {
            font-size: 26px;
        }
        &__basket {
            font-size: 16px;
            padding: 0 rem(15);
        }
        &__info {
            font-size: 18px;
        }
    }
    @media (max-width: 768px) {
        &__inner {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 2fr;
            gap: rem(30);
            color: #000;
            margin: auto 0;
            height: 100%;
            padding-top: rem(50);
        }
        &__img {
            height: auto;
            max-width: rem(320);
            max-height: rem(320);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: rem(20);
            & img {
                height: auto;
            }
        }
        &__title {
            font-size: 22px;
        }
        &__availability-title {
            font-size: 14px;
        }
        &__action {
            margin: rem(25) 0;
            display: grid;
            align-items: start;
            grid-template-columns: 1fr 1fr;
            gap: rem(15);
            width: fit-content;
        }
        &__price-title {
            font-size: 22px;
        }
        &__price {
            grid-column: 1/3;
            & p {
                font-size: 12px;
            }
        }
        &__basket {
            font-size: 15px;
            padding: 0 rem(13);
        }
        &__info {
            font-size: 16px;
        }
    }
    @media (max-width: 480px) {
        &__inner {
            gap: rem(20);
        }
        &__img {
            height: auto;
            max-width: rem(220);
            max-height: rem(220);
            padding: rem(10);
            & img {
                height: auto;
            }
        }
        &__title {
            font-size: 20px;
        }
        &__availability-title {
            font-size: 12px;
        }
        &__action {
            margin: rem(15) 0;
            gap: rem(10);
        }
        &__price-title {
            font-size: 16px;
        }
        &__price {
            grid-column: 1/3;
            & p {
                font-size: 12px;
            }
        }
        &__basket {
            font-size: 15px;
            padding: 0 rem(13);
            height: rem(30);
            margin: auto 0;
            border-radius: rem(14);
        }
    }
}
</style>
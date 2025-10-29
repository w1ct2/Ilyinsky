<template>
    <div class="card" @click="isActiveModal = true">
        <div 
            class="card__discount" 
            v-if="dataCard.discount">
            %
        </div>
        <img 
            :src="isActiveFavoriteUrl" 
            class="card__favorite" 
            @click.stop="toggleFavorite(dataCard.id)">
        </img>
        <div class="card__img">
            <img :src="dataCard.imgUrl" alt="">
        </div>
        <p 
            class="card__availability-title" 
            :class="{'card__availability-title--active' : !dataCard.availability}">
            {{ dataCard.availabilityTitle }}
        </p>
        <p class="card__availability-price">
            {{ dataCard.price }}
        </p>
        <h3 class="card__title">
            {{ dataCard.title }}
        </h3>
        <div class="card__price">
            <h4 
                :class="{'card__price--active' : dataCard.discount}" 
                class="card__price-title">
                {{ dataCard.price }}
            </h4>
            <p v-if="dataCard.discount">{{ dataCard.oldPrice }}</p>
        </div>
        <button 
            class="card__button" 
            @click.stop="BasketData.addToStorage(dataCard); basketBtnIsClicked = true"
            :class="{'card__button--active': basketBtnIsClicked}">В корзину</button>
        <Teleport to="body">
            <ProductCard_Modal 
                :data="dataCard" 
                v-show="isActiveModal"
                @close="isActiveModal = false"
                @handleFavorite="toggleFavorite"
            ></ProductCard_Modal> 
        </Teleport>
    </div>
</template>

<script setup>
import {useAllData} from '@/store/AllData.ts'
import favorUnactive from '@/assets/img/discounts/favorActive.svg'
import favorActive from '@/assets/img/discounts/favorUnactive.svg'
import { computed, ref } from 'vue'
import ProductCard_Modal from './ProductCard_Modal.vue'
import { useBasketData } from '@/store/BasketData'
const AllData = useAllData()
const BasketData = useBasketData()
const props = defineProps({
    dataCard: {
        type: Object
    },
    indexCard: {
        type: Number
    }
})
const isActiveFavoriteUrl = computed(() => {
    return props.dataCard.favorite ? favorActive : favorUnactive
})
const isActiveModal = ref(false)
const toggleFavorite = (id)=>{
    AllData.toggleFavorite(id)
}
const basketBtnIsClicked = ref(false)
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.card {
    height: rem(400);
    max-width: rem(300);
    width: 100%;
    border-radius: 20px;
    border: 1px solid #DADADA;
    padding: 18px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overflow: hidden;
    grid-template-rows: 45% 20px 30% 50px;
    row-gap: 5px;
    cursor: pointer;
    &__discount {
        position: absolute;
        left: 0;
        top: 0;
        background-color: var(--red);
        color: #ffff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom-right-radius: 20px;
        width: 52px;
        height: 36px;
        font-size: 24px;
    }
    &__favorite {
        position: absolute;
        cursor: pointer;
        top: 15px;
        right: 15px;
        width: 22px;
        height: 22px;
    }
    &__img {
        grid-column: 1/3;
        grid-row: 1/2;
        display: flex;
        align-items: center;
        justify-content: center;
        & img {
            width: auto;
            max-height: 100%;
            margin: 0 auto;
        }
    }
    &__availability-title {
        grid-column: 1/2;
        grid-row: 2/3;
        color: #434343;
        font-size: 14px;
        &--active {
            color: #BF7373;
        }
    }
    &__availability-price {
        grid-column: 2/3;
        grid-row: 2/3;
        color: #434343;
        font-size: 14px;
        width: fit-content;
        margin-left: auto;
    }
    &__title {
        grid-column: 1/3;
        grid-row: 3/4;
        overflow: hidden;
        font-size: 20px;
        color: #000000;
        font-weight: 600;
    }
    &__price {
        grid-column: 1/2;
        grid-row: 4/5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #000;
        &--active {
            color: var(--red);
        }
        &-title {
            font-size: 24px;
            font-weight: 600;
        }
        & p {
            font-size: 14px;
            text-decoration: line-through;
            color: #434343;
        }
    }
    &__button {
        grid-column: 2/3;
        grid-row: 4/5;
        color: var(--red);
        height: rem(40);
        border-radius: 60px;
        border: 1px solid var(--red);
        transition: all .2s ease;
        width: fit-content;
        margin-left: auto;
        margin-top: auto;
        margin-bottom: auto;
        padding: 0 15px;
        &:hover {
            background-color: var(--red);
            color: #fff;
        }
        &--active {
            background-color: var(--red);
            color: #fff;
        }
    }
    @media (max-width: 1300px) {
        & {
            grid-template-rows: 45% 20px auto auto 40px;
        }
        &__title {
            font-size: 16px;
        }
        &__price {
            grid-row: 4/5;
            grid-column: 1/3;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            &-title {
                font-size: 20px;
            }
        }
        &__button {
            grid-row: 5/6;
            grid-column: 1/3;
            margin: auto;
        }
        &__availability-title {
            white-space: nowrap;
        }
    }
    @media (max-width: 1000px) {
        & {
            padding: 12px;
            height: rem(350);
        }
        &__title {
            font-size: 14px;
        }
        &__price {
            &-title {
                font-size: 16px;
            }
            & p {
                font-size: 12px;
            }
        }  
        &__availability-title {
            font-size: 12px;
        }
        &__availability-price {
            font-size: 10px;
        }
        &__discount {
            font-size: 18px;
            width: 40px;
            height: 30px;
        }
        &__button {
            height: rem(35);
            font-size: 14px;
        }
    }
    @media (max-width: 768px) {
        & {
            padding: 10px;
            border-radius: 16px;
            height: rem(340);
            grid-template-rows: 45% 15px auto 20px 40px;
        }
        &__availability-title {
            font-size: 9px;
        }
        &__favorite {
            width: 18px;
            height: 18px;
            right: 10px;
            top: 10px;
        }
        &__title {
            font-size: 12px;
        }
        &__price {
            &-title {
                font-size: 14px;
            }
            & p {
                font-size: 10px;
            }
        } 
    }
    @media (max-width: 480px) {
        & {
            height: rem(250);
        }
        &__favorite {
            width: 15px;
            height: 15px;
            right: 10px;
            top: 10px;
        }
        &__price {
            &-title {
                font-size: 14px;
            }
            & p {
                font-size: 9px;
            }
        } 
        &__availability-title {
            font-size: 9px;
        }
        &__availability-price {
            font-size: 9px;
        }
    }
}
</style>
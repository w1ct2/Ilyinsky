<template>
    <div class="basket-paycheck">
        <div class="basket-paycheck__container" v-if="MainStore.isAuthUser === 'isAuth'">
            <h3 class="basket-paycheck__title">Доставка сегодня, 18:11</h3>
            <p class="basket-paycheck__address">{{ paycheckAddress }}</p>
            <div class="basket-paycheck__promo">
                <input type="text" class="basket-paycheck__input" placeholder="Есть промокод?">
                <button class="basket-paycheck__promo-btn">Применить</button>
            </div>
            <div class="basket-paycheck__row">
                <p class="basket-paycheck__row-title">Товары ({{ totalProducts }})</p>
            </div>
            <div class="basket-paycheck__row">
                <p class="basket-paycheck__row-title">Промокод:</p>
                <p class="basket-paycheck__row-title">-0 руб</p>
            </div>
            <div class="basket-paycheck__row">
                <p class="basket-paycheck__row-title">Доставка:</p>
                <p class="basket-paycheck__row-title">Бесплатно</p> 
            </div>
            <div class="basket-paycheck__row basket-paycheck__row--price">
                <p class="basket-paycheck__row-title">К оплате:</p>
                <h3 class="basket-paycheck__price">{{ totalPrice }} руб</h3>
            </div>
            <button 
                class="basket-paycheck__button"
                v-if="activePage === 'list'"
                @click="$emit('changePage')">Оформление</button>
            <button 
                class="basket-paycheck__button"
                v-else-if="activePage === 'registration'"
                @click="removeBasketData(totalPrice, date)">Оформить</button>
        </div>
        <div 
            class="basket-paycheck__regist-alert"
            v-if="activePage === 'registration'"
            :style="{backgroundImage: `url(${flag})`}">
            <p>Стоимость заказа может измениться и будет списана только после того, как мы проверим наличие товара и соберём вашу покупку.</p>
            <p>В заказ будет добавлено необходимое количество пакетов и их стоимость.</p>
            <p>Мы вам позвоним, если товара нет в наличии. Будьте на связи.</p>
        </div>
        <div class="basket-paycheck__container basket-paycheck__container--alert" v-else-if="MainStore.isAuthUser !== 'isAuth'">
            <h4 class="basket-paycheck__alert">
                Для оформления заказа вам необходимо авторизоваться.
            </h4>
            <button 
                class="basket-paycheck__button basket-paycheck__button--alert" disabled>Оформление</button>
        </div>
        <Teleport to="body">
            <Basket_RegistrationEnding
                v-if="isActiveEndingPage"
                :numberOrder="numberOrder"
                @closePage="isActiveEndingPage = false"></Basket_RegistrationEnding>
        </Teleport>
    </div>
</template>

<script setup>
import flag from '@/assets/img/mainImage/flag-alert.png'
import { useAddressesStore } from '@/store/AddressesStore';
import { useMainStore } from '@/store/MainStore';
import { usePersonalHistory } from '@/store/PersonalHistory';
import { useRecentAddressesStore } from '@/store/RecentAddressesStore';
import { computed, ref, Teleport } from 'vue';
import Basket_RegistrationEnding from './Basket_Registration-Ending.vue';
import { useBasketData } from '@/store/BasketData';
import { RouterLink } from 'vue-router';
const MainStore = useMainStore()
const AddressesStore = useAddressesStore()
const RecentAddressesStore = useRecentAddressesStore()
const PersonalHistory = usePersonalHistory()
const BasketData = useBasketData()
const props = defineProps({
    totalPrice: {
        type: Number,
        default: 0
    },
    totalProducts: {
        type: Number
    },
    activePage: {
        type: String
    }
})
const paycheckAddress = computed(()=>{
    if (MainStore.userDeliveryMethod === 'delivery') {
        return AddressesStore.activeAddress
    } else if (MainStore.userDeliveryMethod === 'pickup') {
        return RecentAddressesStore.activeAddress
    }
})
const formatDate = (date = new Date()) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}
const removeBasketData = (totalPrice, date) => {
    const orderNumber = generateOrderNumber(); 
    PersonalHistory.addToStorage(orderNumber, totalPrice, date);
    BasketData.clearStorage()
    localStorage.removeItem(BasketData.STORAGE_TOTAL_PRICE_KEY)
    numberOrder.value = orderNumber;
    isActiveEndingPage.value = true;
}
const generateOrderNumber = () => {
    return Date.now();
}
const numberOrder = ref(null)
const date = formatDate()
const isActiveEndingPage = ref(false)
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.basket-paycheck {
    width: 100%;
    height: auto;
    &__container {
        width: 100%;
        height: rem(630);
        min-width: rem(360);
        background-color: #FFECCA;
        border: 1px solid #FFE7B9;
        border-radius: rem(16);
        display: flex;
        flex-direction: column;
        padding: rem(30) rem(25);
        &--alert {
            justify-content: space-between;
        }
    }
    &__title {
        font-size: 20px;
        font-weight: 600;
    }
    &__address {
        font-size: 14px;
        line-height: 1.6;
        font-weight: 300;
        margin-top: rem(15);
    }
    &__promo {
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;
        margin-top: rem(22);
        margin-bottom: rem(25);
    }
    &__input {
        background-color: #fff;
        width: 100%;
        height: rem(55);
        border-radius: rem(13);
        padding-left: rem(22);
        padding-right: rem(130);
        &::placeholder {
            color: #6B6B6B;
        }
    }
    &__promo-btn {
        width: rem(115);
        height: rem(45);
        position: absolute;
        right: rem(5);
        border-radius: rem(13);
        color: var(--red);
        border: 1px solid var(--red);
    }
    &__row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-top: rem(12);
        &.basket-paycheck__row--price {
            margin-top: auto;
        }
        &-title {
            font-size: 20px;
        }
    }
    &__price {
        font-size: 24px;
        font-weight: 600;
    }
    &__button {
        width: 100%;
        height: rem(55);
        background-color: var(--red);
        color: #fff;
        border-radius: rem(30);
        margin-top: rem(25);
        font-size: 22px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        &--alert {
            opacity: 0.5;
        }
    }
    &__regist-alert {
        width: 100%;
        min-height: rem(280);
        margin-top: rem(20);
        background-color: #FFEDED;
        border: 1px solid var(--red);
        border-radius: rem(16);
        padding: rem(30) rem(15);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-repeat: no-repeat;
        background-position: right bottom;
        & p {
            font-size: 18px;
        }
    }
    &__alert {
        font-size: 22px;
        font-weight: 600;
    }
    @media (max-width: 1000px) {
        &__container {
            max-width: rem(480);
            max-height: rem(500);
            margin: 0 auto;
        }
    }
    @media (max-width: 768px) {
        &__container {
            padding: rem(20) rem(20);
        }
    }
    @media (max-width: 480px) {
        &__container {
            min-height: rem(400);
            height: auto;
            max-height: none;
            min-width: 0;
        }
        &__title {
            font-size: 18px;
        }
        &__row-title {
            font-size: 14px;
        }
        &__button {
            width: fit-content;
            padding: 0 rem(50);
            font-size: 20px;
        }
        &__promo-btn {
            display: none;
        }
    }
}
</style>
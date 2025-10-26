<template>
    <div class="basket-registration">
        <h3 class="basket-registration__title catalog-title">оформление заказа</h3>
        <Basket_RegistrationForm></Basket_RegistrationForm>
        <Basket_RegistrationCheckbox></Basket_RegistrationCheckbox>
        <Basket_RegistrationPickup v-if="MainStore.userDeliveryMethod === 'pickup'"></Basket_RegistrationPickup>
        <Basket_RegistrationDelivery v-else-if="MainStore.userDeliveryMethod === 'delivery'"></Basket_RegistrationDelivery>
    </div>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore';
import Basket_RegistrationCheckbox from './Basket_Registration-Checkbox.vue';
import Basket_RegistrationForm from './Basket_Registration-Form.vue';
import Basket_RegistrationPickup from './Basket_Registration-Pickup.vue';
import Basket_RegistrationDelivery from './Basket_Registration-Delivery.vue';
const MainStore = useMainStore()
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.basket-registration {
    display: flex;
    flex-direction: column;
    max-width: rem(660);
    width: 100%;
}
</style>
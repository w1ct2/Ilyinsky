<template>
    <div class="modal" @click="$emit('resetModal', false)">
        <div class="modal__inner" @click.stop>
            <Checkbox @delivery-method="setDeliveryMethod"></Checkbox>
            <Delivery v-if="deliveryMethod === 'delivery'"></Delivery>
            <Pickup v-else-if="deliveryMethod === 'pickup'"></Pickup>
            <div class="modal__map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1122.7654519384569!2d37.624558076879!3d55.749279138561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a57b4d91759%3A0x8488b2e76e30a467!2z0JHQtdC60LvQtdC80LjRiNC10LLRgdC60LDRjyDQsdCw0YjQvdGP!5e0!3m2!1sru!2sru!4v1753793958761!5m2!1sru!2sru" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Checkbox from './delivery-menu/Checkbox.vue';
import Delivery from './delivery-menu/Delivery.vue';
import Pickup from './delivery-menu/Pickup.vue';
const deliveryMethod = ref('delivery')
const setDeliveryMethod = (method) => {
    deliveryMethod.value = method
}
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.modal {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, .5);
    animation: opacity .5s;
    &__inner {
        overscroll-behavior: contain;
        // overflow-y: scroll;
        background-color: #fff;
        color: #000;
        max-width: rem(1290);
        width: 100%;
        aspect-ratio: 1290/800;
        border-radius: 20px;
        padding: 30px;
        justify-content: space-between;
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1.7fr;
        grid-template-rows: rem(82) auto;
        column-gap: rem(35);
        row-gap: rem(25);
    }
    &__map {
        margin: -30px 0;
        margin-right: -30px;
        border-top-right-radius: 16px;
        border-bottom-right-radius: 16px;
        grid-row: 1/3;
        grid-column: 2/3;
        & iframe {
            border-top-right-radius: inherit;
            border-bottom-right-radius: inherit;
        }
    }
}
</style>
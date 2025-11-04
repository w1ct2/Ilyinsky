<template>
    <section class="basket-content">
        <div class="container">
            <div class="basket-content__inner">
                <Basket_List
                    @handleTotalPrice="handleTotalPrice"
                    @handleTotalQuantity="handleTotalQuantity"
                    v-if="activePage === 'list'"></Basket_List>
                <Basket_Registration v-else-if="activePage === 'registration'"></Basket_Registration>
                <Basket_Paycheck
                    @changePage="activePage = 'registration'"
                    :totalPrice="totalPrice"
                    :totalProducts="totalProducts"
                    :activePage="activePage"></Basket_Paycheck>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import Basket_List from './Basket_List.vue';
import Basket_Paycheck from '@/components/pages/Basket/Basket_Paycheck.vue'
import Basket_Registration from './Basket_Registration.vue';
const totalPrice = ref()
const totalProducts = ref()
const activePage = ref('list')
const handleTotalPrice = (price)=>{
    totalPrice.value = price
}
const handleTotalQuantity = (products)=>{
    totalProducts.value = products
}
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.basket-content {
    margin-top: rem(40);
    margin-bottom: rem(160);
    color: #000;
    &__inner {
        display: grid;
        grid-template-columns: 2.07fr 1fr;
        gap: rem(20);
    }
}
</style>
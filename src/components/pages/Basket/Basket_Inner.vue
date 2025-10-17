<template>
    <section class="basket-content">
        <div class="container">
            <div class="basket-content__inner">
                <Basket_List></Basket_List>
                <Basket_Registration></Basket_Registration>
            </div>
        </div>
    </section>
</template>

<script setup>
import Basket_List from './Basket_List.vue';
import Basket_Registration from './Basket_Registration.vue';

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
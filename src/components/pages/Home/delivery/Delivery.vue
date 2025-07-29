<template>
    <section class="delivery">
        <div class="container">
            <div class="delivery__inner">
                <h2 class="delivery__title catalog-title">ДОСТАВКА И ОПЛАТА</h2>
                <Delivery_Content></Delivery_Content>
                <Delivery_Map></Delivery_Map>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore'
import Delivery_Content from './Delivery_Content.vue';
import Delivery_Map from './Delivery_Map.vue';
const mainStore = useMainStore()
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.delivery {
    color: #000000;
    &__inner {
        display: grid;
        min-width: 0;
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
    }
    &__title {
        grid-column: 1/3;
    }
    @media (max-width: 768px) {
        &__inner {
            grid-template-columns: 1fr;
        }
        &__title {
            grid-column: 1/2;
        }
    }
}
</style>

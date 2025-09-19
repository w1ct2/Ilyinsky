<template>
    <div class="navigation__action">
        <slot name="burger-btn"></slot>
        <RouterLink :to="'/'" class="navigation__icon">
            <img :src="icon" alt="Ильинский онлайн">
        </RouterLink>
        <Header_CatalogBtn class="breakpoint1000"></Header_CatalogBtn>
        <Header_Search></Header_Search>
        <Header_DeliveryBtn></Header_DeliveryBtn>
        <Header_Favorites class="breakpoint1000"></Header_Favorites>
        <Header_ProfileBtn class="breakpoint1000"></Header_ProfileBtn>
        <Header_Basket class="breakpoint1000"></Header_Basket>
        <slot name="burger-menu"></slot>
    </div>
</template>

<script setup> 
import icon from '@/assets/img/mainImage/mainIcon.svg'
import Header_CatalogBtn from './action-buttons/Header_CatalogBtn.vue'
import Header_Search from './action-buttons/Header_Search.vue'
import Header_DeliveryBtn from './action-buttons/Header_DeliveryBtn.vue'
import Header_Favorites from './action-buttons/Header_Favorites.vue'
import Header_ProfileBtn from './action-buttons/Header_ProfileBtn.vue'
import Header_Basket from './action-buttons/Header_Basket.vue'
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.navigation {
    &__action {
        display: flex;
        align-items: center;
        gap: 25px;
        height: rem(55);
    }
    &__icon {
        min-width: rem(200);
        min-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    @media (max-width: 1000px) {
        &__action {
            height: rem(50);
        }
        &__icon {
            max-width: rem(180);
            width: 100%;
            min-width: auto;
        }
    }
    @media (max-width: 769px) {
        &__action {
            height: rem(45);
            gap: 20px;
        }
        &__icon {
            max-width: rem(160);
        }
    }
    @media (max-width: 480px) {
        &__action {
            height: rem(40);
            gap: 12px;
        }
        &__icon {
            max-width: rem(140);
        }
    }
}
@media (max-width: 1000px) {
    .breakpoint1000 {
        display: none;
    }
}
</style>
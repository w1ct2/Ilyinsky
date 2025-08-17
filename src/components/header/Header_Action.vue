<template>
    <div class="navigation__action">
        <RouterLink :to="'/'" class="navigation__icon">
            <img :src="icon" alt="Ильинский онлайн">
        </RouterLink>
        <Header_CatalogBtn></Header_CatalogBtn>
        <Header_Search></Header_Search>
        <Header_Delivery></Header_Delivery>
        <Header_Favorites></Header_Favorites>
        <Header_ContactBtn></Header_ContactBtn>
        <Header_Basket></Header_Basket>
    </div>
</template>

<script setup> 
import icon from '@/assets/img/mainImage/mainIcon.svg'
import Header_CatalogBtn from './Header_CatalogBtn.vue'
import Header_Search from './Header_Search.vue'
import Header_Delivery from './mobile/Header_Delivery.vue'
import Header_Favorites from './Header_Favorites.vue'
import Header_ContactBtn from './mobile/Header_ContactBtn.vue'
import Header_Basket from './Header_Basket.vue'
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
        min-height: rem(55);
    }
    @media (max-width: 1300px) {
        &__delivery {
            width: auto;
            margin-left: auto;
            &-title {
                display: none;
            }
        }
        &__basket {
            width: rem(50);
            & p {
                display: none;
            }
        }
        &__search {
            width: 280px;
        }
    }
}
</style>
<template>
    <div class="navigation__action">
        <RouterLink :to="'/'" class="navigation__icon">
            <img :src="icon" alt="Ильинский онлайн">
        </RouterLink>
        <Header_CatalogBtn></Header_CatalogBtn>
        <div class="navigation__search">
            <input type="text" placeholder="Начать поиск">
            <img :src="search" alt="">
        </div>
        <div class="navigation__delivery">
            <div class="navigation__delivery-icon">
                <img :src="compass" alt="">
                <p>MCK</p>
            </div>
            <div class="navigation__delivery-title">
                <p>Выберите способ получения</p>
                <h4>Доставка или самовывоз</h4>
            </div>
        </div>
        <div class="navigation__favorites">
            <img :src="favorites" alt="">
        </div>
        <div class="navigation__contacts">
            <img :src="contacts" alt="">
        </div>
        <div class="navigation__basket">
            <img :src="basket" alt="">
            <p>Корзина</p>
        </div>
    </div>
</template>

<script setup> 
import icon from '@/assets/img/mainImage/mainIcon.svg'
import search from '@/assets/img/svg/search1.svg'
import compass from '@/assets/img/svg/compass1.svg'
import favorites from '@/assets/img/svg/favorites1.svg'
import contacts from '@/assets/img/svg/contacts1.svg'
import basket from '@/assets/img/svg/basket1.svg'
import { ref } from 'vue'
import Header_CatalogBtn from './Header_CatalogBtn.vue'
const isHoverCatalog = ref(false)
const isActiveCatalog = ref(false)
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
    &__search {
        width: rem(315);
        height: 100%;
        display: flex;
        align-items: center;
        position: relative;
        & input {
            width: 100%;
            height: 100%;
            border: 1px solid #E1E1E1;
            border-radius: 16px;
            padding-left: 15px;
            padding-right: 40px;
            color: #6B6B6B;
        }
        & img {
            position: absolute;
            right: 15px;
        }
    }
    &__delivery {
        width: rem(300);
        height: 100%;
        max-height: 50px;
        overflow: hidden;
        display: flex;
        border-radius: 16px;
        align-items: center;
        cursor: pointer;
        &-icon {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #FFA900B2;
            width: rem(65);
            height: 100%;
            border-top-left-radius: 16px;
            border-bottom-left-radius: 16px;
            & img {
                width: 14px;
                height: 14px;
            }
        }
        &-title {
            flex-grow: 1;
            height: 100%;
            border-top-right-radius: 16px;
            border-bottom-right-radius: 16px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #FFA900;
            & h4 {
                font-weight: 600;
            }
        }
    }
    &__favorites {
        width: rem(50);
        height: rem(50);
        border-radius: 16px;
        cursor: pointer;
        border: 1px solid #E1E1E1;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: -10px;
    }
    &__contacts {
        width: rem(50);
        height: rem(50);
        border-radius: 16px;
        background-color: #FFF8EB;
        cursor: pointer;
        border: 1px solid #FFA900;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: -10px;
    }
    &__basket {
        width: rem(130);
        height: rem(50);
        border-radius: 16px;
        background-color: var(--red);
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: -10px;
        gap: 10px;
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
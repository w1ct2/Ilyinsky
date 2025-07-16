<template>
    <div class="burger-menu" v-show="isActive">
        <div class="burger-menu__inner">
            <div class="navigation__action">
                <div class="navigation__icon">
                    <img :src="icon" alt="Ильинский онлайн">
                </div>
                <div class="navigation__delivery">
                    <div class="navigation__delivery-icon">
                        <img :src="compass" alt="">
                        <p>MCK</p>
                    </div>
                </div>
                <div class="navigation__search">
                    <img :src="search" alt="">
                </div>
            </div>
            <Header_BurgerCatalog :title="'каталог'" :labels="links1" class="catalog"></Header_BurgerCatalog>
            <Header_BurgerProfile :title="'профиль'" class="profile"></Header_BurgerProfile>
            <Header_BurgerCatalog :title="'ильинский клуб'" :labels="links2" class="catalog"></Header_BurgerCatalog>
            <div class="burger-menu__bottom">
                <img :src="phone" alt="">
                <div class="burger-menu__bottom-title">
                    <h4>+38 (000) 49-09-99</h4>
                    <p>Ежедневно c 09:00 до 21:00</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import icon from '@/assets/img/mainImage/mainIcon.svg'
import search from '@/assets/img/svg/search2.svg'
import compass from '@/assets/img/svg/compass1.svg'
import phone from '@/assets/img/svg/phone1.svg'
import Header_BurgerCatalog from './Header_BurgerCatalog.vue'
import Header_BurgerProfile from './Header_BurgerProfile.vue'
import { useMainStore } from '@/store/MainStore'
const mainStore = useMainStore()
const props = defineProps({
    isActive: {
        type: Boolean,
        required: true
    }
})
const links1 = [
    {
        id: 1,
        name: "Акции",
        url: ""
    },
    {
        id: 2,
        name: "Популярное",
        url: ""
    },
    {
        id: 3,
        name: "Супермаркет",
        url: ""
    },
    {
        id: 4,
        name: "Кулинария",
        url: ""
    },
    {
        id: 5,
        name: "Заморозка",
        url: ""
    },
    {
        id: 6,
        name: "Другое",
        url: ""
    },
    {
        id: 7,
        name: "Продукция от «Ильинского»",
        url: ""
    }
];
const links2 = [
    {
        id: 1,
        url: '',
        name: 'Доставка и оплата'
    },
    {
        id: 2,
        url: '',
        name: 'Программа лояльности'
    },
    {
        id: 3,
        url: '',
        name: 'Политика конфиденциальности'
    },
    {
        id: 4,
        url: '',
        name: 'Вакансии'
    },
]
</script>

<style lang="scss" scoped>
@function rem($pixels) {
    @return calc($pixels / 16) * 1rem;
}
.burger-menu {
    display: flex;
    flex-direction: column;
    position: fixed;
    background-color: #fff;
    z-index: 5 !important;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    &__inner {
        margin: 0 20px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 30px;
        column-gap: 20px;
        margin-top: 25px;
        overflow-y: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;
        &::-webkit-scrollbar {
            display: none;
        }
    }
    &__bottom {
        display: flex;
        gap: 15px;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding-top: 10px;
        border-top: 1px solid #E7EFEE;
        grid-column: 1/4;
        &-title {
            display: flex;
            flex-direction: column;
            gap: 5px;
            & h4 {
                font-size: 20px;
                color: #000;
            }
            & p {
                font-size: 14px;
                color: #00000066;
            }
        }
    }
}
.navigation {
    &__action {
        padding-left: 65px;
        display: flex;
        align-items: center;
        gap: 25px;
        position: relative;
        max-height: 65px;
        border-bottom: 1px solid #E7EFEE;
        padding-bottom: 10px;

        grid-column: 1/4;
    }
    &__search {
        width: rem(50);
        height: 50px;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFA900B2;
        & img {
            width: 15px;
            height: 15px;
        }
    }
    &__delivery {
        width: rem(50);
        height: 50px;
        overflow: hidden;
        display: flex;
        border-radius: 16px;
        align-items: center;
        cursor: pointer;
        margin-left: auto;
        &-icon {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #FFA900B2;
            width: rem(65);
            height: 100%;
            & img {
                width: 9px;
                height: 9px;
            }
            & p {
                font-size: 12px;
            }
        }
    }
}
@media (max-width: 768px) {
    .burger-menu__inner {
        grid-template-columns: repeat(1, 1fr);
        padding-bottom: 80px;
    }
    .burger-menu__bottom {
        grid-column: 1/2;
    }
    .navigation__action {
        grid-column: 1/2;
    }
    .profile {
        grid-column: 1/2;
        grid-row: 2/3;
    }
    .catalog {
        height: 100%;
        margin: 0;
    }
}
</style>

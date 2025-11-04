<template>
    <div class="burger-menu" v-show="isActive">
        <div class="burger-menu__inner">
            <Header_Action class="burger-menu__header"></Header_Action>
            <Header_BurgerCatalog :title="'каталог'" :labels="links1" class="catalog"></Header_BurgerCatalog>
            <Header_BurgerProfile :title="'профиль'" class="profile"></Header_BurgerProfile>
            <div class="burger-menu__bottom">
                <img :src="phone" alt="">
                <div class="burger-menu__bottom-title">
                    <h4>+7 (000) 000-00-00</h4>
                    <p>Ежедневно c 09:00 до 21:00</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import phone from '@/assets/img/svg/phone1.svg'
import Header_BurgerCatalog from './Header_BurgerCatalog.vue'
import Header_BurgerProfile from './Header_BurgerProfile.vue'
import Header_Action from '../Header_Action.vue'
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
        url: "/promotions"
    },
    {
        id: 4,
        name: "Кулинария",
        url: "/catalog",
        category: 'bakery'
    },
    {
        id: 3,
        name: "Супермаркет",
        url: "/catalog",
        category: 'waterDrinks'
    },
    {
        id: 5,
        name: "Заморозка",
        url: "/catalog",
        category: 'dumplings'
    },
    {
        id: 6,
        name: "Другое",
        url: "/catalog",
        category: 'beautyHygiene'
    },
    {
        id: 7,
        url: '/contacts',
        name: 'Наши магазины и контакты'
    },
    {
        id: 8,
        url: '/vacancies',
        name: 'Вакансии'
    },
];
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
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
    &__header {
        grid-column: 1/4;
        padding-left: rem(65);
        border-bottom: 1px solid #E7EFEE;
        padding-bottom: rem(15);
        box-sizing: content-box;
    }
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
    .burger-menu__header {
        padding-left: rem(50);
    }
}
@media (max-width: 480px) {
    .burger-menu__header {
        padding-left: rem(32);
    }
}
</style>

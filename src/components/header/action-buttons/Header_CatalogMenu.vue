<template>
    <div class="menu" @click.stop>
        <ul class="menu__list">
            <li 
                class="menu__item"
                v-for="(label, index) in labels"
                :key="label.id"
                @click="selectTab(index)"
                >{{ label.name }}
            </li>
            <li class="menu__item"><RouterLink :to="'/vacancies'">Вакансии</RouterLink></li>
            <li class="menu__item"><RouterLink :to="'/contacts'">Контакты</RouterLink></li>
            <li class="menu__item"><RouterLink :to="'/promotions'">Акции</RouterLink></li>
        </ul>
        <Header_CatalogSection v-if="activeTab === 0" :title="'Супермаркет'" :links="supermarket.superMarket"></Header_CatalogSection>
        <Header_CatalogSection v-else-if="activeTab === 1" :title="'Кулинария'" :links="cooking.cooking"></Header_CatalogSection>
        <Header_CatalogSection v-else-if="activeTab === 2" :title="'Заморозка'" :links="freezing.freezing"></Header_CatalogSection>
        <Header_CatalogSection v-else-if="activeTab === 3" :title="'Другое'" :links="other.other"></Header_CatalogSection>
    </div>  
</template>

<script setup>
import { ref } from 'vue';
import Header_CatalogSection from './Header_CatalogSection.vue';
import { RouterLink } from 'vue-router';
import { useSectionSupermarketStore } from '@/store/SectionSupermarketStore';
import { useSectionCookingStore } from '@/store/SectionCookingStore';
import { useSectionFreezingStore } from '@/store/SectionFreezing';
import { useSectionOtherStore } from '@/store/SectionOther';
const supermarket = useSectionSupermarketStore()
const cooking = useSectionCookingStore()
const freezing = useSectionFreezingStore()
const other = useSectionOtherStore()
const activeTab = ref(null)
const selectTab = (index) => {
    activeTab.value = index
}
const labels = ref([
    {
        id: 1,
        name: "Супермаркет",
    },
    {
        id: 2,
        name: "Кулинария",
    },
    {
        id: 3,
        name: "Заморозка",
    },
    {
        id: 4,
        name: "Другое",
    },
])

</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.menu {
    position: absolute;
    z-index: 5;
    bottom: rem(-415);
    right: -250%;
    width: rem(690);
    height: rem(400);
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 2px 8px 0px #00000040;
    padding: 35px;
    animation: opacity .3s;
    display: flex;
    gap: 40px;
    &__list {
        display: flex;
        flex-direction: column;
        font-size: 20px;
        width: 50%;
        height: 100%;
        gap: 20px;
        padding-right: 25px;
        border-right: 4px solid #E0E0E0;
        overflow-y: scroll;
        scrollbar-width: 0;
        &::-webkit-scrollbar {
            display: none;
        }
    }
    &__item {
        display: flex;
        color: #0A0A0A;
        align-items: center;
        position: relative;
        font-size: 20px;
        & a {
            color: inherit;
            font-size: inherit;
        }
        &:hover {
            color: var(--red);
            &::after:hover, &::before:hover {
                background-color: var(--red);
            }
        }
        &::after, &::before {
            content: '';
            position: absolute;
            background-color: #000000;
            height: 2px;
            width: 7px;
            right: 0;
        }
        &::after {
            transform: rotate(-45deg) translate(0, -50%);
            margin-top: 5px;
        }
        &::before {
            transform: rotate(45deg) translate(0, 50%);
            margin-bottom: 5px;
        }
    }
}
@keyframes opacity {
    0% {
        opacity: 0;
    } 100% {
        opacity: 1;
    }
}
</style>
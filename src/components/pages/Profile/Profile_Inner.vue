<template>
    <section class="profile">
        <div class="container profile__inner">
            <h1 class="profile__title catalog-title">личный кабинет</h1>
            <ul class="profile__action">
                <li
                    v-for="(tab, index) in tabs"
                    :key="tab.id"
                    class="profile__item"
                    :class="{'profile__item--active': activeTab === index}"
                    @click="AllData.setActivePagePersonalAccount(index)">{{ tab.title }}</li>
            </ul>
            <PersonalData v-if="activeTab === 0"></PersonalData>
            <PersonalHistory v-else-if="activeTab === 1"></PersonalHistory>
            <PersonalFavorites v-else-if="activeTab === 2"></PersonalFavorites>
        </div>
    </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import PersonalData from './PersonalData.vue';
import PersonalHistory from './PersonalHistory.vue';
import { useAllData } from '@/store/AllData';
import PersonalFavorites from './PersonalFavorites.vue';
import { useMainStore } from '@/store/MainStore';
const MainStore = useMainStore()
const AllData = useAllData()
const activeTab = computed(()=>AllData.activePagePersonalAccount)
const tabs = ref([
    {
        id: 1,
        title: 'Личные данные'
    },
    {
        id: 2,
        title: 'История заказов'
    },
    {
        id: 3,
        title: 'Избранное'
    }
])
onMounted(() => {
    if (!MainStore.isMobile480) {
        AllData.setActivePagePersonalAccount(0)
    } else if (MainStore.isMobile480) {
        AllData.setActivePagePersonalAccount(null)
    }
})
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.profile{
    color: #000;
    &__title {
        margin-top: rem(30);
    }
    &__action {
        margin-top: rem(40);
        display: flex;
        align-items: center;
        height: rem(60);
        gap: 30px;
        width: 100%;
        border-bottom: 4px solid #E0E0E0;
    }
    &__item {
        color: #00000080;
        font-size: 22px;
        user-select: none;
        height: 100%;
        padding: 10px 0;
        margin-bottom: -5px;
        cursor: pointer;
        &--active {
            color: #000;
            border-bottom: 4px solid var(--red);
        }
    }
    @media (max-width: 1000px) {
        &__item {
            font-size: 20px;
        }
        &__action {
            height: rem(55);
        }
    }
    @media (max-width: 768px) {
        &__item {
            font-size: 18px;
        }
        &__action {
            height: rem(50);
        }
    }
    @media (max-width: 480px) {
        &__inner {
            position: relative;
        }
        &__title {
            margin-top: 0;
        }
        &__action {
            height: auto;
            flex-direction: column;
            align-items: start;
            border-bottom: none;
            margin-top: rem(30);
            gap: rem(12);
            margin-bottom: rem(100);
        }
        &__item {
            height: rem(40);
            border-bottom: none;
            border: 0.5px solid #dadada;
            width: 100%;
            border-radius: rem(10);
            color: #0A0A0A;
            padding: 0 rem(18);
            display: flex;
            align-items: center;
            position: relative;
            &::after, &::before {
                content: '';
                position: absolute;
                background-color: #000000;
                height: 2px;
                width: 7px;
                right: rem(12);
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
}
</style>
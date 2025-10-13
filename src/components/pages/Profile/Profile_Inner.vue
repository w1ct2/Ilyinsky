<template>
    <section class="profile">
        <div class="container">
            <h1 class="profile__title catalog-title">личный кабинет</h1>
            <ul class="profile__action">
                <li
                    v-for="(tab, index) in tabs"
                    :key="tab.id"
                    class="profile__item"
                    :class="{'profile__item--active': activeTab === index}"
                    @click="selectTab(index)">{{ tab.title }}</li>
            </ul>
            <PersonalData v-if="activeTab === 0"></PersonalData>
            <PersonalHistory v-else-if="activeTab === 1"></PersonalHistory>
            <PersonalFavorites v-else-if="activeTab === 2"></PersonalFavorites>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import PersonalData from './PersonalData.vue';
import PersonalHistory from './PersonalHistory.vue';
import { useAllData } from '@/store/AllData';
import PersonalFavorites from './PersonalFavorites.vue';
const AllData = useAllData()
const activeTab = ref(0)
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
const selectTab = (index)=>{
    activeTab.value = index
}
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
}
</style>
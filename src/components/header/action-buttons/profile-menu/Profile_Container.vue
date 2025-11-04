<template>
    <div class="profile-menu" @click.stop>
        <h4 class="profile-menu__title">{{ title }}</h4>
        <ul class="profile-menu__list">
            <li class="profile-menu__item">
                <RouterLink :to="'/personal-account'" @click="AllData.setActivePagePersonalAccount(0)">Войти</RouterLink>
            </li>
            <li class="profile-menu__item">
                <RouterLink :to="'/personal-account'" @click="AllData.setActivePagePersonalAccount(1)">Заказы</RouterLink>
                <span>{{ PersonalHistory.history.length }}</span>
            </li>
            <li class="profile-menu__item">
                <RouterLink :to="'/personal-account'" @click="AllData.setActivePagePersonalAccount(2)">Избранное</RouterLink>
                <span>{{ AllData.favoriteData.length }} тов.</span>
            </li>
        </ul>
        <button class="profile-menu__btn" @click="getOut">Выход</button>
    </div>
</template>

<script setup>
import { useAllData } from '@/store/AllData';
import { useMainStore } from '@/store/MainStore'
import { usePersonalHistory } from '@/store/PersonalHistory';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const emits = defineEmits(['close-modal'])
const mainStore = useMainStore()
const title = ref(mainStore.userFullName)
const getOut = ()=>{
    mainStore.getOut()
    emits('close-modal')
}
const AllData = useAllData()
const PersonalHistory = usePersonalHistory()
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.profile-menu {
    background-color: #fff;
    z-index: 3;
    border-radius: 16px;
    position: absolute;
    width: rem(220);
    height: rem(220);
    padding: 25px;
    bottom: rem(-240);
    animation: opacity .5s;
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-shadow: 0px 2px 8px 0px #00000040;
    color: #000;
    &__title {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 14px;
    }
    &__list {
        display: flex;
        flex-direction: column;
        font-size: 14px;
        gap: 10px;
    }
    &__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        cursor: pointer;
        & a {
            color: inherit;
        }
        & span {
            color: var(--red);
            font-size: 14px;
        }
    }
    &__btn {
        max-width: rem(60);
        text-align: left;
        color: #868686;
        font-size: 14px;
    }
}
</style>
<template>
    <div class="catalog">
        <h2 class="catalog__title">{{ title }}</h2>
        <ul class="catalog__list">
            <li class="catalog__item" v-if="MainStore.isAuthUser === 'isAuth'">
                <RouterLink :to="'/personal-account'" @click="isClickedLink(0)">Личный кабинет</RouterLink>
            </li>
            <li class="catalog__item" v-else>
                <button @click="startAuthorization">Авторизуйтесь</button>
            </li>
            <li class="catalog__item">
                <RouterLink :to="'/personal-account'" @click="isClickedLink(1)">Заказы</RouterLink>
                <span>{{ PersonalHistory.history.length }}</span>
            </li>
            <li class="catalog__item">
                <RouterLink :to="'/personal-account'" @click="isClickedLink(2)">Избранное</RouterLink>
                <span>{{ AllData.favoriteData.length }}</span>
            </li>
        </ul>
        <button class="catalog__btn" @click="getOut">Выход</button>
        <teleport to="body">
            <div class="modal-page" v-show="isActiveAuth" @click="isActiveAuth = false">
                <Profile_AuthContainer
                    @close-auth="handleCloseAuth"></Profile_AuthContainer>
            </div>
        </teleport>
        <teleport to="body">
            <Profile_AfterAuth
                v-if="authAlert"
                @close-alert="authAlert=false"></Profile_AfterAuth>
        </teleport>
    </div>
</template>

<script setup>
import { useAllData } from '@/store/AllData';
import { useMainStore } from '@/store/MainStore';
import { usePersonalHistory } from '@/store/PersonalHistory';
import { RouterLink } from 'vue-router';
import Profile_AuthContainer from '../action-buttons/profile-menu/Profile_AuthContainer.vue';
import Profile_AfterAuth from '../action-buttons/profile-menu/Profile_AfterAuth.vue';
import { ref } from 'vue';
const PersonalHistory = usePersonalHistory()
const AllData = useAllData()
const MainStore = useMainStore()
const props = defineProps({
    title: {
        type: String
    },
})
const isActiveAuth = ref(false)
const authAlert = ref(false)
const isClickedLink = (page)=> {
    AllData.setActivePagePersonalAccount(page)
    MainStore.activeBurgerMenu()
}
const getOut = ()=>{
    MainStore.getOut()
    MainStore.isAuthUser = 'notAuth'
}
const startAuthorization = () =>{
    MainStore.activeBurgerMenu()
    isActiveAuth.value = true
}
const viewAuthAlert = ()=>{
    authAlert.value = true
    setTimeout(()=>{
        authAlert.value = false
    }, 3000)
}
const handleCloseAuth = () => {
    isActiveAuth.value = false;
    viewAuthAlert();
};
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.catalog {
    margin: 0 auto;
    max-width: rem(290);
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #000000;
    padding: 0 20px;
    border-right: 1px solid #E7EFEE;
    position: relative;
    &__title {
        text-transform: uppercase;
        font-size: 19px;
        font-weight: 600;
    }
    &__list {
        display: flex;
        flex-direction: column;
        font-size: 18px;
        gap: 15px;
    }
    &__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        cursor: pointer;
        & a {
            color: #000;
        }
        & span {
            color: var(--red);
            font-size: 14px;
        }
    }
    &__btn {
        opacity: .5;
        max-width: rem(60);
        text-align: left;
        margin-top: 10px;
    }
}
</style>

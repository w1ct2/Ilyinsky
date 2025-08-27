<template>
    <div class="contacts" @click.stop="toggleMenu">
        <img :src="contacts" class="contacts__img">
        <Profile_AuthContainer
            v-if="!isAuth"
            v-show="isActiveMenu"
            class="contacts__container"
            @close-auth="handleCloseAuth"></Profile_AuthContainer>
        <Profile_Container 
            @close-modal="isActiveMenu = false"
            v-else-if="isAuth"
            v-show="isActiveMenu"></Profile_Container>
        <Profile_AfterAuth
            v-if="authAlert"
            @close-alert="authAlert=false"></Profile_AfterAuth>
    </div>
</template>

<script setup>
import contacts from '@/assets/img/svg/contacts1.svg'
import Profile_AuthContainer from './profile-menu/Profile_AuthContainer.vue';
import { onMounted, onUnmounted, ref } from 'vue';
import Profile_Container from './profile-menu/Profile_Container.vue';
import Profile_AfterAuth from './profile-menu/Profile_AfterAuth.vue';
const isActiveMenu = ref(false)
const authAlert = ref(false)
const isAuth = ref(false)
const checkAuthStatus = () => {
    isAuth.value = localStorage.getItem('UserAuthorization') === 'isAuth';
};
onMounted(()=>{
    checkAuthStatus()
    window.addEventListener('storage', checkAuthStatus);
})
onUnmounted(() => {
    window.removeEventListener('storage', checkAuthStatus);
});
const toggleMenu = ()=>{
    isActiveMenu.value = !isActiveMenu.value
    checkAuthStatus()
}
const handleCloseAuth = () => {
    isActiveMenu.value = false;
    viewAuthAlert();
};
const viewAuthAlert = ()=>{
    authAlert.value = true
    setTimeout(()=>{
        authAlert.value = false
    }, 3000)
}
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.contacts {
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
    position: relative;
    &:hover {
        .contacts__img {
            animation: people .5s;
        }
    }
    &__container:hover {
        .contacts__img {
            animation: none;
        }
    }
}
@keyframes people {
    0% {
        transform: translate(0, 0);
    } 50% {
        transform: translate(0, -10px);
    } 100% {
        transform: translate(0, 0);
    }
    
}
</style>
<template>
    <div class="contacts" @click.stop="isActiveMenu = !isActiveMenu">
        <img :src="contacts" class="contacts__img">
        <Profile_AuthContainer
            v-if="isAuth === 'notAuth' && isActiveMenu"
            class="contacts__container"
            @close-auth="isActiveMenu = false"></Profile_AuthContainer>
        <Profile_Container v-else-if="isAuth === 'isAuth'"></Profile_Container>
    </div>
</template>

<script setup>
import contacts from '@/assets/img/svg/contacts1.svg'
import Profile_AuthContainer from './profile-menu/Profile_AuthContainer.vue';
import { ref } from 'vue';
import Profile_Container from './profile-menu/Profile_Container.vue';
import { useMainStore } from '@/store/MainStore';
const MainStore = useMainStore()
const isActiveMenu = ref(false)
const isAuth = ref(MainStore.isAuthUser)
console.log(isAuth.value);
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
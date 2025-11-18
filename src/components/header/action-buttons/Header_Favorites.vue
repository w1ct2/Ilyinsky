<template>
    <div class="favorites" @click="linkJump">
        <img :src="favorites" class="favorites__img">
        <div class="favorites__not-auth" v-if="notAuthPage">
            <h4>Вам необходимо авторизоваться!</h4>
        </div>
    </div>
</template>

<script setup>
import favorites from '@/assets/img/svg/favorites1.svg'
import { useAllData } from '@/store/AllData';
import { useMainStore } from '@/store/MainStore';
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
const AllData = useAllData()
const MainStore = useMainStore()
const router = useRouter()
const notAuthPage = ref(false)
const linkJump = ()=>{
    if (MainStore.isAuthUser === 'isAuth') {
        AllData.setActivePagePersonalAccount(2)
        router.push('/personal-account')
    } else {
        notAuthPage.value = true
        setTimeout(()=>{notAuthPage.value = false}, 3000)
    }
}
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.favorites {
    width: rem(50);
    height: rem(50);
    border-radius: 16px;
    cursor: pointer;
    border: 1px solid #E1E1E1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -10px;
    position: relative;
    & a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &__not-auth {
        background-color: #fff;
        z-index: 3;
        border-radius: 16px;
        position: absolute;
        width: rem(220);
        height: fit-content;
        padding: 25px;
        bottom: rem(-100);
        animation: opacity .5s;
        display: flex;
        flex-direction: column;
        gap: 12px;
        box-shadow: 0px 2px 8px 0px #00000040;
        color: var(--red);
        font-weight: 600;
    }
    &:hover {
        .favorites__img {
            animation: heart .8s;
        }
    }
}
@keyframes heart {
    0% {
        transform: scale(1);
    } 25% {
        transform: scale(1.2);
    } 50% {
        transform: scale(1);
    } 75% {
        transform: scale(1.2);
    } 100% {
        transform: scale(1);
    }
    
}
</style>
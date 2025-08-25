<template>
    <div class="menu" @click.stop>
        <h4 class="menu__title">{{ setTitle }}</h4>
        <Authorization v-if="activePage === 1" @next-page="nextPage"></Authorization>
        <PhoneNumber v-else-if="activePage === 2" @next-page="nextPage"></PhoneNumber>
        <Confirmation v-else-if="activePage === 3" @close-auth="$emit('close-auth')"></Confirmation>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import Confirmation from '@/components/header/action-buttons/profile-menu/Сonfirmation.vue'
import Authorization from './Authorization.vue';
import PhoneNumber from './PhoneNumber.vue';
const activePage = ref(1)
const nextPage = ()=>{
    activePage.value++
}
const setTitle = computed(()=>{
    if (activePage.value === 3) {
        return 'Подтверждение'
    } else if (activePage.value === 2) {
        return 'Введите номер телефона'
    } else if (activePage.value === 1) {
        return 'Авторизируйтесь '
    }
})
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.menu {
    background-color: #fff;
    z-index: 3;
    border-radius: 16px;
    position: absolute;
    width: rem(310);
    height: rem(330);
    padding: 17px 23px;
    bottom: rem(-350);
    animation: opacity .5s;
    display: grid;
    grid-template-rows: auto 1fr; 
    box-shadow: 0px 2px 8px 0px #00000040;
    &__title {
        color: #000;
        font-size: 22px;
        font-weight: 600;
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
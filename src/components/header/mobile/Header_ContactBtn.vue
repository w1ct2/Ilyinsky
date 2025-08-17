<template>
    <div class="contacts">
        <img :src="contacts" class="contacts__img">
    </div>
</template>

<script setup>
import contacts from '@/assets/img/svg/contacts1.svg'
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
    &:hover {
        .contacts__img {
            animation: people .5s;
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
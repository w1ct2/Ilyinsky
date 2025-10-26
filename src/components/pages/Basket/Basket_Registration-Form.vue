<template>
    <form class="registration__form">
        <h4 class="registration__form-title">Ваши данные</h4>
        <div class="registration__form-item">
            <p class="registration__form-info">{{ MainStore.userFullName }}</p>
            <RouterLink :to="'/personal-account'" class="registration__form-link">Изменить получателя</RouterLink>
        </div>
        <div class="registration__form-item">
            <p class="registration__form-info">{{ MainStore.mainPhoneUser }}</p>
            <RouterLink :to="'/personal-account'" class="registration__form-link">Изменить контактный номер для заказа</RouterLink>
        </div>
        <p class="registration__form-alert">К этому номеру телефона привязана карта №nnnnnnn</p>
    </form>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore'
const MainStore = useMainStore()
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.registration__form {
    margin-top: rem(35);
    display: flex;
    flex-direction: column;
    gap: rem(20);
    &-title {
        font-weight: 600;
        font-size: 22px;
    }
    &-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &-info {
        font-size: 20px;
    }
    &-link {
        color: var(--red);
        font-size: 14px;
    }
    &-alert {
        color: #00000080;
        font-size: 18px;
        margin-top: rem(-10);
    }
}
</style>
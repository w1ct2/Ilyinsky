<template>
<form class="form">
        <h4 class="title">Выберите адрес самовывоза</h4>
        <Pickup_InputContainer></Pickup_InputContainer>
        <h4 class="title">Последние адреса</h4>
        <Pickup_RecentAddresses></Pickup_RecentAddresses>
        <h4 class="title">Когда зайдете в магазин?</h4>
        <Pickup_Select></Pickup_Select>
    </form>
</template>

<script setup>
import Pickup_Select from './Pickup_Select.vue';
import Pickup_InputContainer from './Pickup_InputContainer.vue';
import Pickup_RecentAddresses from './Pickup_RecentAddresses.vue';
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.form {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    cursor: default;
    &__address {
        display: flex;
        align-items: center;
        gap: 25px;
    }
    &__delete {
        cursor: pointer;
        margin-left: auto;
    }
    @media (max-width: 1000px) {
        & {
            max-width: rem(480);
        }
    }
}
.title {
    font-size: 20px;
    font-weight: 500;
    @media (max-width: 768px) {
        font-size: 18px;
    }
    @media (max-width: 480px) {
        font-size: 16px;
        font-weight: 600;
    }
}
</style>
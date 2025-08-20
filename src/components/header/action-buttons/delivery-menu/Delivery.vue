<template>
    <form class="form">
        <h4 class="title">Выберите адрес доставки</h4>
        <div class="form__input">
            <input type="text" placeholder="Введите адрес доставки">
            <button :style="{backgroundImage: `url(${accept})`}" @click.prevent></button>
        </div>
        <h4 class="title">Последние адреса</h4>
        <div class="form__addresses">
            <div 
                class="form__address"
                v-for="address in MainStore.addressesDelivery"
                :key="address.id">
                <img :src="addressImg">
                <p>{{ address.address }}</p>
                <img :src="deleteBtn" class="form__delete">
            </div>
        </div>
        <h4 class="title">Когда доставить?</h4>
    </form>
</template>

<script setup>
import accept from '@/assets/img/svg/accept.svg'
import addressImg from '@/assets/img/svg/address1.svg'
import deleteBtn from '@/assets/img/svg/delete1.svg'
import { useMainStore } from '@/store/MainStore';
const MainStore = useMainStore()
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.form {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    cursor: default;
    &__input {
        position: relative;
        display: flex;
        align-items: center;
        & input {
            height: rem(45);
            width: 100%;
            border: 1px solid #E1E1E1;
            border-radius: 16px;
            color: #000;
            padding-left: 15px;
            padding-right: 40px;
            &::placeholder {
                color: #6B6B6B;
            }
        }
        & button {
            position: absolute;
            z-index: 2;
            cursor: pointer;
            right: 12px;
            height: 100%;
            width: rem(24);
            background-repeat: no-repeat;
            background-position: center;
            background-size: 100%;
        }
    }
    &__address {
        display: flex;
        align-items: center;
        gap: 25px;
    }
    &__addresses {
        display: flex;
        flex-direction: column;
        gap: 40px;
        margin-bottom: rem(55);
    }
    &__delete {
        cursor: pointer;
    }
}
.title {
    font-size: 20px;
    font-weight: 500;
}
</style>
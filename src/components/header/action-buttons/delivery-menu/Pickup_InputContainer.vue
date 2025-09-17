<template>
    <div class="input-container">
        <div 
            class="input" 
            :class="{'input--active': addressValue,
            'input--error': addressValue === 'Выберите правильный адрес!'}">
            <input 
                type="text" 
                placeholder="Введите адрес доставки" 
                v-model="addressValue" 
                disabled>
            <div 
                class="input--remove-value" 
                v-if="addressValue"
                @click="removeActiveAddress"></div>
        </div>
        <div class="input__list" @click="isActiveList = !isActiveList">
            <div class="input__list-btn"><span></span></div>
            <p>Список</p>
        </div>
        <Pickup_List v-show="isActiveList" @close-list="isActiveList = false"></Pickup_List>
    </div>
</template>

<script setup>
import Pickup_List from './Pickup_List.vue';
import { computed, ref } from 'vue';
import { useRecentAddressesStore } from '@/store/RecentAddressesStore';
const RecentAddressesStore = useRecentAddressesStore()
const isActiveList = ref(false)
const addressValue =  computed(()=> RecentAddressesStore.activeAddress)
const removeActiveAddress = ()=>{
    RecentAddressesStore.setActiveAddress('')
}
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.input {
    height: rem(45);
    width: 100%;
    border: 1px solid #E1E1E1;
    border-radius: 16px;
    color: #000;
    padding-left: 15px;
    padding-right: 40px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    & input {
        width: 100%;
        height: 100%;
        color: inherit;
    }
    &--error {
        color: var(--red);
    }
    &--active {
        border: 1px solid var(--red);
    }
    &--remove-value {
        cursor: pointer;
        width: rem(19);
        height: rem(19);
        position: absolute;
        right: 8px;
        transform: rotate(45deg);
        display: flex;
        align-items: center;
        justify-content: center;
        &::after, &::before {
            content: '';
            position: absolute;
            background-color: #AAAAAA;
        }
        &::after {
            width: 100%;
            height: rem(2.5);
        }
        &::before {
            height: 100%;
            width: rem(2.5);
        }
    }
    &::placeholder {
        color: #6B6B6B;
    }
    &-container {
        position: relative;
        display: flex;
        align-items: center;
        gap: 8px;
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
    &__list {
        display: flex;
        gap: 10px;
        align-items: center;
        width: rem(125);
        height: 100%;
        border: 1px solid #E1E1E1;
        border-radius: 16px;
        padding: 0 10px;
        cursor: pointer;
    }
    &__list-btn {
        width: rem(16);
        height: rem(14);
        display: flex;
        justify-content: center;
        align-items: center;
        & span {
            background-color: #AAAAAA;
            width: 100%;
            height: rem(2.5);
            position: relative;
            &::after, &::before {
                content: '';
                width: 100%;
                height: inherit;
                background-color: #AAAAAA;
                position: absolute;
            }
            &::after {
                bottom: -5px;
            }
            &::before {
                top: -5px;
            }
        }
    }
}
</style>
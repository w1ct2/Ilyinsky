<template>
    <div class="list" @click="$emit('close-list')">
        <div class="list__inner" @click.stop>
            <img :src="close" @click="$emit('close-list')" class="list__closeBtn">
            <h4 class="list__title">Выбор магазина</h4>
            <div class="list__search">
                <input type="text" placeholder="Выберите адрес" class="list__input" v-model="searchValue">
                <img :src="search">
            </div>
            <div class="list__addresses">
                <Pickup_ListItem
                    v-for="address in searchAddresses"
                    :key="address.id"
                    :data="address"
                    class="list__addresses-item"
                    @close-list="$emit('close-list')"></Pickup_ListItem>
            </div>
        </div>
    </div>
</template>

<script setup>
import close from '@/assets/img/svg/close2.svg'
import search from '@/assets/img/svg/search1.svg'
import { computed, ref } from 'vue';
import { useAddressesStore } from '@/store/AddressesStore';
import Pickup_ListItem from './Pickup_List-Item.vue';
const AddressesStore = useAddressesStore()
const addresses = AddressesStore.storesAddresses
const searchAddresses = computed(()=>{
    if (!searchValue.value.trim()) return addresses;
    const searchTerm = searchValue.value.toLowerCase().trim();
    return addresses.filter(item => 
        item.text.toLowerCase().includes(searchTerm) ||
        item.title.toLowerCase().includes(searchTerm)
    );
})
const searchValue = ref('')
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.list {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, .5);
    animation: opacity .5s;
    &__closeBtn {
        position: absolute;
        user-select: none;
        cursor: pointer;
        width: rem(35);
        height: rem(35);
        top: rem(10);
        right: rem(10);
    }
    &__inner {
        position: relative;
        overscroll-behavior: contain;
        overflow-y: scroll ;
        scrollbar-color: #FF9E9E;
        // &::-webkit-scrollbar {
        //     width: 8px;
        // }
        // ::-webkit-scrollbar-track {
        //     background: #FF9E9E;
        // }
        // ::-webkit-scrollbar-thumb {
        //     background: #FF9E9E;
        // }
        // &::-webkit-scrollbar-thumb:hover {
        //     background: #E59400;
        // }
        background-color: #fff;
        width: rem(510);
        height: 95vh;
        border-radius: rem(20);
        padding: 30px 35px;
    }
    &__title {
        font-size: 20px;
        font-weight: 700;
    }
    &__search {
        height: rem(50);
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;
        margin-top: rem(25);
        & img {
            position: absolute;
            right: 15px;
            transition: all .3s ease;
        }
        &:hover {
            .search__img {
                transform: rotate(-15deg) scale(1.2);
            }
        }
    }
    &__input {
        width: 100%;
        height: 100%;
        padding-left: 15px;
        padding-right: 40px;
        color: #6B6B6B;
        border-radius: 16px;
        border: 1px solid #E1E1E1;
    }
    &__addresses {
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin-top: rem(30);
        &-item {
            cursor: pointer;
            &:hover h6 {
                color: var(--red);
            }
        }
    }
}
</style>
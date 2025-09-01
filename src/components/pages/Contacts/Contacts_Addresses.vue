<template>
    <section class="addresses">
        <div class="container">
            <div class="addresses__inner">
                <h2 class="addresses__title catalog-title">МАГАЗИНЫ ГК «ИЛЬИНСКИЙ»</h2>
                <div class="addresses__container">
                    <Contacts_AddressesItem
                        v-for="address in addresses"
                        :key="address.id"
                        :data="address"></Contacts_AddressesItem>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Contacts_AddressesItem from '@/components/pages/Contacts/Contact_Addresses-Item.vue'
import { ref } from 'vue';
import { useAddressesStore } from '@/store/AddressesStore';
const AddressesStore = useAddressesStore()
const addresses = AddressesStore.storesAddresses
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.addresses {
    margin-bottom: rem(190);
    color: #000;
    &__container {
        margin-top: rem(45);
        display: grid;
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 20px;
        row-gap: 50px;
    }
    &__img1 {
        grid-row: 1/2;
    }
    &__img2 {
        grid-column: 1/2;
        grid-row: 3/4;
    }
    @media (max-width: 1000px) {
        &__item {
            &-title {
                font-size: 20px;
            }
            &-p, &-time {
                font-size: 18px;
            }
        }
    }
    @media (max-width: 768px) {
        &__container {
            grid-template-columns: repeat(2, 1fr);
        }
        &__item {
            &-title {
                font-size: 19px;
            }
            &-p, &-time {
                font-size: 17px;
            }
        }
        & {
            margin-bottom: rem(140);
        }
    }
    @media (max-width: 480px) {
        &__container {
            grid-template-columns: 1fr;
        }
        &__item {
            &-title {
                font-size: 18px;
            }
            &-p, &-time {
                font-size: 16px;
            }
        }
        & {
            margin-bottom: rem(100);
        }
    }
}
</style>
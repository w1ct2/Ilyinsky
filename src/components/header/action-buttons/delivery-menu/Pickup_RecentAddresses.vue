<template>
    <div class="recent-addresses">
        <div 
            class="recent-addresses__item"
            v-for="address in addresses"
            :key="address.id">
                <img :src="addressImg">
                <p @click="setActiveAddress(address)">{{ address.text }}</p>
                <img :src="deleteBtn" class="recent-addresses__delete" @click="deleteAddress(address)">
        </div>
        <p class="precent-addresses--else" v-if="!addresses.length">Недавних адресов пока нет.</p>
    </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import addressImg from '@/assets/img/svg/address1.svg'
import deleteBtn from '@/assets/img/svg/delete1.svg'
import { useRecentAddressesStore } from '@/store/RecentAddressesStore';
const RecentAddressesStore = useRecentAddressesStore()
const addresses = computed(()=> RecentAddressesStore.addressesPickup)
const setActiveAddress = (address) =>{
    RecentAddressesStore.setActiveAddress(address.text)
}
const deleteAddress = (address) => {
    RecentAddressesStore.deleteAddressPickup(address)
}
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.recent-addresses {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: rem(55);
    &--else {
        font-size: 14px;
        color: #6B6B6B;
        margin-bottom: 1.875rem;
    }
    &__item {
        display: flex;
        gap: 20px;
        & p {
            cursor: pointer;
        }
    }
    &__delete {
        cursor: pointer;
    }
}
</style>
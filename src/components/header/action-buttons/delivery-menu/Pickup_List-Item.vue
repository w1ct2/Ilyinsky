<template>
    <div class="address" @click="selectAddress(data)">
        <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" class="address__img1">
            <path d="M13.1943 0.0450275L0.362581 5.29437C-0.17709 5.51514 -0.0946037 6.30375 0.479078 6.40805L6.49767 7.50235L7.59196 13.5209C7.69627 14.0946 8.48487 14.1771 8.70565 13.6374L13.955 0.805717C14.1508 0.327043 13.673 -0.150811 13.1943 0.0450275Z"/>
        </svg>
        <h6 class="address__title">{{ data.title }}</h6>
        <p 
            class="address__p"
            @click="setActiveAddress(data)">{{ data.text }}</p>
        <img :src="clock" alt="" class="address__img2">
        <p class="address__time">{{ data.time }}</p>
    </div>
</template>

<script setup>
import clock from '@/assets/img/svg/clock1.png'
import { useRecentAddressesStore } from '@/store/RecentAddressesStore'
const RecentAddressesStore = useRecentAddressesStore()
const emits = defineEmits(['close-list'])
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})
const selectAddress = (data)=>{
    RecentAddressesStore.addAddressesPickup(data)
    emits('close-list')
}
const setActiveAddress = (data) => {
    RecentAddressesStore.setActiveAddress(data.text)
}
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.address {
    display: grid;
    grid-template-columns: 17px 1fr;
    column-gap: 15px;
    row-gap: 15px;
    &:hover {
        .address__title {
            color: var(--red);
        }
        .address__img1 {
            fill: var(--red);
        }
    }
    &__title {
        font-weight: 700;
        font-size: 22px;
    }
    &__p, &__time {
        font-size: 20px;
        grid-column: 2/3;
    }
    & img {
        margin: auto;
    }
    &__img1 {
        grid-row: 1/2;
        margin: auto;
    }
    &__img2 {
        grid-column: 1/2;
        grid-row: 3/4;
    }
    @media (max-width: 480px) {
        & {
            gap: rem(10);
        }
        &__title {
            font-size: 20px;
        }
        &__p {
            font-size: 18px;
        }
        &__time {
            font-size: 16px;
        }
    }
}
</style>
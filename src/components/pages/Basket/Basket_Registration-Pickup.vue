<template>
    <div class="pickup">
        <h3 class="pickup__title">Самовывоз сегодня к nn:nn</h3>
        <p class="pickup__p"><span>Заберите по адресу: </span><br>{{ RecentAddressesStore.activeAddress }}</p>
    </div>
</template>

<script setup>
import { useRecentAddressesStore } from '@/store/RecentAddressesStore';
const RecentAddressesStore = useRecentAddressesStore()
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.pickup {
    display: flex;
    flex-direction: column;
    gap: rem(25);
    margin-top: rem(50);
    &__title {
        font-size: 22px;
        font-weight: 600;
    }
    &__p {
        font-size: 20px;
        & span {
            font-weight: 600;
        }
    }
    @media (max-width: 768px) { 
        &__title {
            font-size: 20px;
        }
        &__p {
            font-size: 18px;
        }
    }
}
</style>
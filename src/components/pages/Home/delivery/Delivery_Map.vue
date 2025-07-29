<template>
    <div class="map">
        <p class="map__title">Карта доставки</p>
        <div class="map__inner">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1122.7654519384569!2d37.624558076879!3d55.749279138561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a57b4d91759%3A0x8488b2e76e30a467!2z0JHQtdC60LvQtdC80LjRiNC10LLRgdC60LDRjyDQsdCw0YjQvdGP!5e0!3m2!1sru!2sru!4v1753793958761!5m2!1sru!2sru" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore'
const mainStore = useMainStore()
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.map {
    display: flex;
    flex-direction: column;
    gap: 20px;
    &__title {
        font-size: 20px;
        color: var(--red);
    }
    &__inner {
        max-height: 480px;
        height: 100vh;
        border-radius: 23px;
        & iframe {
            border-radius: 23px;
        }
    }
    @media (max-width: 768px) {
        &__inner {
            max-height: 400px;
        }
    }
    @media (max-width: 480px) {
        &__inner {
            max-height: 250px;
        }
    }
}
</style>

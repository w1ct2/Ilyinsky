<template>
    <div class="footer-bottom">
        <article class="footer-bottom__article">© 2022 Ильинский онлайн — доставкатоваров и продуктов на дом</article>
        <article class="footer-bottom__article">Информация на сайте не является публичной офертой</article>
        <div class="footer-bottom__icons">
            <img :src="visa" alt="">
            <img :src="masterCard" alt="">
            <img :src="madeIn" alt="">
        </div>
    </div>
</template>

<script setup>
import visa from '@/assets/img/footer/visa.svg'
import masterCard from '@/assets/img/footer/master-card.svg'
import madeIn from '@/assets/img/footer/made-in.svg'

import { useMainStore } from '@/store/MainStore'
const mainStore = useMainStore()
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.footer-bottom {
    display: flex;
    justify-content: space-between;
    grid-column: 1/5;
    align-items: center;
    font-size: 12px;
    flex-wrap: wrap;
    gap: 20px;
    &__icons {
        display: flex;
        align-items: center;
        gap: 20px;
    }
    @media (max-width: 560px) {
        &__icons {
            flex-wrap: wrap;
            gap: 10px;
        }
    }
}
</style>

<template>
    <div class="footer-contacts">
        <div class="footer-contacts__phone">
            <img :src="phone" alt="">
            <h4>+38 (000) 49-09-99</h4>
            <p>Ежедневно c 09:00 до 21:00</p>
        </div>
        <div class="footer-contacts__item">
            <img :src="compass" alt="">
            <a href="">Адреса магазинов</a>
        </div>
        <div class="footer-contacts__item">
            <img :src="insta" alt="">
            <a href="">Следите за нами</a>
        </div>
        <div class="footer-contacts__item">
            <img :src="mail" alt="">
            <a href="">Обратная связь</a>
        </div>
    </div>
</template>

<script setup>
import compass from '@/assets/img/footer/compass.svg'
import insta from '@/assets/img/footer/insta.svg'
import phone from '@/assets/img/footer/phone-call.svg'
import mail from '@/assets/img/footer/mail.svg'

import { useMainStore } from '@/store/MainStore'
const mainStore = useMainStore()
</script>

<style lang="scss">
@function rem($pixels) {
    @return calc($pixels / 16) * 1rem;
}
.footer-contacts {
    display: flex;
    flex-direction: column;
    gap: 7px;
    &__phone {
        display: grid;
        grid-template-columns: 25px auto;
        grid-template-rows: 27px 19px;
        column-gap: 10px;
        & img{
            grid-row: 1/3;
        }
        & h4 {
            font-size: 20px;
            font-weight: 600;
        }
        & p {
            font-size: 14px;
            opacity: .4;
        }
    }
    &__item {
        display: flex;
        align-items: center;
        gap: 22px;
        & img {
            max-width: 15px;
        }
        & a {
            color: #fff;
        }
    }
}
</style>

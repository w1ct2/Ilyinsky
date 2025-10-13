<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__inner">
                <Footer_Links 
                    :strong="'Ильинский онлайн'" 
                    :links="links1"
                    class="footer__links-1"></Footer_Links>
                <Footer_Links 
                    :strong="'Ильинский клуб'" 
                    :links="links2"
                    class="footer__links-2"></Footer_Links>
                <Footer_Contacts class="footer__contacts"></Footer_Contacts>
                <Footer_Form class="footer__form"></Footer_Form>
                <Footer_Bottom class="footer__bottom"></Footer_Bottom>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue';
import Footer_Links from './Footer_Links.vue';
import Footer_Contacts from './Footer_Contacts.vue';
import Footer_Form from './Footer_Form.vue';
import Footer_Bottom from './Footer_Bottom.vue';

import { useMainStore } from '@/store/MainStore'
const links1 = ref([
    {
        id: 1,
        name: 'Кулинария',
        url: '/catalog'
    },
    {
        id: 2,
        name: 'Супермаркет',
        url: '/catalog'
    },
    {
        id: 3,
        name: 'Заморозка',
        url: '/catalog'
    },
    {
        id: 4,
        name: 'Другое',
        url: '/catalog'
    },
])
const links2 = ref([
    {
        id: 1,
        name: 'Акции',
        url: '/promotions'
    },
    {
        id: 2,
        name: 'Доставка и оплата',
        url: ''
    },
    {
        id: 3,
        name: 'Контакты',
        url: '/contacts'
    },
    {
        id: 4,
        name: 'Политика конфиденциальности',
        url: ''
    },
    {
        id: 5,
        name: 'Вакансии',
        url: '/vacancies'
    },
])
const mainStore = useMainStore()
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.footer {
    width: 100%;
    background-color: var(--red);
    padding-top: 35px;
    padding-bottom: 20px;
    &__inner {
        width: 100%;
        height: 100%;
        display: grid;
        justify-content: space-between;
        grid-template-columns: repeat(4, auto);
        grid-template-rows: auto auto;
    }
    @media (max-width: 1200px) {
        &__inner {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, auto);
            gap: 30px;
        }
        &__bottom {
            grid-column: 1/3;
            justify-content: center;
        }
    }
    @media (max-width: 1000px) {
        padding-bottom: 75px;
    }
    @media (max-width: 560px) {
        &__contacts {
            grid-row: 1/2;
            grid-column: 1/3;
        }
        &__form {
            grid-row: 2/3;
            grid-column: 1/3;
        }
    }
}
</style>

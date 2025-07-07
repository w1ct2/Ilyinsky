<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__inner">
                <Footer_Links :strong="'Ильинский онлайн'" :links="links1"></Footer_Links>
                <Footer_Links :strong="'ильинский онлайн'" :links="links2"></Footer_Links>
                <Footer_Contacts></Footer_Contacts>
                <Footer_Form></Footer_Form>
                <Footer_Bottom></Footer_Bottom>
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
        url: ''
    },
    {
        id: 2,
        name: 'Супермаркет',
        url: ''
    },
    {
        id: 3,
        name: 'Заморозка',
        url: ''
    },
    {
        id: 4,
        name: 'Другое',
        url: ''
    },
])
const links2 = ref([
    {
        id: 1,
        name: 'Акции',
        url: ''
    },
    {
        id: 2,
        name: 'Доставка и оплата',
        url: ''
    },
    {
        id: 3,
        name: 'Программа лояльности',
        url: ''
    },
    {
        id: 4,
        name: 'Политика конфиденциальности',
        url: ''
    },
    {
        id: 5,
        name: 'Вакансии',
        url: ''
    },
])
const mainStore = useMainStore()
</script>

<style lang="scss">
@function rem($pixels) {
    @return calc($pixels / 16) * 1rem;
}
.footer {
    width: 100%;
    height: rem(285);
    background-color: var(--red);
    padding-top: 35px;
    padding-bottom: 20px;
    &__inner {
        width: 100%;
        height: 100%;
        display: grid;
        justify-content: space-between;
        grid-template-columns: repeat(4, auto);
    }
}
</style>

<template>
    <section class="contacts">
        <div class="container">
            <div class="contacts__inner">
                <h2 class="contacts__title catalog-title">контакты</h2>
                <div class="contacts__container">
                    <div class="contacts__doc">
                        <p>Ильинский онлайн - группа компаний... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima. </p>
                        <p>ОГР ИНН какие то контакты... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, mollitia?</p>
                    </div>
                    <div class="contacts__info">
                        <p>Телефон: <br>8 800 302-00-60</p>
                        <p>Вопросы, отзывы и предложения: <br>feedback@адрес</p>
                    </div>
                </div>
                <div class="contacts__map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1122.7654519384569!2d37.624558076879!3d55.749279138561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a57b4d91759%3A0x8488b2e76e30a467!2z0JHQtdC60LvQtdC80LjRiNC10LLRgdC60LDRjyDQsdCw0YjQvdGP!5e0!3m2!1sru!2sru!4v1753793958761!5m2!1sru!2sru" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.contacts {
    color: #000;
    &__inner {
        width: 100%;
    }
    &__container {
        display: flex;
        justify-content: space-between;
        margin-top: rem(50);
        gap: 30px;
    }
    &__doc {
        display: flex;
        flex-direction: column;
        gap: 30px;
        max-width: rem(530);
        & p {
            font-size: 24px;
        }
    }
    &__info {
        height: rem(205);
        padding: 30px;
        border-radius: 16px;
        border: 1px solid #FFE7B9;
        background-color: #FFECCA;
        max-width: rem(420);
        width: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        & p {
            font-size: 22px;
        }
    }
    &__map {
        margin-top: rem(50);
        margin-bottom: rem(90);
        width: 100%;
        aspect-ratio: 1290/450;
        border-radius: 16px;
        & iframe {
            border-radius: inherit;
        }
    }
    @media (max-width: 1000px) {
        &__doc {
            & p {
                font-size: 20px;
            }
        }
        &__info {
            max-width: rem(360);
            & p {
                font-size: 18px;
            }
        }
    }
    @media (max-width: 768px) {
        &__container {
            flex-direction: column;
        }
        &__doc {
            & p {
                font-size: 18px;
            }
        }
        &__info {
            max-width: rem(260);
            height: rem(160);
            padding: 20px;
            & p {
                font-size: 14px;
            }
        }
        &__map {
            aspect-ratio: 1290/800;
        }
    }
    @media (max-width: 480px) {
        
    }
}
</style>
<template>
    <section class="section">
        <div class="container">
            <div class="section__inner">
                <Section_Header :title="title" :category="category"></Section_Header>
                <Section_Content :data="data"></Section_Content>
            </div>
        </div>
    </section>
</template>

<script setup>
import Section_Header from './Section_Header.vue';
import Section_Content from './Section_Content.vue';
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    data: {
        type: Array, 
        required: true
    },
    category: String
})
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.section {
    &__inner {
        margin-top: rem(150);
    }
    @media (max-width: 1300px) {
    &__inner {
        margin-top: rem(120);
    }
    }
    @media (max-width: 1000px) {
    &__inner {
        margin-top: rem(100);
    }
    }
    @media (max-width: 768px) {
    &__inner {
        margin-top: rem(80);
    }
    }
    @media (max-width: 480px) {
    &__inner {
        margin-top: rem(60);
    }
    }
}
</style>

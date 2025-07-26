<template>
    <section class="section">
        <div class="container">
            <div class="section__inner">
                <Section_Header :title="'Супермаркет'"></Section_Header>
                <Section_Content :data="sectionStore.superMarket"></Section_Content>
            </div>
        </div>
    </section>
</template>

<script setup>
import Section_Header from './Section_Header.vue';
import Section_Content from './Section_Content.vue';
import { useSectionStore } from '@/store/SectionStore'
const sectionStore = useSectionStore()
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.section {
    &__inner {
        margin-top: 150px;
    }
}
</style>

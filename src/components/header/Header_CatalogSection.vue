<template>
    <div class="section">
        <h4 class="section__title">{{ title }}</h4>
        <ul class="section__list">
            <li 
                class="section__item" 
                v-for="link in links"
                :key="link.id">
                <RouterLink :to="link.url">{{ link.name }}</RouterLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
const props = defineProps({
    title: {
        type: String
    },
    links: {
        type: Array
    }
})
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.section {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 35px;
    color: #000;
    overflow-y: scroll;
    scrollbar-width: 0;

    &::-webkit-scrollbar {
        display: none;
    }
    &__title {
        font-size: 20px;
        font-weight: 700;
    }
    &__list {
        font-size: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    &__item {
        font-size: 20px;
        &:hover {
            color: var(--red);
        }
        & a {
            color: inherit;
            font-size: inherit;
        }
    }
}
</style>
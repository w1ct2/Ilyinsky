<template>
    <div class="catalog">
        <h2 class="catalog__title">{{ title }}</h2>
        <ul class="catalog__list">
            <li 
                class="catalog__item"
                v-for="(label, index) in labels"
                :key="label.id"
                >{{ label.name }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore'
const mainStore = useMainStore()
const props = defineProps({
    title: {
        type: String
    },
    labels: {
        type: Array,
        required: true
    }
})
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.catalog {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #000000;
    max-width: rem(290);
    width: 100%;
    padding: 0 20px;
    border-right: 1px solid #E7EFEE;
    &__title {
        text-transform: uppercase;
        font-size: 19px;
        font-weight: 600;
    }
    &__list {
        display: flex;
        flex-direction: column;
        font-size: 18px;
        gap: 15px;
    }
    &__item {
        display: flex;
        align-items: center;
        position: relative;
        max-width: rem(260);
        // overflow: hidden;
        // white-space: nowrap;
        &:hover {
            color: var(--red);
            &::after:hover, &::before:hover {
                background-color: var(--red);
            }
        }
        &::after, &::before {
            content: '';
            position: absolute;
            background-color: #000000;
            height: 2px;
            width: 7px;
            right: 0;
        }
        &::after {
            transform: rotate(-45deg) translate(0, -50%);
            margin-top: 5px;
        }
        &::before {
            transform: rotate(45deg) translate(0, 50%);
            margin-bottom: 5px;
        }
    }
}
</style>

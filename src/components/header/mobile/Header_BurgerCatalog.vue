<template>
    <div class="catalog">
        <h2 class="catalog__title">{{ title }}</h2>
        <ul class="catalog__list">
            <li 
                class="catalog__item"
                v-for="(label) in labels"
                :key="label.id"
                ><router-link :to="label.url" @click="clickLink(label)">{{ label.name }}</router-link>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { useAllData } from '@/store/AllData'
import { useMainStore } from '@/store/MainStore'
const mainStore = useMainStore()
const AllData = useAllData()
const props = defineProps({
    title: {
        type: String
    },
    labels: {
        type: Array,
        required: true
    }
})
const clickLink = (data)=>{
    mainStore.activeBurgerMenu()
    if (data.category) {
        AllData.setCategory(data.category, data.name)
    }
}
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
        & a {
            color: inherit;
        }
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

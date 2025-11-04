<template>
    <ul class="footer-links">
        <li class="footer-links__strong"><strong>{{ strong }}</strong></li>
        <li
            v-for="(link, index) in links"
            :key="link.id"
            class="footer-links__item">
            <RouterLink :to="link.url" @click="AllData.setCategory(link.category, link.name)">{{ link.name }}</RouterLink>
        </li>
    </ul>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useAllData } from '@/store/AllData'
const AllData = useAllData()
const props = defineProps({
    strong: {
        type: String
    },
    links: {
        type: Array
    }
})
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.footer-links {
    display: flex;
    flex-direction: column;
    gap: 7px;
    &__strong {
        font-weight: 700;
    }
    &__item {
        & a {
            cursor: pointer;
            color: #fff;
        }
    }
    @media (max-width: 768px) {
        font-size: 14px;
    }
}
</style>

<template>
    <ul class="footer-links">
        <li class="footer-links__strong"><strong>{{ strong }}</strong></li>
        <li
            v-for="(link, index) in links"
            :key="link.id"
            class="footer-links__item">
            <a href="#">{{ link.name }}</a>
        </li>
    </ul>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore'
const mainStore = useMainStore()
const props = defineProps({
    strong: {
        type: String
    },
    links: {
        type: Array
    }
})
</script>

<style lang="scss">
@function rem($pixels) {
    @return calc($pixels / 16) * 1rem;
}
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
}
</style>

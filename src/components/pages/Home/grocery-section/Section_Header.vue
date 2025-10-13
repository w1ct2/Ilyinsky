<template>
    <div class="section-header">
        <h2 class="section-header__title catalog-title">{{ title }}</h2>
        <RouterLink 
            class="section-header__button catalog-button"
            :to="'/catalog'">Смотреть все</RouterLink>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.section-header {
    display: flex;
    align-items: center;
    gap: 33px;
    width: 100%;
    height: rem(45);
    margin-bottom: 30px;
    @media (max-width: 768px) {
        margin-bottom: 20px;
    }
}
</style>

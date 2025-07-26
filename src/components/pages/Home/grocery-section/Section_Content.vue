<template>
    <div class="section-content">
        <div
            v-for="(item, index) in data"
            :key="item.id"
            class="section-content__item"
            :style="[item.styles]"
            >
            <h4 class="section-content__title">{{ item.name }}</h4>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    data: {
        type: Array,
        required: true
    },
    styles: {
        type: Object,
        required: true,
    }
})
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.section-content {
    width: 100%;
    min-height: rem(300);
    display: grid;
    gap: 25px;
    justify-content: space-between;
    grid-template-columns: repeat(4, 1fr);
    &__item {
        cursor: pointer;
        max-width: rem(300);
        max-height: rem(300);
        height: rem(300);
        border: 1px solid #000;
        border-radius: 58px;
        font-size: 30px;
        color: #000;
        padding: 45px 40px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: bottom right;
    }
}
</style>

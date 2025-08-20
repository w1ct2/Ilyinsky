<template>
    <div 
        class="catalog"
        :class="{'catalog--active': isHoverCatalog, 'catalog--open': isActiveCatalog}"
        @mouseenter="isHoverCatalog = !isHoverCatalog"
        @click.stop="isActiveCatalog = !isActiveCatalog">
        <div class="catalog__btn"><span></span></div>
        <p>Каталог</p>
        <Header_CatalogMenu 
            @mouseenter="isHoverCatalog = false" 
            v-if="isActiveCatalog"></Header_CatalogMenu>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Header_CatalogMenu from './Header_CatalogMenu.vue';

const isActiveCatalog = ref(false)
const isHoverCatalog = ref(false)
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.catalog {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    gap: 8px;
    border-radius: 30px;
    background-color: var(--red);
    min-width: rem(130);
    height: 100%;
    cursor: pointer;
    position: relative;
    &--active:not(.catalog--open) {
        .catalog__btn {
            transform: rotate(180deg);
        }
    }
    &--open {
        .catalog__btn {
            transform: rotate(0deg) !important;
            width: rem(20);
            height: rem(20);
            transition: all .5s ease;
            span {
                background-color: transparent !important;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                &::before {
                    transform: rotate(-45deg);
                    top: 40%;
                }
                &::after {
                    transform: rotate(45deg);
                    top: 40%;
                }
            }
        }
    }
    &__btn {
        width: rem(20);
        height: rem(14);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        transition: all .5s ease;
        & span {
            width: rem(18);
            height: rem(2);
            background-color: #fff;
            &::after, &::before {
                position: absolute;
                width: rem(18);
                height: rem(2);
                background-color: #fff;
                content: '';
            }
            &::after {
                top: 0;
            }
            &::before {
                bottom: 0;
            }
        }
    }
}
</style>
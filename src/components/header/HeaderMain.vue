<template>
    <nav class="navigation">
        <div class="container">
            <div class="navigation__inner">
                <Header_Action>
                    <template #burger-btn>
                        <Header_BurgerBtn :isActive="isActive"></Header_BurgerBtn>
                    </template>
                    <template #burger-menu>
                        <Header_BurgerMenu :isActive="isActive"></Header_BurgerMenu>
                    </template>
                </Header_Action>
                <Header_Sections></Header_Sections>
                <Header_BottomBar class="bottom-bar"></Header_BottomBar>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { computed, ref } from 'vue';
import Header_Action from './Header_Action.vue';
import Header_Sections from './Header_Sections.vue';
import Header_BurgerBtn from './mobile/Header_BurgerBtn.vue';
import Header_BurgerMenu from './mobile/Header_BurgerMenu.vue';
import Header_BottomBar from '@/components/header/mobile/Header_BottomBar.vue'

import { useMainStore } from '@/store/MainStore'
const mainStore = useMainStore()
const isActive = computed(() => mainStore.isActiveBurgerMenu)
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.navigation {
    margin: 25px 0;
    &__inner {
        display: flex;
        position: relative;
        flex-direction: column;
        max-width: rem(1290);
    }
}
.bottom-bar {
    display: none;
}
@media (max-width: 1000px) {
    .bottom-bar {
        display: flex;
    }
}
</style>
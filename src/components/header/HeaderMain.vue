<template>
    <nav class="navigation">
        <div class="container">
            <div class="navigation__inner">
                <Header_Action v-if="!mainStore.isMobile1000"></Header_Action>
                <Header_ActionMobile v-else></Header_ActionMobile>
                <Header_Sections></Header_Sections>
            </div>
        </div>
    </nav>
</template>

<script setup>
import Header_Action from './Header_Action.vue';
import Header_Sections from './Header_Sections.vue';
import Header_ActionMobile from './mobile/Header_Action-Mobile.vue';

import { useMainStore } from '@/store/MainStore'
const mainStore = useMainStore()
</script>

<style lang="scss" scoped>
@function rem($pixels) {
    @return calc($pixels / 16) * 1rem;
}
.navigation {
    margin: 25px 0;
    &__inner {
        display: flex;
        position: relative;
        flex-direction: column;
        max-width: rem(1290);
        height: rem(150);
        // border: 1px solid red;
    }
}
</style>
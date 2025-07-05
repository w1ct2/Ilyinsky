<template>
    <nav class="navigation">
        <div class="container">
            <div class="navigation__inner">
                <Header_Action></Header_Action>
                <Header_Sections></Header_Sections>
            </div>
        </div>
    </nav>
</template>

<script setup>
import Header_Action from './Header_Action.vue';
import Header_Sections from './Header_Sections.vue';
</script>

<style lang="scss" scoped>
@function rem($pixels) {
    @return calc($pixels / 16) * 1rem;
}
.navigation {
    margin: 25px 0;
    &__inner {
        display: flex;
        flex-direction: column;
        max-width: rem(1290);
        height: rem(150);
        // border: 1px solid red;
    }
}
</style>
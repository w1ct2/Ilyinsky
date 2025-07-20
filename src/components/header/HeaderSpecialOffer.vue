<template>
    <section class="special">
        <div class="special__inner">
            <h2 v-html="title"></h2>
            <button class="special__btn">{{ btn }}</button>
            <button 
                class="closeBtn" 
                :style="{backgroundImage: `url(${closeBtn})`}"
                @click="$emit('closeBlock', false)"
            ></button>
        </div>
    </section>
</template>

<script setup>
import closeBtn from '@/assets/img/svg/close1.svg'
import { ref } from 'vue'
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    btn: {
        type: String, 
        required: true
    }
})
const emit = defineEmits({
})
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.special {
    background-color: var(--red);
    position: relative;
    width: 100%;
    height: rem(80);
    display: flex;
    align-items: center;
    background: radial-gradient(62.38% 214.22% at 78.22% 32.11%, #FF0000 0%, #FF3103 100%);
    &__inner {
        display: flex;
        margin: 0 auto;
        height: rem(52);
        gap: 25px;
        align-items: center;
    }
    &__btn {
        border-radius: 31px;
        width: rem(210);
        height: rem(43);
        border: 1px solid #ffff;
        text-align: center;
        font-size: 20px;
        color: #ffff;
    }
    & h2 {
        font-weight: 900;
        font-size: 22px;
        color: #ffff;
        line-height: 1.2;
        max-width: rem(335);
        text-transform: uppercase;
        & :deep(span) {
            color: var(--red);
            background-color: var(--yelow);
            border-radius: 9px;
        }
    }
    @media (max-width: 769px) {
        & {
            height: auto;
        }
        &__inner {
            flex-direction: column;
            height: auto;
            gap: 15px;
            padding: 10px 10px;
            align-items: start;
        }
        &__btn {
            font-size: 18px;
        }
        & h2 {
            font-size: 20px;
        }
    }
}
.closeBtn {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 40px;
}
</style>
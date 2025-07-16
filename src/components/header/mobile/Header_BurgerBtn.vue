<template>
    <div class="burger-btn" :class="{active: isActive}" @click="$emit('funActive', true)">
        <span></span>
    </div>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore'
import { ref } from 'vue'
const props = defineProps({
    isActive: {
        type: Boolean, 
        required: true
    }
})
const mainStore = useMainStore()
</script>

<style lang="scss" scoped>
@function rem($pixels) {
    @return calc($pixels / 16) * 1rem;
}

.burger-btn {
    width: 40px;
    height: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 6;
    position: relative;
    transition: all 0.5s ease 0s;
    & span {
        height: 3px;
        width: 38px;
        transform: scale(1);
        background-color: var(--red);
    }
    &::after, &::before {
        position: absolute;
        content: '';
        height: 3px;
        width: 38px;
        background-color: var(--red);
        transition: all 0.5s ease 0s;
    }
    &.active {
        position: fixed;
        top: 40px;
        left: 20px;
    }
    &::before {
        bottom: 0;
    }
    &::after {
        top: 0;
    }
    &.active span {
        transform: scale(0);
    }
    &.active::after {
        top: 48%;
        transform: rotate(-45deg) translate(0, -50%);
    }
    &.active::before{
        bottom: 48%;
        transform: rotate(45deg) translate(0, 50%);
    }
    @media (max-width: 768px) {
        width: 30px;
        height: 20px;
        & span {
            width: inherit;
        }
        &::after, &::before {
            width: inherit;
        }
    }
}
</style>

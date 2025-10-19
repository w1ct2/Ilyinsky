<template>
    <div class="action-block" :class="{'action-block--error': quantityLimit}">
        <svg 
        width="12" 
        height="14" 
        viewBox="0 0 12 14" fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        class="action-block__btn"
        v-if="quantity === 1"
        @click="BasketData.deleteFromStorage(data.id)">
            <path d="M1.71429 4.75V12.25C1.71429 12.75 1.95238 13 2.42857 13C2.90476 13 5.28571 13 9.57143 13C10.0476 13 10.2857 12.75 10.2857 12.25C10.2857 11.75 10.2857 9.25 10.2857 4.75M11 1.75H1H11ZM7.42857 1H4.57143H7.42857Z" stroke="#FFA900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="action-block__btn" v-else @click="updateQuantity('minus')">-</span>
        <span class="action-block__quantity">{{ quantity }}</span>
        <span class="action-block__btn" @click="updateQuantity('plus')">+</span>
    </div>
</template>

<script setup>
import { useBasketData } from '@/store/BasketData';
import { ref } from 'vue';
const props = defineProps({
    data: {
        type: Object
    }
})
const emits = defineEmits(['quantityUpdate'])
const quantity = ref(1)
const quantityLimit = ref(false)
const BasketData = useBasketData()
const updateQuantity = (method) => {
    if (method === 'plus') {
        if (props.data.availability > quantity.value) {
            quantity.value++
        } else {
            quantityLimit.value = true
        }
    } else if (method === 'minus') {
        quantity.value--
        if (quantityLimit.value) {
            quantityLimit.value = false
        }
    }
    emits('quantityUpdate', quantity.value)
}
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.action-block {
    width: rem(110);
    height: rem(40);
    border: 1px solid #FFE7B9;
    border-radius: rem(45);
    background-color: #FFF8EB;
    margin-left: rem(15);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: rem(20);
    color: #FFA900;
    font-weight: 600;
    &--error {
        border: 1px solid var(--red)
    }
    &__btn {
        font-size: 20px;
        cursor: pointer;
        width: rem(15);
        user-select: none;
    }
    &__quantity {
        font-size: 20px;
    }
}
</style>
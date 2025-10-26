<template>
    <form class="checkbox">
        <input 
            type="radio" 
            name="delivery_checkbox" 
            id="delivery_checkbox1" 
            value="delivery"
            v-model="deliveryMethod">
        <label for="delivery_checkbox1">
            <h4 class="title">Доставка</h4>
            <p class="p">бесплатно от 500₽</p>
        </label>
        <input 
            type="radio" 
            name="delivery_checkbox" 
            id="delivery_checkbox2"
            value="pickup"
            v-model="deliveryMethod">
        <label for="delivery_checkbox2">
            <h4 class="title">Самовывоз</h4>
            <p class="p">бесплатно</p>
        </label>
    </form>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore';
import { ref, watch } from 'vue';
const MainStore = useMainStore()
const emit = defineEmits(['deliveryMethod'])
const deliveryMethod = ref(MainStore.userDeliveryMethod)
watch(deliveryMethod, (newVal)=>{
    emit('deliveryMethod', newVal)
    MainStore.setDeliveryMethod(newVal)
})
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.checkbox {
    display: flex;
    align-items: center;
    gap: 15px;
    max-height: fit-content;
    & input {
        display: none;
    }
    & label {
        max-width: rem(220);
        width: 100%;
        aspect-ratio: 220/85;
        background-color: #FFF8EB;
        border-radius: 16px;
        border: 1px solid #FFA90073;
        padding: 15px 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: #0A0A0A;
        white-space: nowrap;
        overflow: hidden;
    }
    & input:checked + label {
        color: #fff;
        background-color: #FFA900;
        border: 1px solid #FFA900;
    }
}
.title {
    font-size: 20px;
}
</style>
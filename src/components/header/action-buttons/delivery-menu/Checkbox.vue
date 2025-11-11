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
        height: rem(85);
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
    @media (max-width: 768px) {
        & {
            & label {
                height: rem(75);
            }
        }
        .title {
            font-size: 18px;
        }
        .p {
            font-size: 14px;
        }
    }
    @media (max-width: 480px) {
        & {
            & label {
                height: rem(65);
                padding: rem(10) rem(15);
                max-width: rem(170);
            }
        }
        .title {
            font-size: 16px;
        }
        .p {
            font-size: 12px;
        }
    }
}
.title {
    font-size: 20px;
}
</style>
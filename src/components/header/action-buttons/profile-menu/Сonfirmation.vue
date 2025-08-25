<template>
    <div class="confirmation">
        <p class="confirmation__p">Код подтверждения отправлен на номер  {{ phone }}</p>
        <article class="confirmation__article">Введите код подтверждения</article>
        <div class="confirmation__input-container">
            <input
                ref="firstInput"
                type="text" 
                class="confirmation__input" 
                maxlength="10" 
                @input="handleInput(0, $event)"
                @keydown="handleKeydown(0, $event)"
                v-model="codeArray[0]">
            <input 
                type="text" 
                class="confirmation__input" 
                maxlength="10"
                @input="handleInput(1, $event)"
                @keydown="handleKeydown(1, $event)"
                v-model="codeArray[1]">
            <input 
                type="text" 
                class="confirmation__input" 
                maxlength="10"
                @input="handleInput(2, $event)"
                @keydown="handleKeydown(2, $event)"
                v-model="codeArray[2]">
            <input 
                type="text" 
                class="confirmation__input" 
                maxlength="10"
                @input="handleInput(3, $event)"
                @keydown="handleKeydown(3, $event)"
                v-model="codeArray[3]">
        </div>
        <button 
            class="confirmation__button" 
            :disabled="!isCodeValid"
            :class="{'confirmation__button--active': isCodeValid}"
            @click="confirmationAuth">Подтвердить</button>
    </div>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore';
import { computed, nextTick, onMounted, ref } from 'vue';
const emits = defineEmits(['close-auth'])
const MainStore = useMainStore()
const firstInput = ref(null)
onMounted(()=>{
    firstInput.value.focus()
})
const phone = localStorage.getItem('mainPhone')
const codeArray = ref(['','','',''])
const handleInput = (index, event)=>{
    let value = event.target.value.replace(/\D/g, '')
    if (value.length > 1){
        value = value.slice(-1)
    }
    codeArray.value[index] = value;
    if(value && index < 3){
        nextTick(()=>{
            const nextInput = event.target.nextElementSibling
            if(nextInput){
                nextInput.focus()
            }
        })
    }
}
const handleKeydown = (index, event) => {
    if (event.key === "Backspace") {
        if(codeArray.value[index] && index > 0){
            event.preventDefault()
            codeArray.value[index] = '';
            nextTick(()=>{
                const prevInput = event.target.previousElementSibling
                if (prevInput) {
                    prevInput.focus()
                }
            })
        }
    }
}
const isCodeValid = computed(()=>{
    return codeArray.value.every(digit => digit !== '') &&
        codeArray.value.join('').length === 4
})
const confirmationAuth = ()=>{
    MainStore.setAuthUser()
    codeArray.value = ['']
    emits('close-auth')
}
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.confirmation {
    display: flex;
    flex-direction: column;
    &__button {
        margin-top: auto;
        font-size: 18px;
        width: rem(260);
        height: rem(45);
        border-radius: 16px;
        color: #6B6B6B;
        background-color: #F2F3F5;
        &:disabled {
            cursor: not-allowed;
        }
        &--active {
            background-color: var(--red);
            color: #fff;
        }
    }
    &__p {
        font-size: 14px;
        color: #000;
        margin-top: rem(38);
    }
    &__article {
        font-size: 14px;
        color: #6B6B6B;
        margin-top: rem(8);
    }
    &__input-container {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: rem(15);
    }
    &__input {
        width: rem(60);
        height: rem(60);
        text-align: center;
        border-radius: 16px;
        border: 1px solid #C4C4C4;
        color: #000;
    }
}
</style>
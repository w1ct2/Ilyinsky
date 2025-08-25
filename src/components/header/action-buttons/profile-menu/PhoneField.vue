<template>
    <input 
        class="input" 
        ref="inputRef" 
        type="text" 
        placeholder="+7(000)000-00-00"
        v-model="inputValue"
        @input="$emit('inputChange', inputValue)"/>
    </input>
</template>

<script setup>
import IMask from 'imask/esm/index';
import { onBeforeUnmount, onMounted, ref } from 'vue';
const inputRef = ref(null)
const inputValue = ref('')

const maskOptions = {
    mask: '+7(000)000-00-00',
    lazy: false,
    maxLength: 18,
    autofix: true,
    overwrite: true 
}
let mask = null
onMounted(() => {
    if (inputRef.value) {
        const maskOptions = {
            mask: '+7(000)000-00-00',
            lazy: false
        };
        mask = IMask(inputRef.value, maskOptions);
    }
    inputRef.value.focus()
});
onBeforeUnmount(() => {
    if (mask) {
        mask.destroy();
    }
});
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.input {
    // border: 1px solid red;
    color: #000;
    font-size: 22px;
    width: 100%;
    height: rem(30);
}
</style>
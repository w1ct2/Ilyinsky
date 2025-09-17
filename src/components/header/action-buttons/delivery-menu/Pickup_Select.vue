<template>
    <div class="select">
        <v-select
            class="select-field"
            label="name"
            v-model="selected1"
            :options="selectOptions1"></v-select>
        <v-select
            class="select-field"
            label="name"
            v-model="selected2"
            :options="selectOptions2"></v-select>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
const selectOptions1 = ref([
    { id: 1, name: 'Сегодня' },
    { id: 2, name: 'Завтра' },
    { id: 3, name: 'В понедельник' },
])
const selected1 = ref(selectOptions1.value[0]);
const selectOptions2 = ref([
    { id: 1, name: 'за 25 мин.' },
    { id: 2, name: 'с 21:00 до 23:00' },
    { id: 3, name: 'с 23:00 до 20:00' },
])
const selected2 = ref(selectOptions2.value[0]);
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.select {
    display: flex;
    gap: 15px;
    width: 100%;
    align-items: center;
    &-field {
        width: 50%;
        & :deep(.vs__dropdown-menu) {
            padding: 0;
            margin-top: 10px;
            border-radius: 14px;
            box-shadow: 0px 2px 8px 0px #00000040;
        }
        & :deep(.vs__dropdown-option) {
            font-size: 18px;
            height: rem(38);
            &:hover {
                background-color: #F4F4F4;
                color: #000;
            }
        }
        & :deep(.vs__clear) {
            display: none;
        }
        & :deep(.vs__dropdown-toggle) {
            border-radius: 16px;
            border: 1px solid #E1E1E1;
            height: rem(74);
        }
        & :deep(.vs__search) {
            width: 50%;
        }
        & :deep(.v-select) {
            width: 50% !important;
        }
        & :deep(.vs__actions) { 
            align-items: end;
            padding-bottom: 10px;
            padding-right: 17px;
        }
        & :deep(.vs__open-indicator) { 
            width: 20px;
        }
        & :deep(.vs__selected-options) { 
            flex-wrap: nowrap;
            white-space: nowrap;
            overflow: hidden;
        }
        & :deep(.vs__dropdown-toggle:focus-within) {
            border: 1px solid var(--red);
        }
    }
}
</style>
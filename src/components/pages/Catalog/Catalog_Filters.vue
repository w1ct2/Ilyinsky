<template>
    <form class="filters">
        <h4 class="filters__title">особенности</h4>
        <div class="filters__container" v-for="option in filterOptions" :key="option.value">
            <input 
                type="radio" 
                :id="`filter-${option.value}`"
                :value="option.value"
                v-model="filter"
                class="filters__input"
                @change="$emit('handleFilter', filter)">
            <label :for="`filter-${option.value}`" class="filters__label"> {{ option.label }}</label>
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue';

const filter = ref(null)
const filterOptions = ref([
    { value: 'discount', label: 'Со скидкой' },
    { value: 'availability', label: 'Не в наличии' },
    { value: 'up-to-200', label: 'Цена до 200руб' },
    { value: null, label: 'Без особенностей'}
])
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.filters {
    color: #000;
    display: flex;
    flex-direction: column;
    gap: rem(10);
    &__title {
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 600;
    }
    &__container {
        display: flex;
        align-items: center;
        gap: rem(8);
    }
    &__label {
        font-size: 20px;
        user-select: none;
    }
    &__input {
        background-color: #FFA90059;
        appearance: none;
        width: rem(17);
        height: rem(17);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        border-radius: 50%;
        cursor: pointer;
        &::after {
            content: '';
            display: none;
            width: rem(7);
            height: rem(7);
            background-color: var(--red);
            border-radius: 50%;
            position: absolute;
        }
        &:checked {
            &::after {
                display: block;
            }
        }
    }
    @media (max-width: 768px) {
        &__title {
            font-size: 18px;
        }
        &__label {
            font-size: 16px;
        }
    }
}
</style>
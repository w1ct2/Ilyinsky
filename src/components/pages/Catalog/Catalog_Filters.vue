<template>
    <form class="filters">
        <h4 class="filters__title">особенности</h4>
        <div class="filters__container">
            <input type="checkbox" class="filters__input" name="filters" id="filter-catalog-1">
            <label for="filter-catalog-1" class="filters__label">Со скидкой</label>
        </div>
        <div class="filters__container">
            <input type="checkbox" class="filters__input" name="filters" id="filter-catalog-2">
            <label for="filter-catalog-2" class="filters__label">Не в наличии</label>
        </div>
        <div class="filters__container">
            <input type="checkbox" class="filters__input" name="filters" id="filter-catalog-3">
            <label for="filter-catalog-3" class="filters__label">Цена до 200руб</label>
        </div>
    </form>
</template>

<script setup>

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
}
</style>
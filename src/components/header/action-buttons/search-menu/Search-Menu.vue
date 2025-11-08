<template>
    <div class="search-menu">
        <div class="container">
            <div class="search-menu__header">
                <input 
                    type="text" 
                    class="search-menu__input" 
                    :class="{'search-menu__input--active': isFocus}"
                    @focus="isFocus = true"
                    @focusout="isFocus = false"
                    @input="handleInput"
                    :value="searchQuery"
                    placeholder="Начать поиск">
                <div class="modal-page__close-btn search-menu__close-btn" @click="$emit('closeMenu')"><span></span></div>
            </div>
            <div class="search-menu__inner">
                <ProductCard
                    v-if="searchProducts.length > 0"
                    v-for="card in searchProducts"
                    :key="card.id"
                    :dataCard="card"></ProductCard>
                <h2 
                    class="search-menu__alert"
                    v-else-if="searchQuery && searchProducts.length === 0">
                    Ничего не найдено по запросу: "{{ searchQuery }}"
                </h2>
                <h2 
                    class="search-menu__alert"
                    v-else>
                    Введите запрос поиска
                </h2>
            </div>  
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    searchQuery: {
        type: String,
    }
})
const emits = defineEmits(['closeMenu', 'update:searchQuery'])
import ProductCard from '@/components/product-card/ProductCard.vue';
import { computed, onMounted, ref } from 'vue';
import { useAllData } from '@/store/AllData';
const AllData = useAllData()
const cards = computed(()=> AllData.allData)
const searchProducts = computed(()=>{
    const searchTerm = props.searchQuery.trim().toLowerCase()
    if (!searchTerm){
        return false
    }
    return [...cards.value].filter(item => item.title.toLowerCase().includes(searchTerm))
})
const isFocus = ref(false)
const handleInput = (event) => {
    emits('update:searchQuery', event.target.value)
}
onMounted(()=>{
    document.body.classList.add("no-scroll")
})
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.search-menu {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    top: rem(80);
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    color: #000;
    z-index: 30;
    &__inner {
        margin-top: rem(30);
        width: 100%;
        height: calc(100% - rem(60));
        border-right: 1px solid #6B6B6B;
        border-left: 1px solid #6B6B6B;
        padding: rem(30) rem(10);
        padding-bottom: rem(100);
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: rem(15);
        overflow-y: scroll;
        &--empty {
            grid-template-rows: rem(55) auto;
        }
    }
    &__alert {
        font-size: 24px;
        color: #6B6B6B;
        font-weight: 600;
        margin-left: rem(30);
        grid-column: 1/3;
    }
    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &__input {
        display: none;
        width: rem(300);
        height: rem(55);
        border: 1px solid #E1E1E1;
        border-radius: 16px;
        padding-left: 15px;
        padding-right: 40px;
        color: #6B6B6B;
        &--active {
            border: 1px solid var(--red);
        }
    }
    &__close-btn {
        display: none;
        position: relative;
    }
    @media (max-width: 1000px) {
        &__alert {
            font-size: 20px;
        }
        &__input {
            display: inline-block;
        }
        &__inner {
            margin-top: rem(10);
            padding: rem(10) rem(10);
        }
    }
    @media (max-width: 768px) {
        & {
            top: 0;
            padding: rem(20) 0;
        }
        &__inner {
            grid-template-columns: repeat(3, 1fr);
            border: none;
        }
        &__alert {
            font-size: 16px;
        }
        &__close-btn {
            display: flex;
            top: 0;
            right: 0;
        }
    }
    @media (max-width: 600px) {
        &__inner {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (max-width: 480px) {
        &__header {
            gap: rem(15);
        }
        &__inner {
            gap: rem(8);
            padding-left: 0;
            padding-right: 0;
            padding-bottom: rem(20);
        }
        &__input {
            width: 100%;
            height: rem(45);
        }
        &__alert {
            font-size: 14px;
        }
        &__close-btn {
            width: rem(25);
            background-color: transparent;
            height: rem(25);
        }
    }
}
</style>
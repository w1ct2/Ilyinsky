<template>
    <div class="search-menu">
        <div class="container">
            <div class="search-menu__inner">
                <PersonalFavorites_Item
                    v-if="searchProducts.length > 0"
                    v-for="card in searchProducts"
                    :key="card.id"
                    :dataCard="card"></PersonalFavorites_Item>
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
import PersonalFavorites_Item from '@/components/pages/Profile/PersonalFavorites_Item.vue';
import { computed, ref } from 'vue';
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
    &__inner {
        margin-top: rem(30);
        width: 100%;
        height: 100%;
        border-right: 1px solid #6B6B6B;
        border-left: 1px solid #6B6B6B;
        padding: rem(30) rem(10);
        padding-bottom: rem(100);
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: rem(15);
        overflow-y: scroll;
    }
    &__alert {
        font-size: 24px;
        color: #6B6B6B;
        font-weight: 600;
        margin-left: rem(30);
        grid-column: 1/3;
    }
}
</style>
<template>
    <div class="products">
        <PersonalFavorites_Item
            v-if="sortedData.length > 0"
            v-for="card in sortedData"
            :key="card.id"
            :dataCard="card"></PersonalFavorites_Item>
        <h2 class="products__alert" v-else>Выберите категорию в меню</h2>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import PersonalFavorites_Item from '../Profile/PersonalFavorites_Item.vue';
import { useAllData } from '@/store/AllData';
const AllData = useAllData()
const cards = computed(()=> AllData.allData)
const props = defineProps({
    category: {
        type: String
    }
})
const sortedData = computed(()=>{
    return [...cards.value].filter(item => item.category === props.category)
})
console.log(sortedData);

</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.products {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: rem(25);
    height: fit-content;
    &__alert {
        font-size: 24px;
        color: #6B6B6B;
        font-weight: 600;
        margin-left: rem(30);
        grid-column: 1/3;
    }
}
</style>
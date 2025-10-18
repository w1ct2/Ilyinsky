<template>
    <div class="products">
        <ProductCard
            v-if="sortedData.length > 0"
            v-for="card in sortedData"
            :key="card.id"
            :dataCard="card"></ProductCard>
        <h2 class="products__alert" v-else>Выберите категорию в меню</h2>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import ProductCard from '@/components/product-card/ProductCard.vue';
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
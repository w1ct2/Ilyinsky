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
import { computed, onMounted, ref } from 'vue';
import ProductCard from '@/components/product-card/ProductCard.vue';
import { useAllData } from '@/store/AllData';
const props = defineProps({
    activeFilter: {
        type: [String, null],
        default: null
    }
})
const AllData = useAllData()
const cards = computed(()=> AllData.allData)
const sortedData = computed(()=>{
    const categoryProducts = [...cards.value].filter(item => item.category === AllData.selectedCategory.category)
    if (props.activeFilter === 'discount') {
        return categoryProducts.filter(item => item.discount)
    } else if (props.activeFilter === 'availability') {
        return categoryProducts.filter(item => !item.availability)
    } else if (props.activeFilter === 'up-to-200') {
        return categoryProducts.filter(item => {
            const price = parseFloat(item.price)
            return !isNaN(price) && price < 200;
        })
    } else return categoryProducts
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
    // min-height: rem(600);
    &__alert {
        font-size: 24px;
        color: #6B6B6B;
        font-weight: 600;
        margin-left: rem(30);
        grid-column: 1/3;
    }
    @media (max-width: 1000px) {
        & {
            grid-template-columns: repeat(2, 1fr);
            max-width: rem(550);
        }
    }
    @media (max-width: 768px) {
        & {
            grid-template-columns: repeat(3, 1fr);
            max-width: none;
        }
    }
    @media (max-width: 600px) {
        & {
            grid-template-columns: repeat(2, 1fr);
            max-width: rem(480);
        }
    }
}
</style>
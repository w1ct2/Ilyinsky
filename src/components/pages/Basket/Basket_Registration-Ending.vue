<template>
    <div class="ending-page modal-page" @click.stop="$emit('closePage')">
        <div class="ending-page__inner modal-page__inner" @click.stop>
            <div class="modal-page__close-btn" @click="$emit('closePage')">
                <span></span>
            </div>
            <div class="ending-page__header">
                <img :src="img" class="ending-page__img">
                <h3 class="ending-page__title">Заказ сформирован <br>№{{ numberOrder }}</h3>
            </div>
            <RouterLink :to="'/personal-account'" class="ending-page__link">Отследить заказ можно в <span>личном кабинете</span></RouterLink>
        </div>
    </div>
</template>

<script setup>
import img from '@/assets/img/svg/success.svg'
import { onUnmounted} from 'vue';
import { RouterLink, useRouter } from 'vue-router';
const router = useRouter()
const props = defineProps({
    numberOrder: {
        type: Number
    }
})
onUnmounted(()=>{
    router.push('/home')
})
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.ending-page {
    &__inner {
        width: rem(550);
        min-height: rem(250);
        aspect-ratio: 0;
        padding: rem(30) rem(50);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    &__header {
        display: flex;
        align-items: center;
        gap: rem(30);
        color: #000;
    }
    &__title {
        font-size: 24px;
        font-weight: 600;
    }
    &__link {
        font-size: 18px;
        color: #000;
        & span {
            text-decoration: underline;
        }
    }
}
</style>
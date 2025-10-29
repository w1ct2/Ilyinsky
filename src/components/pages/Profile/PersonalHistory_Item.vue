<template>
    <div class="card"
            :class="{
                'card--is-done': status === 'isDone',
                'card--in-work': status === 'inProgress'
            }">
        <article 
            class="card__status"
            :class="{
                'card__status--is-done': status === 'isDone',
                'card__status--in-work': status === 'inProgress'
            }">
            {{ data.status }}
        </article>
        <h4 class="card__number">Заказ №{{ data.number }}</h4>
        <div class="card__about">
            <h2 class="card__method">{{ data.methodTitle }}</h2>
            <p class="card__date">{{ data.date }}</p>
        </div>
        <p class="card__address" v-html="data.address"></p>
        <div class="card__action">
            <h2 class="card__price">{{ data.price }} руб <span>Оплачено</span></h2>
            <button
                @click="isActiveTrackingPage = true"
                class="card__button"
                :class="{
                    'card__button--is-done': status === 'isDone',
                    'card__button--in-work': status === 'inProgress'
                }">
                {{ status === 'inProgress' ? 'Отследить' : 'Повторить' }}
            </button>
        </div>
        <PersonalHistory_Tracking
            v-show="isActiveTrackingPage"
            @closePage="isActiveTrackingPage = false"
            :numberOrder="data.number"></PersonalHistory_Tracking>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import PersonalHistory_Tracking from './PersonalHistory_ Tracking.vue';
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})
const status = computed(()=>{
    if(props.data.status === 'в работе') {
        return 'inProgress'
    } else if (props.data.status === 'выполнен') {
        return 'isDone'
    }
})
const isActiveTrackingPage = ref(false)
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.card {
    width: 100%;
    aspect-ratio: 415/200;
    border-radius: 16px;
    border: 1px solid grey;
    padding: 7px 18px;
    padding-bottom: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    &--is-done {
        border: 1px solid #8E8E8E;
    }
    &--in-work {
        border: 1px solid var(--red);
    }
    &__status {
        position: absolute;
        top: 0;
        left: 0;
        background-color: gray;
        width: fit-content;
        padding: 0 15px;
        height: rem(23);
        border-radius: 0 0 10px 0;
        text-align: center;
        color: #fff;
        &--in-work {
            background-color: var(--red);
        }
        &--is-done {
            background-color: #8E8E8E;
        }
    }
    &__number {
        margin-left: auto;
        margin-bottom: rem(7);
    }
    &__about {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &__date {
        font-size: 12px;
        color: #434343;
    }
    &__method {
        font-size: 20px;
        margin-bottom: rem(7);
    }
    &__address {
        font-size: 14px;
        color: #434343;
        white-space: nowrap;
        overflow: hidden;
    }
    &__action {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: auto;
    }
    &__price {
        font-size: 24px;
        font-weight: 600;
        display: flex;
        align-items: center;
        & span {
            font-size: 14px;
            font-weight: 400;
            margin-left: rem(7);
            color: #434343;
        }
    }
    &__button {
        max-width: rem(150);
        width: 100%;
        aspect-ratio: 150/40;
        border-radius: rem(30);
        border: 1px solid grey;
        &--is-done {
            color: #8E8E8E;
            border: 1px solid #8E8E8E;
        }
        &--in-work {
            border: 1px solid var(--red);
            color: var(--red);
        }
    }
}
</style>
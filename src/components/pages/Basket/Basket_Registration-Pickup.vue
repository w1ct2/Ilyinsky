<template>
    <div class="pickup">
        <h3 class="pickup__title">Самовывоз сегодня к nn:nn</h3>
        <p class="pickup__p">«Ильинский Супермаркет», ул. Новая,Ильинское-Усово, городской округ Красногорск</p>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.pickup {
    display: flex;
    flex-direction: column;
    gap: rem(25);
    margin-top: rem(50);
    &__title {
        font-size: 22px;
        font-weight: 600;
    }
    &__p {
        font-size: 20px;
    }
}
</style>
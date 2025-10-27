<template>
    <form class="form">
        <h4 class="title">Выберите адрес доставки</h4>
        <div class="form__input">
            <input type="text" placeholder="Введите адрес доставки" v-model="newAddress">
            <button :style="{backgroundImage: `url(${accept})`}" @click.prevent="addNewAddress"></button>
        </div>
        <h4 class="title">Последние адреса</h4>
        <div class="form__addresses" v-if="data.length">
            <div 
                class="form__address"
                v-for="address in data"
                :key="address.id">
                <img :src="addressImg">
                <p @click="setActiveAddress(address)">{{ address.address }}</p>
                <img :src="deleteBtn" class="form__delete" @click="addressesStore.deleteAddressDelivery(address)">
            </div>
        </div>
        <p v-else class="form__addresses--else">Недавних адресов нет</p>
        <h4 class="title">Когда доставить?</h4>
        <div class="form__select">
            <v-select
                class="form__select-field"
                label="name"
                v-model="selected1"
                :options="selectOptions1"></v-select>
            <v-select
                class="form__select-field"
                label="name"
                v-model="selected2"
                :options="selectOptions2"></v-select>
        </div>
    </form>
</template>

<script setup>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import accept from '@/assets/img/svg/accept.svg'
import addressImg from '@/assets/img/svg/address1.svg'
import deleteBtn from '@/assets/img/svg/delete1.svg'
import { useAddressesStore } from '@/store/AddressesStore';
import { computed, onMounted, ref } from 'vue';
const addressesStore = useAddressesStore()
const data = computed(()=>addressesStore.addressesDelivery)
const newAddress = ref('')
const addNewAddress = () => {
    addressesStore.addAddressesDelivery(newAddress.value)
    newAddress.value = ''
}
const setActiveAddress = (object) => {
    addressesStore.setActiveAddress(object.address)
    newAddress.value = object.address
    console.log(object.address);
    
}
onMounted(()=>{
    if (addressesStore.activeAddress) {
        newAddress.value = addressesStore.activeAddress
    }
})


const selectOptions1 = ref([
    { id: 1, name: 'Сегодня' },
    { id: 2, name: 'Завтра' },
    { id: 3, name: 'В понедельник' },
])
const selected1 = ref(selectOptions1.value[0]);
const selectOptions2 = ref([
    { id: 1, name: 'за 25 мин.' },
    { id: 2, name: 'с 21:00 до 23:00' },
    { id: 3, name: 'с 23:00 до 20:00' },
])
const selected2 = ref(selectOptions2.value[0]);
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.form {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    cursor: default;
    &__input {
        position: relative;
        display: flex;
        align-items: center;
        & input {
            height: rem(45);
            width: 100%;
            border: 1px solid #E1E1E1;
            border-radius: 16px;
            color: #000;
            padding-left: 15px;
            padding-right: 40px;
            &::placeholder {
                color: #6B6B6B;
            }
        }
        & button {
            position: absolute;
            z-index: 2;
            cursor: pointer;
            right: 12px;
            height: 100%;
            width: rem(24);
            background-repeat: no-repeat;
            background-position: center;
            background-size: 100%;
        }
    }
    &__address {
        display: flex;
        align-items: center;
        gap: 25px;
    }
    &__addresses {
        display: flex;
        flex-direction: column;
        gap: 40px;
        margin-bottom: rem(55);
        & p {
            cursor: pointer;
        }
        &--else {
            font-size: 14px;
            color: #6B6B6B;
            margin-bottom: rem(30);
        }
    }
    &__delete {
        cursor: pointer;
        margin-left: auto;
    }
    &__select {
        display: flex;
        gap: 15px;
        width: 100%;
        align-items: center;
        &-field {
            width: 50%;
            & :deep(.vs__dropdown-menu) {
                padding: 0;
                margin-top: 10px;
                border-radius: 14px;
                box-shadow: 0px 2px 8px 0px #00000040;
            }
            & :deep(.vs__dropdown-option) {
                font-size: 18px;
                height: rem(38);
                &:hover {
                    background-color: #F4F4F4;
                    color: #000;
                }
            }
            & :deep(.vs__clear) {
                display: none;
            }
            & :deep(.vs__dropdown-toggle) {
                border-radius: 16px;
                border: 1px solid #E1E1E1;
                height: rem(74);
            }
            & :deep(.vs__search) {
                width: 50%;
            }
            & :deep(.v-select) {
                width: 50% !important;
            }
            & :deep(.vs__actions) { 
                align-items: end;
                padding-bottom: 10px;
                padding-right: 17px;
            }
            & :deep(.vs__open-indicator) { 
                width: 20px;
            }
            // & :deep(.vs__selected) { 
            //     // justify-content: end !important;
            //     text-align: end;
            //     height: fit-content;
            // }
            & :deep(.vs__selected-options) { 
                flex-wrap: nowrap;
                white-space: nowrap;
                overflow: hidden;
            }
            & :deep(.vs__dropdown-toggle:focus-within) {
                border: 1px solid var(--red);
            }
        }
    }
}
.title {
    font-size: 20px;
    font-weight: 500;
}
</style>
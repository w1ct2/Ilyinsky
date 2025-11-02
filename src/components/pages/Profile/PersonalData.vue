<template>
    <div class="personal-data">
        <form class="personal-data__form" @submit.prevent>
            <div class="personal-data__item">
                <label for="" class="personal-data__label">Имя</label>
                <input 
                    type="text" 
                    class="personal-data__input" 
                    v-model="userFullname"
                    :disabled="!isEditingFullname">
                <button 
                    class="personal-data__button" 
                    @click="saveUserFullname"
                    v-if="isEditingFullname">Сохранить</button>
                <button 
                    class="personal-data__button" 
                    @click="startEditingFullname"
                    v-else>Изменить</button>
            </div>
            <div class="personal-data__item">
                <label for="" class="personal-data__label">Номер телефона</label>
                <input type="text" class="personal-data__input" v-model="phoneNumber" :disabled="phoneNumber">
            </div>
            <div class="personal-data__item">
                <label for="" class="personal-data__label">День рождения</label>
                <input 
                    type="text" 
                    class="personal-data__input"
                    placeholder="дд.мм.гг"
                    v-model="userBirthday"
                    @input="handleInput($event)"
                    :disabled="!isEditingBirthdate">
                    <button 
                        class="personal-data__button" 
                        @click="saveUserBirthdate"
                        v-if="isEditingBirthdate">Сохранить</button>
                    <button 
                        class="personal-data__button" 
                        @click="startEditingBirthdate"
                        v-else>Изменить</button>
            </div>
            <div class="personal-data__item">
                <label for="" class="personal-data__label">Эл. почта</label>
                <input type="text" class="personal-data__input">
                <button class="personal-data__button">Сохранить</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore'
import { onMounted, ref } from 'vue'
const mainStore = useMainStore()
const phoneNumber = ref(mainStore.mainPhoneUser)
const userFullname = ref('')
const userBirthday = ref('')
const isEditingFullname = ref(false)
const isEditingBirthdate = ref(false)

const handleInput = (event)=>{
    let value = event.target.value.replace(/\D/g, '')
    if (value.length > 6) {
        value = value.slice(0, -1)
    }
    let formatted = value
    if (value.length > 0) {
        formatted = value.match(/.{1,2}/g).join('.')
    }
    if (value.length >=2) {
        const day = parseInt(value.slice(0, 2))
        if (day < 1 || day > 31) {
            value = value.slice(0, 1)
            formatted = value
        }
    }
    if (value.length >= 4) {
        const month = parseInt(value.slice(2, 4))
        if (month < 1 || month > 12) {
            value = value.slice(0, 2)
            formatted = value.length > 0 ? value.match(/.{1,2}/g).join('.') : ''
        }
    }
    userBirthday.value = formatted
}
onMounted(() => {
    userFullname.value = mainStore.userFullName || ''
    if (mainStore.userFullName) {
        isEditingFullname.value = false
    }
    userBirthday.value = mainStore.userBirthdate || ''
    if (mainStore.userBirthdate) {
        isEditingBirthdate.value = false
    }
})
const startEditingFullname = () => {
    isEditingFullname.value = true
}
const startEditingBirthdate = () => {
    isEditingBirthdate.value = true
}
const saveUserFullname = () => {
    if (userFullname.value.trim()) {
        mainStore.setUserFullname(userFullname.value)
        isEditingFullname.value = false
    }
}
const saveUserBirthdate = () => {
    if (userBirthday.value.length >= 8) {
        mainStore.setBirthdate(userBirthday.value)
        isEditingBirthdate.value = false
    } else console.log('Введена некорректная дата');
}
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.personal-data {
    margin-top: rem(50);
    margin-bottom: rem(110);
    display: flex;
    width: 100%;
    &__form {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
    &__item {
        display: grid;
        grid-template-columns: auto;
        column-gap: rem(15);
        row-gap: rem(5);
    }
    &__label {
        color: #888888;
        grid-column: 1/3;
    }
    &__input {
        max-width: rem(310);
        height: rem(45);
        width: 100vh;
        background-color: #F3F3F7;
        border: 1px solid #E2E2E9;
        border-radius: 10px;
        font-size: 20px;
        color: #000;
        padding: 0 25px;
    }
    &__button {
        color: #888888;
        font-size: 20px;
        display: inline;
    }
}
</style>
<template>
    <div class="personal-data">
        <div class="personal-data__close-btn" @click="AllData.setActivePagePersonalAccount(null)"></div>
        <h2 class="personal-data__title" @click="AllData.setActivePagePersonalAccount(null)">Личные данные</h2>
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
                    @input="handleInputBirthday($event)"
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
                <input 
                    type="email" 
                    class="personal-data__input"
                    placeholder="xxxx@xxx.xx"
                    @input="handleInputEmail($event)"
                    v-model="userEmail"
                    :disabled="!isEditingEmail">
                    <button 
                        class="personal-data__button" 
                        @click="saveUserEmail"
                        v-if="isEditingEmail">Сохранить</button>
                    <button 
                        class="personal-data__button" 
                        @click="startEditingEmail"
                        v-else>Изменить</button>
            </div>
            <RouterLink 
                class="personal-data__get-out" 
                :to="'/home'"
                @click="mainStore.getOut">Выход</RouterLink>
        </form>
    </div>
</template>

<script setup>
import { useAllData } from '@/store/AllData'
import { useMainStore } from '@/store/MainStore'
import { onMounted, onUnmounted, ref } from 'vue'
const mainStore = useMainStore()
const AllData = useAllData()
const phoneNumber = ref(mainStore.mainPhoneUser)
const userFullname = ref('')
const userBirthday = ref('')
const userEmail = ref('')
const isEditingFullname = ref(false)
const isEditingBirthdate = ref(false)
const isEditingEmail = ref(false)

const handleInputBirthday = (event)=>{
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
const handleInputEmail = (event) => {
    let value = event.target.value
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    userEmail.value = value
    if (value !== '' && !emailRegex.test(value)) {
        event.target.classList.add('personal-data__input--error')
    } else {
        event.target.classList.remove('personal-data__input--error')
    }
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
    userEmail.value = mainStore.userEmail || ''
    console.log(userEmail.value)
    if (mainStore.userEmail) {
        isEditingEmail.value = false
    }
    if (mainStore.isMobile480) {
        document.body.classList.add('no-scroll')
    }
})
onUnmounted(()=>{
    document.body.classList.remove('no-scroll')
})
const startEditingFullname = () => {
    isEditingFullname.value = true
}
const startEditingBirthdate = () => {
    isEditingBirthdate.value = true
}
const startEditingEmail = () => {
    isEditingEmail.value = true
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
const saveUserEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (emailRegex.test(userEmail.value)) {
        mainStore.setEmail(userEmail.value)
        isEditingEmail.value = false
    } else console.log('Введен неверный адрес электронной почты');
}
</script>

<style lang="scss" scoped>
@import "@/scss/remFunction";
.personal-data {
    margin-top: rem(50);
    margin-bottom: rem(110);
    display: flex;
    width: 100%;
    position: relative;
    &__title {
        display: none;
        position: relative;
        padding-left: rem(25);
        cursor: pointer;
        &::after, &::before {
            content: '';
            position: absolute;
            background-color: #000000;
            height: 2px;
            width: 7px;
            left: 0;
            display: flex;
            align-items: center;
        }
        &::after {
            transform: rotate(-45deg);
            margin-top: 6.5px;
            top: 7px;
        }
        &::before {
            transform: rotate(45deg);
            margin-bottom: 6.5px;
            bottom: 7px;
        }
    }
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
        &--error {
            border: 1px solid red;
        }
    }
    &__button {
        color: #888888;
        font-size: 20px;
        display: inline;
    }
    &__close-btn {
        display: none;
    }
    &__get-out {
        color: #888888;
        margin-top: rem(20);
        cursor: pointer;
    }
    @media (max-width: 480px) {
        & {
            background-color: #fff;
            margin-top: 0;
            margin-bottom: 0;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;
            width: 100%;
            height: 100%;
            padding: rem(40) rem(25);
            flex-direction: column;
            overflow-y: scroll;
        }
        &__item {
            grid-template-columns: 1fr;
        }
        &__label {
            grid-column: 1/2;
            color: #000;
        }
        &__button {
            font-size: 16px;
            width: fit-content;
        }
        &__close-btn {
            display: block;
            position: absolute;
            width: rem(16);
            height: rem(16);
            top: rem(15);
            right: rem(15);
            display: flex;
            align-items: center;
            justify-content: center;
            &::after, &::before {
                content: '';
                position: absolute;
                width: 100%;
                height: rem(3);
                background-color: var(--red);
            }
            &::after {
                transform: rotate(-45deg);
            }
            &::before {
                transform: rotate(45deg);
            }
        }
        &__title {
            display: block;
            font-size: 24px;
            margin-bottom: rem(25);
        }
    }
}
</style>
import { ref } from 'vue'
import { userLogin } from '@/api/user'
import { defineStore } from 'pinia'

export const userStore = defineStore('user', () => {
    const userInfo = ref({})

    // const login  = async (loginForm) => {
    //     const res = await userLogin(loginForm)
    //     if (res.data.AcctionType === 'ok') {
    //         userInfo.value = res.data.data
    //     }
    // }

    const changeUserInfo = (value) => {
        userInfo.value = value
    }

    const clearUserInfo = () => {
        localStorage.removeItem('token')
        userInfo.value = {}
    }

    return { userInfo, changeUserInfo, clearUserInfo }
}, { persist: true })

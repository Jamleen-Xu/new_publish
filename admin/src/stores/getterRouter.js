import { ref } from 'vue'
import { defineStore } from 'pinia'

export const userGetterRouter = defineStore('getterRouter', () => {
    const isGetterRouter = ref(false)
    const changeGetterRouter = (value) => {
        isGetterRouter.value = value
    }

    return { isGetterRouter, changeGetterRouter }
})
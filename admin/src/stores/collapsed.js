import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCollapsed = defineStore('collapsed', () => {
    const isCollapsed = ref(false)
    const changeCollapsed = (value) => {
        isCollapsed.value = value
    }

    return { isCollapsed, changeCollapsed }
})
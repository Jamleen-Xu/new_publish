<template>
    <button @click="handel">按钮</button>
</template>

<script setup>
import { homeApi } from '@/api/user'

const handel = async () => {
    const result = await homeApi()
    console.log(result.data)
}

</script>

<style scoped></style>
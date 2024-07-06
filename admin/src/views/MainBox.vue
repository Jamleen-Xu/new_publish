<template>
    <el-container>
        <SideMenu class="sideMenu" />
        <el-container direction="vertical">
            <TopHeader />
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import SideMenu from '@/components/mainbox/SideMenu.vue'
import TopHeader from '@/components/mainbox/TopHeader.vue'


</script>

<style scoped>
.el-header {
    padding: 0;
}
.el-main {
    padding: 0;
}
</style>
<template>
    <el-aside :width="collapsed.isCollapsed ? '64px' : '200px'">
        <el-menu :collapse="collapsed.isCollapsed" :collapse-transition="true" :router="true"
            :default-active="route.fullPath">
            <el-menu-item index="/home">
                <el-icon>
                    <HomeFilled />
                </el-icon>
                <span>首页</span>
            </el-menu-item>
            <el-menu-item index="/center">
                <el-icon>
                    <avatar />
                </el-icon>
                <span>个人中心</span>
            </el-menu-item>
            <el-sub-menu index="/user-manage">
                <template #title>
                    <el-icon>
                        <UserFilled />
                    </el-icon>
                    <span>用户管理</span>
                </template>
                <el-menu-item index="/user-manage/adduser">添加用户</el-menu-item>
                <el-menu-item index="/user-manage/userlist">用户列表</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="/news-manage">
                <template #title>
                    <el-icon>
                        <Management />
                    </el-icon>
                    <span>新闻管理</span>
                </template>
                <el-menu-item index="/news-manage/addnews">创建新闻</el-menu-item>
                <el-menu-item index="/news-manage/newslist">新闻列表</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="/product-manage">
                <template #title>
                    <el-icon>
                        <Reading />
                    </el-icon>
                    <span>产品管理</span>
                </template>
                <el-menu-item index="/product-manage/addproduct">添加产品</el-menu-item>
                <el-menu-item index="/product-manage/productlist">产品列表</el-menu-item>
            </el-sub-menu>
        </el-menu>
    </el-aside>
</template>

<script setup>
import { ref } from 'vue'
import { useCollapsed } from '@/stores/collapsed'
import { HomeFilled, Avatar, UserFilled, Management, Reading } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
const route = useRoute()

// 是否折叠
const collapsed = useCollapsed()

</script>

<style lang="scss" scoped>
.el-aside {
    height: 100vh;
    transition: all .5s;

    .el-menu {
        height: 100vh;
    }
}
</style>
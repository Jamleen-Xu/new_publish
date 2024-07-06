<template>
    <el-header>
        <div class="left">
            <el-icon @click="collapsed.isCollapsed = !collapsed.isCollapsed">
                <Menu />
            </el-icon>
            <span style="margin-left:10px;">新闻发布管理系统</span>
        </div>
        <div class="right">
            <span>欢迎您,admin</span>
            <el-dropdown>
                <span class="el-dropdown-link">
                    <el-icon :size="30" color="white" class="el-icon--right">
                        <User />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="$router.push('/center')">个人中心</el-dropdown-item>
                        <el-dropdown-item @click="Logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </el-header>
</template>

<script setup>
import { Menu, User } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
import { useCollapsed } from '@/stores/collapsed'

const $router = useRouter()


const collapsed = useCollapsed()

const Logout = () => {
    localStorage.removeItem('token')
    $router.push('/login')
}
</script>

<style lang="scss" scoped>
.el-header {
    background-color: #2d3a4b;
    color: white;
    width: 100%;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.left,
.right {
    display: flex;
    align-items: center;
}

.left {
    i {
        margin-right: 5px;
        margin-left: 5px;
        cursor: pointer;
    }
}

.right {
    .el-dropdown {

        .el-icon--right {
            margin-left: 10px;
            margin-right: 30px;
        }
    }
}
</style>
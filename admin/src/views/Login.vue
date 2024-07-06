<template>
    <div>
        <vue-particles id="tsparticles" :particlesLoaded="particlesLoaded" :options="options" />
        <div class="formContainer">
            <h3>新闻发布管理系统</h3>
            <el-form ref="formRef" class="loginForm" label-width="80px" :model="loginForm" :rules="rules" status-icon
                label-position="left">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="loginForm.username" placeholder="请输入用户名" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="loginForm.password" placeholder="请输入密码" show-password></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router';
import { userLogin } from '@/api/user';

const $router = useRouter()

// 输入的表单信息
const loginForm = ref({
    username: '',
    password: ''
})
// form实例，用于验证表单
const formRef = ref();

// 验证规则
const rules = reactive({
    username: [
        { required: true, message: '名字不能为空', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '密码不能为空', trigger: 'blur' },
        { min: 3, max: 6, message: '长度在 3 到 5 个字符', trigger: 'blur' },
    ]
})

// 登陆
const login = async () => {
    // await formRef.value.validate();

    // 表单验证
    formRef.value.validate(async (valid) => {
        // console.log(valid)  // 布尔值
        if (valid) {
            // 发送请求
            // localStorage.setItem('token', 'aaaa')
            // $router.push('/home')
            let result = await userLogin(loginForm.value)
            console.log(result)
        }
    })

}

//配置particles
const options = {
    background: {
        color: {
            value: '#8cc265'
        }
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: 'push'
            },
            onHover: {
                enable: true,
                mode: 'repulse'
            },
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40
            },
            push: {
                quantity: 4
            },
            repulse: {
                distance: 200,
                duration: 0.4
            }
        }
    },
    particles: {
        color: {
            value: '#ffffff'
        },
        links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
        },
        move: {
            direction: 'none',
            enable: true,
            outModes: 'bounce',
            random: false,
            speed: 6,
            straight: false
        },
        number: {
            density: {
                enable: true,
            },
            value: 80
        },
        opacity: {
            value: 0.5
        },
        shape: {
            type: 'circle'
        },
        size: {
            value: { min: 1, max: 5 }
        }
    },
    detectRetina: true
}
</script>

<style scoped lang="scss">
.formContainer {
    width: 500px;
    height: 300px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: rgba($color: #000000, $alpha: 0.5);
    color: white;
    text-align: center;
    padding: 20px;

    padding: 20px h3 {
        font-size: 30px;
    }

    .loginForm {
        margin-top: 20px;
    }

    // ::v-deep .el-form-item__label {
    //     color: white;
    // }

    :deep(.el-form-item__label) {
        color: white;
    }

}
</style>
import axios from "axios";
import { ElMessage } from "element-plus";


let service = axios.create({
    baseURL: '/adminapi',
    timeout: 5000
})

service.interceptors.request.use((config) => {
    return config
})

service.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    ElMessage({ type: 'error', message: '请求发生错误' })
    return Promise.reject(error)
})

export default service
import axios from "axios";


let service = axios.create({
    baseURL: '/adminapi',
    timeout: 5000
})

service.interceptors.request.use((config) => {
    // 每次请求添加token
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Jamleen ${token}`
    return config
}, (error) => {
    return Promise.reject(error)
})

service.interceptors.response.use((response) => {
    const { authorization } = response.headers
    authorization && localStorage.setItem("token", authorization)
    return response
}, (error) => {
    const { status } = error.response;
    if (status === 401) {
        localStorage.removeItem("token")
        window.location.href = '#/login'
    }
    return Promise.reject(error)
})

export default service
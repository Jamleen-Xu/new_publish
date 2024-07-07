import request from '@/utils/request'

export const userLogin = (loginForm) => {
    return request.post('/user/login', loginForm)
}

export const homeApi = () => {
    return request.get('/home/getInfo')
}
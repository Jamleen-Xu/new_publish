import request from '@/utils/request'

export const userLogin = (loginForm) => {
    return request.post('/user/login', loginForm)
}
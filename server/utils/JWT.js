const jsonwebtoken = require('jsonwebtoken');
const secret = 'Jamleen'

const JWT = {
    // 生成token
    generate(value, time) {
        // value: 用户信息  secret: 密钥   expiresIn: 过期时间
        return jsonwebtoken.sign(value, secret, { expiresIn: time })
    },

    // 验证token
    verify(token) {
        try {
            return jsonwebtoken.verify(token, secret)
        } catch (e) {
            return false
        }
    }
}

// const token = JWT.generate({ username: 'Jamleen ' }, '10s')
// console.log(token)
// console.log(JWT.verify(token))

module.exports = JWT
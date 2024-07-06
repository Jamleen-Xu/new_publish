const jsonwebtoken = require('jsonwebtoken');
const secret = 'Jamleen'

const JWT = {
    // 生成token
    generate(value, time) {
        // value: 用户信息  secret: 密钥   expiresIn: 过期时间
        jsonwebtoken.sign(value, secret, { expiresIn: time })
    },

    // 验证token
    verify() {}
}


module.exports = JWT
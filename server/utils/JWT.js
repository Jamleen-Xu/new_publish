const jsonwebtoken = require('jsonwebtoken');
const secret = 'Jamleen'

const JWT = {
    // 生成token
    generate(value, time) {
        jsonwebtoken.sign(value, secret, { expiresIn: time })
    },

    // 验证token
    verify() {}
}


module.exports = JWT
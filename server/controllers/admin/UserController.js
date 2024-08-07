const UserService = require("../../services/admin/UserService")
const JWT = require("../../utils/JWT")
require('../../utils/JWT')


const UserController = {
    login: async (req, res) => {
        const result = await UserService.login(req.body)
        console.log(result)
        if (result.length === 0) {
            res.send({ code: '-1', error: '用户名密码不匹配' })
        } else {
            // 验证通过，生成token
            const token = JWT.generate({
                _id: result[0]._id,
                username: result[0].username
            }, '20s')

            res.header('Authorization', token)
            res.send({
                AcctionType: 'ok',
                data: {
                    username: result[0].username,
                    gender: result[0].gender ? result[0].gender : 0, //性别 ,0,1,2
                    introduction: result[0].introduction,//简介
                    avatar: result[0].avatar,
                    role: result[0].role
                }
            })
        }
    }
}

module.exports = UserController;

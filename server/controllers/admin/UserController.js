const UserService = require("../../services/admin/UserService")


const UserController = {
    login: async(req, res) => {

        let result = await UserService.login(req.body)
        console.log(req.body)
        if (result.length === 0) {
            res.send({
                code: -1,
                msg: "用户名或密码错误"
            })
        } else {
            res.send({
                AcctionType: "ko",
            })
        }
    }
}

module.exports = UserController
const UserModel = require("../../models/User")

const UserService = {
    login: async ({ username, password }) => {
        return UserModel.find({
            username,
            password
        })
    }
}

module.exports = UserService
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserType = {
    username: String,
    password: String,
    gender: Number,  // 1 男  2 女
    introduction: String,
    avatar: String,
    role: Number,  // 管理员 1    编辑 2
}


// user模型 ==》  users集合(表)
const UserModel = mongoose.model("User", new Schema(UserType))

module.exports = UserModel

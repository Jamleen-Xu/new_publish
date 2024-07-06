// 用户相关的全部路由
const express = require('express');
const UserRouter = express.Router();

const UserController = require('../../controllers/admin/UserController')

// 用户登录
UserRouter.post('/adminapi/user/login', UserController.login)

module.exports = UserRouter


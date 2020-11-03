const {User, Roles} = require('./user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {secretKey} = require('./config')

class AuthService {
    async createUser(username, password) {
        const candidate = await User.findOne({where: {username}})
        if (candidate) {
            throw new Error("Пользователь с таким именем уже существует")
        }
        const hashPassword = bcrypt.hashSync(password, 5)
        const user = await User.create({username, password: hashPassword})
        const role = await Roles.create()
        await user.addRole(role)
        return user
    }

    async login(username, password) {
        const user = await User.findOne({where: {username},include: [{model: Roles, attributes: ['value']}]})
        if (!user) {
            throw new Error("Пользователь с таким именем не найден")
        }
        const comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            throw new Error("Вы ввели неверный пароль")
        }
        const token = jwt.sign(
            {id: user.id, roles: user.roles, username },
            secretKey,
            {expiresIn: '24h'})
        return {user, token}
    }

    async getUser(id) {
        const user = await User.findOne({
            where: {id},
            include: [{model: Roles, attributes: ['value']}]
        })
        if (!user) {
            throw new Error('Пользователь не найден')
        }
        return user;
    }

    async getAll() {
        return User.findAll({where:{}, include: [{model: Roles, attributes: ['value']}]})
    }

}

module.exports = new AuthService()

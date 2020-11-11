import {makeAutoObservable} from "mobx";
import {authHost, basicHost} from "../http/axios";
import app from "./app";
import {UserType} from "../types/types";

class User{
    isAuth = false
    user:UserType = {
        id: '',
        password: '',
        username: '',
        roles: []
    }

    constructor() {
        makeAutoObservable(this)
    }

    async registration(username:string, password:string) {
        try {
            app.showLoader()
            const resp = await basicHost.post('/registration', {username, password})
            app.showSuccessAlert('Пользователь зарегистрирован')
        } catch (e) {
            app.showErrorAlert(e.response ? e.response.data.message : "Произошла ошибка")
            console.log(e)
        } finally {
            app.hideLoader()
        }
    }
    async login(username:string, password:string) {
        try {
            app.showLoader()
            const resp = await basicHost.post('/login', {username, password})
            this.user = resp.data.user
            this.isAuth = true
            localStorage.setItem('token', resp.data.token)
            console.log(resp)
        } catch (e) {
            app.showErrorAlert(e.response ? e.response.data.message : "Произошла ошибка")
            console.log(e)
        } finally {
            app.hideLoader()
        }
    }

    async getAllUsers() {
        try {
            app.showLoader()
            const resp = await authHost.get('/all')
            console.log(resp.data)
            return resp.data
        } catch (e) {
            app.showErrorAlert(e.response ? e.response.data.message : "Произошла ошибка")
            console.log(e)
        } finally {
            app.hideLoader()
        }
    }
}

export default new User()

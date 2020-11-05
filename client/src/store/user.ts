import {makeAutoObservable} from "mobx";
import {basicHost} from "../http/axios";
import app from "./app";

class User{
    isAuth = false
    user = {}

    constructor() {
        makeAutoObservable(this)
    }

    async registration(email:string, password:string) {
        try {
            app.showLoader()
            const resp = await basicHost.post('/registration', {username: email, password})
        } catch (e) {
            app.showErrorAlert("Произошла ошибка")
            console.log(e)
        } finally {
            app.hideLoader()
        }
    }
    async login() {

    }
}

export default new User()

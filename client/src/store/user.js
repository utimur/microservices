import {makeAutoObservable} from "mobx";

class User{
    isAuth = false

    constructor() {
        makeAutoObservable(this)
    }
}

export default new User()

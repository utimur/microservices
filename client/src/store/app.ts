import {makeAutoObservable} from "mobx";
import {alertTypes} from "../utils/const";

class App {
    loader = false
    alert = false
    alertType = alertTypes.ERROR
    alertText:string = "дефолтный текст"

    constructor() {
        makeAutoObservable(this)
    }

    showLoader() {
        this.loader = true
    }
    hideLoader() {
        this.loader = false
    }

    showErrorAlert(text: string) {
        this.alertType = alertTypes.ERROR
        this.alertText = text
        this.alert = true
        this.hideAlert(5000)
    }

    showSuccessAlert(text: string) {
        this.alertType = alertTypes.SUCCESS
        this.alertText = text
        this.alert = true
        this.hideAlert(5000)
    }

    hideAlert(timeout: number) {
        setTimeout(() => {
            this.alert = false
        }, timeout)
    }
}

export default new App()

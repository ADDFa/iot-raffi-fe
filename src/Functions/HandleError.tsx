import { SweetAlertOptions } from "sweetalert2"
import { Alert } from "./Alert"

class HandleError {
    private res: Api.Response

    constructor(res: Api.Response) {
        this.res = res
    }

    public show() {
        if ("message" in this.res.result) {
            const opt: SweetAlertOptions = {
                icon: "error",
                text: this.res.result.message
            }

            if (this.res.status < 400) opt.icon = "success"
            Alert.fire(opt)
        }

        if ("errors" in this.res.result) {
            const errors = this.res.result.errors
            for (const error in errors) {
                const inputError = document.querySelector(`[name="${error}"]`)
                const parentInput = inputError?.parentElement
                inputError?.classList.add("is-invalid")

                const currentE = parentInput?.querySelector(".invalid-feedback")
                if (!currentE) {
                    const messageE = document.createElement("p")
                    const messageT = document.createTextNode(errors[error])
                    messageE.classList.add("invalid-feedback")
                    messageE.append(messageT)
                    parentInput?.append(messageE)
                } else {
                    currentE.textContent = errors[error]
                }

                ;(inputError as HTMLInputElement)?.addEventListener(
                    "input",
                    (evt) => {
                        const inputE = evt.currentTarget as HTMLInputElement
                        if (inputE.classList.contains("is-invalid")) {
                            inputE.classList.remove("is-invalid")
                        }
                    }
                )
            }
        }
    }
}

export default HandleError

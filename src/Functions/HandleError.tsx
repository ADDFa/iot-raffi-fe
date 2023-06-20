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
            console.log(this.res.result.errors)
        }
    }
}

export default HandleError

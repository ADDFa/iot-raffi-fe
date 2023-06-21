import Api from "../Functions/Api"
import HandleError from "../Functions/HandleError"

const usePost = () => {
    return async (endpoint: string, body: HTMLFormElement) => {
        const res = await Api.handle(endpoint, {
            method: "POST",
            body: new FormData(body)
        })
        console.log(res)
        new HandleError(res).show()
    }
}

export default usePost

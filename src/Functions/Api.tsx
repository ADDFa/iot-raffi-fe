import Auth from "./Auth"

class Api {
    private static baseApi = "http://127.0.0.1:8000/api"

    public static get base_api() {
        return this.baseApi
    }

    public static fetchingData(
        endpoint: string,
        { headers, ...rest }: RequestInit
    ): Promise<Api.Response> {
        return new Promise(async (resolve, reject) => {
            let result = await fetch(`${this.baseApi}/${endpoint}`, {
                ...rest,
                headers: {
                    Authorization: `Bearer ${Auth.token_access}`,
                    ...headers
                }
            })

            const response = {
                status: result.status,
                result: await result.json()
            }

            return result.ok ? resolve(response) : reject(response)
        })
    }

    public static async handle(
        endpoint: string,
        init: RequestInit = {}
    ): Promise<Api.Response> {
        try {
            return await this.fetchingData(endpoint, init)
        } catch (e: any) {
            return e
        }
    }

    public static post(
        endpoint: string,
        body: HTMLFormElement
    ): Promise<Api.Response> {
        return this.handle(endpoint, {
            method: "POST",
            body: new FormData(body)
        })
    }
}

export default Api

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

    private static get isExpired(): boolean {
        const date = new Date()
        const now = Math.ceil(date.getTime() / 1000)
        const auth = Auth.auth

        return now > auth.exp
    }

    public static async handle(
        endpoint: string,
        init: RequestInit = {}
    ): Promise<Api.Response> {
        try {
            if (this.isExpired) {
                return await this.fetchingData("refresh", {
                    method: "POST",
                    body: JSON.stringify({
                        token_refresh: Auth.token_refresh
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(async (res) => {
                    if (res.status !== 200) {
                        localStorage.clear()
                        window.location.href = "/"
                    }
                    Auth.setAuth(res)
                    return await this.fetchingData(endpoint, init)
                })
            } else {
                return await this.fetchingData(endpoint, init)
            }
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

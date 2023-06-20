class Auth {
    public static get token_access() {
        return localStorage.getItem("token_access")
    }

    public static set token_access(val) {
        localStorage.setItem("token_access", val || "")
    }

    public static get token_refresh() {
        return localStorage.getItem("token_access")
    }

    public static set token_refresh(val) {
        localStorage.setItem("token_access", val || "")
    }

    public static get auth() {
        const token = this.token_access
        if (!token) {
            return console.error("Token Not Found")
        }

        return JSON.parse(atob(token.split(".")[1]))
    }
}

export default Auth

import { redirect, useNavigate } from "react-router-dom"
import ButtonFullRounded from "../Components/ButtonFullRounded"
import FormTitle from "../Components/Form/FormTitle"
import Input from "../Components/Input"
import Auth from "../Functions/Auth"
import Form from "./LoginRegister/Form"
import LinkToggle from "./LoginRegister/LinkToggle"
import { FormEventHandler } from "react"
import Api from "../Functions/Api"
import { Alert } from "../Functions/Alert"

export const loginLoader = () => {
    return Auth.token_access ? redirect("/dashboard") : null
}

const Login = () => {
    const navigate = useNavigate()

    const login: FormEventHandler<HTMLFormElement> = (evt) => {
        evt.preventDefault()

        Api.post("login", evt.currentTarget).then((res) => {
            if (res.status === 200) {
                Auth.setAuth(res)
                return navigate("/dashboard")
            }

            if ("message" in res.result) {
                Alert.fire({
                    icon: "warning",
                    text: res.result.message
                })
            }
        })
    }

    return (
        <Form onSubmit={login}>
            <FormTitle title="LOGIN" />
            <Input id="username" label="Username" name="username" />
            <Input
                id="password"
                label="Password"
                type="password"
                name="password"
            />
            <LinkToggle text="Belum memiliki akun?" to="/register">
                Register
            </LinkToggle>
            <ButtonFullRounded text="Login" />
        </Form>
    )
}

export default Login

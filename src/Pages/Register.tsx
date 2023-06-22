import { FormEventHandler } from "react"
import ButtonFullRounded from "../Components/ButtonFullRounded"
import FormTitle from "../Components/Form/FormTitle"
import Input from "../Components/Input"
import usePost from "../Hooks/usePost"
import Form from "./LoginRegister/Form"
import LinkToggle from "./LoginRegister/LinkToggle"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const create = usePost()
    const navigate = useNavigate()

    const register: FormEventHandler<HTMLFormElement> = (evt) => {
        evt.preventDefault()
        create("register", evt.currentTarget, (res) => {
            if (res.status === 200) navigate("/")
        })
    }

    return (
        <Form onSubmit={register}>
            <FormTitle title="REGISTER" />
            <Input id="name" label="Nama" name="name" />
            <Input id="username" label="Username" name="username" />
            <Input
                id="password"
                label="Password"
                type="password"
                name="password"
            />
            <LinkToggle text="Sudah memiliki akun?">Login</LinkToggle>
            <ButtonFullRounded text="Register" />
        </Form>
    )
}

export default Register

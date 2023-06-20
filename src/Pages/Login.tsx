import ButtonFullRounded from "../Components/ButtonFullRounded"
import FormTitle from "../Components/Form/FormTitle"
import Input from "../Components/Input"
import Form from "./LoginRegister/Form"
import LinkToggle from "./LoginRegister/LinkToggle"

const Login = () => {
    return (
        <Form>
            <FormTitle title="LOGIN" />
            <Input id="username" label="Username" />
            <Input id="password" label="Password" type="password" />
            <LinkToggle text="Belum memiliki akun?" to="/register">
                Register
            </LinkToggle>
            <ButtonFullRounded text="Login" />
        </Form>
    )
}

export default Login

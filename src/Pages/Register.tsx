import ButtonFullRounded from "../Components/ButtonFullRounded"
import FormTitle from "../Components/Form/FormTitle"
import Input from "../Components/Input"
import Form from "./LoginRegister/Form"
import LinkToggle from "./LoginRegister/LinkToggle"

const Register = () => {
    return (
        <Form>
            <FormTitle title="REGISTER" />
            <Input id="username" label="Username" />
            <Input id="password" label="Password" type="password" />
            <LinkToggle text="Sudah memiliki akun?">Login</LinkToggle>
            <ButtonFullRounded text="Login" />
        </Form>
    )
}

export default Register

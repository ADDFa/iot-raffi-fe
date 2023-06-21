import { FC } from "react"

const Form: FC<LoginRegister.Form> = ({ children, ...rest }) => {
    return (
        <div className="h-100 d-flex justify-content-center align-items-center row">
            <form className="col-md-4 shadow p-5 rounded-3" {...rest}>
                {children}
            </form>
        </div>
    )
}

export default Form

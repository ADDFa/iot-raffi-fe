import { FC } from "react"

const FormTitle: FC<Form.FormTitle> = ({ title, className, ...rest }) => {
    return (
        <div className="mb-5">
            <h1 className={`text-center fs-2 fw-bold ${className}`} {...rest}>
                {title}
            </h1>
        </div>
    )
}

export default FormTitle

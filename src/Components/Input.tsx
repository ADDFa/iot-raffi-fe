import { FC } from "react"

const Input: FC<Input> = ({ id, label, ...rest }) => {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <input type="text" {...rest} className="form-control" id={id} />
        </div>
    )
}

export default Input

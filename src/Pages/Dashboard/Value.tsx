import { forwardRef } from "react"

const Value = forwardRef<HTMLSpanElement, Dashboard.Value>(
    ({ name, value }, ref) => {
        return (
            <p className="row">
                <span className="col-8">{name}</span>
                <span className="col-3" ref={ref}>
                    {value}
                </span>
            </p>
        )
    }
)

export default Value

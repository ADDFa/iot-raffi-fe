import { useCallback, useEffect, useState } from "react"
import Api from "../Functions/Api"

const useGet = (endpoint: string, init = {}) => {
    const [result, setResult] = useState<Api.Response>()

    const res = useCallback(async () => {
        setResult(await Api.handle(endpoint, init))
    }, [endpoint, init])

    useEffect(() => {
        res()
    }, [res])

    return result
}

export default useGet

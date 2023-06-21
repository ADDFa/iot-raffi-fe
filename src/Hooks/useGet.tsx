import { useEffect, useState } from "react"
import Api from "../Functions/Api"

const useGet = (endpoint: string): Record<string, any>[] => {
    const [result, setResult] = useState<Record<string, any>[]>([])

    useEffect(() => {
        const getResult = async () => {
            const res = await Api.handle(endpoint)
            if (res.status === 200) setResult(res.result)
        }
        getResult()
    }, [endpoint])

    return result
}

export default useGet

import { useEffect, useState } from "react"
import Api from "../Functions/Api"

const useGet = (endpoint: string): Record<string, any>[] => {
    const [result, setResult] = useState<Record<string, any>[]>([])

    useEffect(() => {
        fetch(`${Api.base_api}/${endpoint}`)
            .then((res) => res.json())
            .then((data) => setResult(data))
    }, [endpoint])

    return result
}

export default useGet

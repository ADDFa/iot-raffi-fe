const useTimeDate = () => {
    return (datetime: string) => {
        const date = new Date(datetime)
        const getZero = (number: number) => {
            return number < 10 ? `0${number}` : number
        }

        const strDate = getZero(date.getDate())
        const strMonth = getZero(date.getMonth() + 1)
        const strYear = date.getFullYear()
        const strHours = getZero(date.getHours())
        const strMinutes = getZero(date.getMinutes())

        return `${strDate}/${strMonth}/${strYear} ${strHours}:${strMinutes}`
    }
}

export default useTimeDate

const useFormBuilder = () => {
    return ([...keys]: string[], [...vals]: string[]) => {
        if (keys.length !== vals.length) {
            throw new Error("Panjang key dan value harus sama")
        }

        const form = document.createElement("form")
        keys.forEach((key, i) => {
            const input = document.createElement("input")
            input.name = key
            input.value = vals[i]
            form.append(input)
        })

        return form
    }
}

export default useFormBuilder

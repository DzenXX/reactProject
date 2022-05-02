


export const required = (value) => {
    if (value) return undefined

    return 'Field is required'
}

export const maxLength = (maxValue) => (value) => {
    debugger;
    if (value.length > maxValue) {
        return `Max length is ${maxValue} letters`
    }
    return undefined
}

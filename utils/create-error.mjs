export const createError = (status, message) => {
    const Err = new Error()
    Err.status = status
    Err.message = message

    return Err
}

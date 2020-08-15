const passwordValidator = (password) => {
    let passwordError = ""

    if (!password) {
        passwordError = "Please enter your password"
    } else {
        passwordError = ""

    }

    return passwordError
}

const emailValidator = (email) => {
    let emailError = ''
    if (!email) {
        emailError = "Please enter your email"
    } else {
        emailError = ""
    }

    return emailError
}

export {
    passwordValidator, emailValidator
}
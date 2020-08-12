const handlerBlurPassword = (passwordError, password,) => {
    if (password.length < 8 || password.length > 18) {
        this.setState({
            passwordError: "Username must be between 2 and 18 characters long!"
        })
    }
    if (!/^[\w!@#$%&?]+$/.test(password)) {
        this.setState({
            passwordError: "Password can only contain english letters, numbers, underscores, !, @, #, $, %, &, ? and *!"
        })
    }
    if (!password) {
        this.setState({
            passwordError: "Please enter your password"
        })
    }
}

export {
    handlerBlurPassword
}
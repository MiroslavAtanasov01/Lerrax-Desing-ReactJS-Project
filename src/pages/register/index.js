import React, { Component } from 'react'
import styles from './index.module.css'
import PageLayout from '../../components/page-layout'
import PageTitle from '../../components/helmet'
import Input from '../../components/input'
import Link from '../../components/link'
import UserContext from '../../Context'
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { handlerBlurPassword } from '../../utils/errors'

class RegisterPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            username: "",
            password: "",
            rePassword: "",
            emailError: "",
            usernameError: "",
            passwordError: "",
            rePasswordError: "",
        }
    }

    static contextType = UserContext

    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value

        this.setState(newState)
    }

    onSubmit = async (event) => {
        event.preventDefault()

        const { email, username, password, rePassword, emailError, usernameError, passwordError, rePasswordError } = this.state

        if (email && username && password && rePassword && password === rePassword
            && emailError === "" && usernameError === "" && passwordError === "" && rePasswordError === "") {
            try {
                const promise = await fetch('http://localhost:8888/api/user/register', {
                    method: 'POST',
                    body: JSON.stringify({ email, username, password, rePassword }),
                    headers: { 'Content-type': 'application/json' }
                })
                const authToken = promise.headers.get('Authorization')
                document.cookie = `auth-token=${authToken}`

                const response = await promise.json()

                if (response.email && authToken) {
                    this.context.logIn({
                        email: response.email,
                        id: response._id
                    })
                    this.props.history.push('/')
                } else {
                    this.props.history.push('/register')
                }
            } catch (e) {
                toast.error('This email or username is already taken')
            }
        } else {
            this.props.history.push('/register')
            toast.error('Please enter valid credentials')
        }
    }

    handlerBlurPass = () => {
        const { password } = this.state

        if (password.length < 8) {
            this.setState({ passwordError: "Password must be at least 8 characters long!" })
        }
        if (!/^[\w!@#$%&]+$/.test(password)) {
            this.setState({ passwordError: "Password can only contain english letters, numbers, underscores, !, @, #, $, %, &, ? and *!" })
        }
        if (!password) {
            this.setState({ passwordError: "Please enter your password" })
        }

        if (password && /^[\w!@#$%&?]+$/.test(password) && password.length >= 8) {
            this.setState({ passwordError: "" })
        }
    }

    handlerBlurRePass = () => {
        const { password, rePassword } = this.state

        if (rePassword !== password) {
            this.setState({ rePasswordError: "Both passwords must match!" })
        } else {
            this.setState({ rePasswordError: "" })
        }
    }


    handlerBlurUsername = () => {
        const { username } = this.state

        if (username.length < 2) {
            this.setState({ usernameError: "Username must be at least 2 characters long!" })
        }
        if (!/^[\w.]+$/.test(username)) {
            this.setState({ usernameError: "Username can only contain english letters, numbers, underscores and dots!" })
        }
        if (!username) {
            this.setState({ usernameError: "Please enter your username" })
        }

        if (username && /^[\w.]+$/.test(username) && username.length >= 2) {
            this.setState({ usernameError: "" })
        }
    }

    handlerBlurEmail = () => {
        const { email } = this.state
        const emailRegex = new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        if (!emailRegex.test(email)) {
            this.setState({ emailError: "Please enter a correct email address" })
        }
        if (!email) {
            this.setState({ emailError: "Please enter your email" })
        }

        if (email && emailRegex.test(email)) {
            this.setState({ emailError: "" })
        }
    }

    render() {
        const { email, username, password, rePassword, emailError, usernameError, passwordError, rePasswordError } = this.state

        return (
            <PageLayout>
                <div className={styles.main}>
                    <PageTitle title="Sign up | Lerrax Design" />
                    <ToastContainer />
                    <form className={styles.container} onSubmit={this.onSubmit}>
                        <h1 className={styles.h1}>Register</h1>
                        <Input
                            value={email}
                            onChange={(e) => this.onChange(e, 'email')}
                            onBlur={this.handlerBlurEmail}
                            label="Email"
                            id="email"
                            type='login'
                            placeholder="Enter your email"
                            error={emailError}
                        />
                        <Input
                            value={username}
                            onChange={(e) => this.onChange(e, 'username')}
                            onBlur={this.handlerBlurUsername}
                            label="Username"
                            id="username"
                            type='login'
                            placeholder="Enter your username"
                            error={usernameError}
                        />
                        <Input
                            value={password}
                            onChange={(e) => this.onChange(e, 'password')}
                            onBlur={this.handlerBlurPass}
                            label="Password"
                            id="password"
                            type='login'
                            name='password'
                            placeholder="Enter your password"
                            error={passwordError}
                        />
                        <Input
                            value={rePassword}
                            onChange={(e) => this.onChange(e, 'rePassword')}
                            onBlur={this.handlerBlurRePass}
                            label="Re-password"
                            id="re-password"
                            type='login'
                            name='password'
                            placeholder="Repeat your password"
                            error={rePasswordError}
                        />
                        <button className={styles.button} type='submit'>Register</button>
                        <div className={styles.div}>
                            <span>Already have an account?</span>
                            <Link
                                key='Sign in'
                                href="/login"
                                title='Sign in'
                                type='register'
                            />
                        </div>
                    </form>
                </div>
            </PageLayout >
        )
    }
}

export default withRouter(RegisterPage)
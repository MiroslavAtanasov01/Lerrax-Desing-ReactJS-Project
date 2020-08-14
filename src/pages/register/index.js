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
import { rePasswordValidator, passwordValidator, usernameValidator, emailValidator } from '../../utils/formValidators'

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

    handlerBlurEmail = () => { this.setState({ emailError: emailValidator(this.state.email) }) }
    handlerBlurUsername = () => { this.setState({ usernameError: usernameValidator(this.state.username) }) }
    handlerBlurPassword = () => { this.setState({ passwordError: passwordValidator(this.state.password) }) }
    handlerBlurRePassword = () => { this.setState({ rePasswordError: rePasswordValidator(this.state.password, this.state.rePassword) }) }

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
                            onBlur={this.handlerBlurPassword}
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
                            onBlur={this.handlerBlurRePassword}
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
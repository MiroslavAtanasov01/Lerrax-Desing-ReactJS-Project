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
import { passwordValidator, emailValidator } from '../../utils/loginValidator'


class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            emailError: "",
            passwordError: "",
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

        const { email, password, emailError, passwordError } = this.state

        if (email && password && emailError === "" && passwordError === "") {
            try {
                const promise = await fetch('http://localhost:8888/api/user/login', {
                    method: 'POST',
                    body: JSON.stringify({ email, password }),
                    headers: { 'COntent-type': 'application/json' }
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
                    this.props.history.push('/login')
                }
            } catch (e) {
                toast.error('Incorrect email/password')
            }
        } else {
            this.props.history.push('/login')
            toast.error('Please enter valid credentials')
        }
    }

    handlerBlurEmail = () => { this.setState({ emailError: emailValidator(this.state.email) }) }
    handlerBlurPassword = () => { this.setState({ passwordError: passwordValidator(this.state.password) }) }

    render() {
        const { email, password, emailError, passwordError } = this.state

        return (
            <PageLayout>
                <div className={styles.main}>
                    <PageTitle title="Sign in | Lerrax Design" />
                    <ToastContainer />
                    <form className={styles.container} onSubmit={this.onSubmit}>
                        <h1 className={styles.h1}>Login</h1>
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
                            name='password'
                            value={password}
                            onChange={(e) => this.onChange(e, 'password')}
                            onBlur={this.handlerBlurPassword}
                            label="Password"
                            id="password"
                            type='login'
                            placeholder="Enter your password"
                            error={passwordError}
                        />
                        <button className={styles.button} type='submit'>Login</button>
                        <div className={styles.div}>
                            <span>Don`t have an account?</span>
                            <Link
                                key='Sign up'
                                href="/register"
                                title='Sign up'
                                type='login'
                            />
                        </div>
                    </form>
                </div>
            </PageLayout>
        )
    }
}

export default withRouter(LoginPage)
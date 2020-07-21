import React, { Component } from 'react'
import styles from './index.module.css'
import PageLayout from '../../components/page-layout'
import Input from '../../components/input'
import Link from '../../components/link'

class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
        }
    }

    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value

        this.setState(newState)
    }


    render() {
        const { email, password, } = this.state

        return (
            <PageLayout>
                <div className={styles.container}>
                    <h1 className={styles.h1}>Login</h1>
                    <Input
                        value={email}
                        onChange={(e) => this.onChange(e, 'email')}
                        label="Email"
                        id="email"
                        type='login'
                    />
                    <Input
                        value={password}
                        onChange={(e) => this.onChange(e, 'password')}
                        label="Password"
                        id="password"
                        type='login'
                    />
                    <button className={styles.button}>Login</button>
                    <div className={styles.div}>
                        <span>Don`t have an account?</span>
                        <Link
                            key='Sign up'
                            href="/register"
                            title='Sign up'
                            type='login'
                        />
                    </div>
                </div>
            </PageLayout>
        )
    }
}

export default LoginPage
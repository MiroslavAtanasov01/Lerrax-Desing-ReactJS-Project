import React, { Component } from 'react'
import styles from './index.module.css'
import PageLayout from '../../components/page-layout'
import Input from '../../components/input'

class ContactsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            message: ""
        }
    }

    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value

        this.setState(newState)
    }

    render() {
        const { firstName, lastName, email, message } = this.state

        return (
            <PageLayout>
                <div className={styles.container}>
                    <div className={styles.div}>
                        <h2 className={styles.h2}>Contact Us</h2>
                        <Input
                            value={firstName}
                            onChange={(e) => this.onChange(e, 'firstName')}
                            label="First name"
                            id="firstName"
                            type='contacts'
                        />
                        <Input
                            value={lastName}
                            onChange={(e) => this.onChange(e, 'lastName')}
                            label="Last name"
                            id="lastName"
                            type='contacts'
                        />
                        <Input
                            value={email}
                            onChange={(e) => this.onChange(e, 'email')}
                            label="E-mail"
                            id="email"
                            type='contacts'
                        />
                        <label className={styles.label}>Message</label>
                        <textarea className={styles.textarea} value={message} onChange={(e) => this.onChange(e, 'message')}></textarea>
                        <button className={styles.button}>Send Message</button>
                    </div>
                    <div className={styles.div2}>
                        <ul className={styles.ul}>
                            <li>LERRAX DESIGN</li>
                            <li>32 Iskar street, 1680 Sofia, Bulgaria</li>
                            <li>Tel: +359 2427 5669 | Fax: +359 2427 4856</li>
                            <li>Email: info@lerrax-design.com</li>
                        </ul>
                        <ul className={styles.ul}>
                            <li>Yana Tsoneva</li>
                            <li>Mobile: +359 888 55 91 68</li>
                            <li>Email: Yana.Tsoneva@lerrax-design.com</li>
                        </ul>
                        <ul className={styles.ul}>
                            <li>Miroslav Atanasov</li>
                            <li>Mobile: +359 888 45 33 16</li>
                            <li>Email: Miroslav.Atanasov@lerrax-design.com</li>
                        </ul>
                    </div>
                </div>
            </PageLayout >
        )
    }
}

export default ContactsPage 
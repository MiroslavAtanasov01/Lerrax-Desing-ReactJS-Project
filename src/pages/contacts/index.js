import React from 'react'
import styles from './index.module.css'
import PageLayout from '../../components/page-layout'
import PageTitle from '../../components/helmet'
import GoogleApiWrapper from '../../components/googleMap'

const ContactsPage = () => {
    return (
        <PageLayout>
            <GoogleApiWrapper />

            <div className={styles.container}>
                <PageTitle title="Contact us | Lerrax Design" />
                <h2>Contact Us</h2>
                <div className={styles.main}>
                    <ul>
                        <li>LERRAX DESIGN</li>
                        <li>32 Iskar street, 1680 Sofia, Bulgaria</li>
                        <li>Tel: +359 2427 5669 | Fax: +359 2427 4856</li>
                        <li>Email: info@lerrax-design.com</li>
                    </ul>
                    <ul>
                        <li>Yana Tsoneva</li>
                        <li>Mobile: +359 888 55 91 68</li>
                        <li>Email: Yana.Tsoneva@lerrax-design.com</li>
                    </ul>
                    <ul>
                        <li>Miroslav Atanasov</li>
                        <li>Mobile: +359 888 45 33 16</li>
                        <li>Email: Miroslav.Atanasov@lerrax-design.com</li>
                    </ul>
                </div>
            </div>
        </PageLayout >
    )
}

export default ContactsPage 
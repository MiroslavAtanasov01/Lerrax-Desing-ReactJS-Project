import React from 'react'
import styles from './index.module.css'
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import FooterLink from '../footer-link'
import Icons from '../icons'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <h3>Follow us</h3>
                <Icons href="https://www.youtube.com" icon={faYoutube} />
                <Icons href="https://www.linkedin.com" icon={faLinkedin} />
                <Icons href="https://www.facebook.com" icon={faFacebook} />
                <Icons href="https://www.twitter.com" icon={faTwitter} />
                <Icons href="https://www.instagram.com" icon={faInstagram} />
            </div>

            <section className={styles.section}>
                <FooterLink
                    title="Company Address" first="32 Iskar street" second="Sofia - Bulgaria" third="Europe"
                />
                <FooterLink
                    title="E-mail" first="info@lerrax-design.com" second="Yana.Tsoneva@lerrax-design.com" third="Miroslav.Atanasov@lerrax-design.com"
                />
                <FooterLink
                    title="Phone Numbers" first="+359 2427 5669" second="+359 888 45 33 16" third="+359 888 55 91 68"
                />
            </section>
            <p className={styles.copyRight}>Lerrax Design &copy; 2020</p>
        </footer>
    )
}


export default Footer
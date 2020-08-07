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
                <FooterLink title="Company Address" name="32 Iskar street" name2="Sofia - Bulgaria" name3="Europe" />
                <FooterLink title="E-mail" name="info@lerrax-design.com" name2="Yana.Tsoneva@lerrax-design.com" name3="Miroslav.Atanasov@lerrax-design.com" />
                <FooterLink title="Phone Numbers" name="+359 2427 5669" name2="+359 888 45 33 16" name3="+359 888 55 91 68" />
            </section>
            <p className={styles.copyRight}>Lerrax Design &copy; 2020</p>
        </footer>
    )
}


export default Footer
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
                <FooterLink title="Company Address" name="Responsive Street 7" name2="London - United Kingdom" name3="Europe" />
                <FooterLink title="E-mail" name="contact@sampledomain.com" name2="office@sampledomain.com" name3="office@sampledomain.com" />
                <FooterLink title="Phone Numbers" name="0800 4521 800 50" name2="0450 5896 625 16" name3="0798 6546 465 15" />
            </section>
            <p className={styles.copyRight}>Lerrax Design &copy; 2020</p>
        </footer>
    )
}


export default Footer
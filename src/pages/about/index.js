import React from 'react'
import styles from './index.module.css'
import PageLayout from '../../components/page-layout'
import PageTitle from '../../components/helmet'


const AboutUsPage = () => {
    return (
        <PageLayout>
            <div className={styles.container}>
                <PageTitle title="About us | Lerrax Design" />
                <h2 className={styles.h2}>About Us</h2>
                <div className={styles.text}>
                    <p className={styles.p}>In 2012, we started Lerrax Design with a vision - to make a million homes beautiful.
                    Back then, our catalogue featured just 35 designs. Yet, when our customers shared
                    photographs of their homes, we saw they were remarkably distinct. The same table, the
                    same chair was used differently by different people. This told us something. People
                    want their homes to be unique. We also realized that people are a lot happier creating
                    things than they are buying things. We are a creative, imaginative, expressive species.
                And our homes are just one of the many canvases we have at our disposal.</p>

                    <p className={styles.p}>Today, we understand that we’re here not just to sell well-designed products. We’re
                    here to help you create spaces that mirror who you are. At Lerrax Design, we want you
                    to discover the joy of creating. Starting with your home. We want you to think of the
                    setting up of a space as an energizing, creative pursuit. To breathe life into empty
                    rooms with your ideas. To take a few square feet of nothing, and transform it into
                something beautiful.</p>
                </div>

                <h2 className={styles.h2}>Our Values</h2>
                <div className={styles.text}>
                    <p className={styles.p}><b>Customer Obsession</b>: Customers are at the center of whatever we do at Lerrax Design.
                We ensure that we get the right customer solution in all our initiatives.
                We establish a long-term relationship with every customer and aim to delight them in every
                interaction.We aim to set the global benchmark for customer happiness scores.</p>

                    <p className={styles.p}><b>Honesty & Transparency</b>: We are honest, ethical, and trustworthy in the way we
                live life. We hold the highest standards of corporate governance in all our
                activities. We communicate transparently with all our stakeholders. When we
                make mistakes, we are honest and upfront about owning up to them.</p>

                    <p className={styles.p}> <b>Stepping Up</b>: We take charge, go the extra mile, and think differently to find
                    innovative solutions. When in doubt, we push ourselves harder to solve newer
                    challenges and get better solutions</p>

                    <p className={styles.p}><b>Efficiency</b>: We are here to build a long-term sustainable business. We aim to do
                more with less and focus on zero waste. We believe that a self-sustaining
                business will be responsible and solve customer problems in the right manner.</p>
                </div>
            </div>
        </PageLayout >
    )
}

export default AboutUsPage
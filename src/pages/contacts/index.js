import React from 'react'
import styles from './index.module.css'
import PageLayout from '../../components/page-layout'
import PageTitle from '../../components/helmet'
import GoogleMapReact from 'google-map-react';

const ContactsPage = () => {
    const renderMarkers = (map, maps) => {
        let marker = new maps.Marker({
            position: { lat: 42.6998747, lng: 23.3278607 },
            map,
            title: `Lerrax-design Ltd.`
        });
        return marker;
    };

    return (
        <PageLayout>
            <PageTitle title="Contact us | Lerrax Design" />
            <h2 className={styles.title}>Contact Us</h2>
            <div className={styles.container}>
                <div className={styles.map}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyDAzJ4mGrygJPCizRL--mHLNgu4v691pVc' }}
                        defaultCenter={{ lat: 43.213, lng: 27.920 }}
                        defaultZoom={16}
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
                    >
                    </GoogleMapReact>
                </div>
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
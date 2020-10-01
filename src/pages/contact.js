import React from 'react'
import Header from '../components/Contacts/Header'
import Map from '../components/Contacts/Map'
import ContactForm from '../components/Contacts/ContactForm'
import s from '../components/Contacts/contact.scss'

const contact = () => {
    return (
        <>
            <Header />
            <div className={s.contactContainer}>
                <Map />
                <ContactForm
                    bucketItems={[
                        { raffle: '10', item: 'shirt', name: 'Sceptre' },
                        { raffle: '7', item: 'hat', name: 'Yumm' },
                        { raffle: '5', item: 'shirt', name: 'Cowin' },
                    ]}
                />
            </div>
        </>
    )
}

export default contact

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
                        { raffle_item: 'Sceptre', tickets: 10 },
                        { raffle_item: 'Yumm', tickets: 13 },
                        { raffle_item: 'Cowin', tickets: 5 },
                        { raffle_item: 'Buu', tickets: 15 },
                        { raffle_item: 'Trick', tickets: 9 },
                        { raffle_item: 'Moo', tickets: 2 },
                    ]}
                />
            </div>
        </>
    )
}

export default contact

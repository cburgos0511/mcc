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
                <ContactForm />
            </div>
        </>
    )
}

export default contact

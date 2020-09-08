import React, { useState } from 'react'
import s from './form.scss'

const ContactForm = () => {
    const [formInput, setFormInput] = useState({
        name: '',
        email: '',
        message: '',
    })

    const encode = data => {
        return Object.keys(data)
            .map(
                key =>
                    encodeURIComponent(key) +
                    '=' +
                    encodeURIComponent(data[key])
            )
            .join('&')
    }
    const handleChange = e => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'mcc-contact-form', ...formInput }),
        })
            .then(() => alert('Success!'))
            .catch(err => alert(err))
        e.preventDefault()
    }
    return (
        <div className={s.container}>
            <form
                onSubmit={handleSubmit}
                name="mcc-contact-form"
                method="post"
                data-netlify="true"
                data-netlify-honey="bot-field"
                className={s.form}
            >
                <h1 className={s.title}>Leave us a message</h1>
                <input
                    type="hidden"
                    name="form-name"
                    value="mcc-contact-form"
                />
                <div className={s.form__wrap}>
                    <label htmlFor="name">Name</label>
                    <input name="name" type="text" onChange={handleChange} />
                </div>
                <div className={s.form__wrap}>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="text" onChange={handleChange} />
                </div>
                <div className={s.form__wrap}>
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        type="text"
                        rows="16"
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default ContactForm

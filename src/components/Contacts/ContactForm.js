import React from 'react'
import s from './form.scss'

const ContactForm = () => {
    return (
        <div className={s.container}>
            <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honey="bot-field"
                className={s.form}
            >
                <h1 className={s.title}>Leave us a message</h1>
                <div className={s.form__wrap}>
                    <label htmlFor="name">Name</label>
                    <input name="name" type="text" />
                </div>
                <div className={s.form__wrap}>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="text" />
                </div>
                <div className={s.form__wrap}>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" type="text" rows="16" />
                </div>

                <button>Send</button>
            </form>
        </div>
    )
}

export default ContactForm

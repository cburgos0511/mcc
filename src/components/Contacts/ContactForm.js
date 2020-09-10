import React from 'react'
import s from './form.scss'
import useFormValidation from '../../hooks/useFormValidation'
import validation from '../../helper/validation'

const ContactForm = () => {
    const { state, handleChange, onSubmit, errors } = useFormValidation(
        handleSubmit,
        validation
    )

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

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'mcc-contact-form', ...state }),
        })
            .then(() => {
                alert('Success!')
            })
            .catch(err => alert(err))
    }
    return (
        <div className={s.container}>
            <form
                onSubmit={onSubmit}
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
                    {errors.name && (
                        <span className={s.error}>*{errors.name}</span>
                    )}
                </div>

                <div className={s.form__wrap}>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="text" onChange={handleChange} />
                    {errors.email && (
                        <span className={s.error}>*{errors.email}</span>
                    )}
                </div>
                <div className={s.form__wrap}>
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        type="text"
                        rows="16"
                        onChange={handleChange}
                    />
                    {errors.email && (
                        <span className={s.error}>*{errors.message}</span>
                    )}
                </div>

                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default ContactForm

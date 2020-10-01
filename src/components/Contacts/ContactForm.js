import React, { useState } from 'react'
import s from './form.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const bucketContext = [
    { raffle_item: 'Sceptre', tickets: 10 },
    { raffle_item: 'Yumm', tickets: 13 },
    { raffle_item: 'Cowin', tickets: 5 },
    { raffle_item: 'Buu', tickets: 15 },
    { raffle_item: 'Trick', tickets: 9 },
    { raffle_item: 'Moo', tickets: 2 },
]

const ContactForm = () => {
    const cleanArray = bucketContext
        .map((item, i) => `${item.tickets} － ${item.raffle_item}`)
        .join(' | ')
    console.log(cleanArray)

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

    return (
        <div className={s.container}>
            <h1 className={s.title}>Leave us a message</h1>

            <Formik
                validate={values => {
                    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                    const errors = {}
                    if (!values.name) {
                        errors.name = 'Name Required'
                    }
                    if (!values.email || !emailRegex.test(values.email)) {
                        errors.email = 'Valid Email Required'
                    }
                    if (!values.message) {
                        errors.message = 'Message Required'
                    }
                    return errors
                }}
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    bucket: cleanArray,
                }}
                onSubmit={(values, actions) => {
                    console.log(values)
                    fetch('/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: encode({
                            'form-name': 'mcc-contact-form',
                            ...values,
                        }),
                    })
                        .then(() => {
                            alert('Success')
                            actions.resetForm()
                        })
                        .catch(() => {
                            alert('Error')
                        })
                        .finally(() => actions.setSubmitting(false))
                }}
            >
                {() => (
                    <Form
                        name="mcc-contact-form"
                        data-netlify={true}
                        data-netlify-honeypot="bot-field"
                    >
                        <input type="hidden" name="bot-field" />
                        <input
                            type="hidden"
                            name="form-name"
                            value="mcc-contact-form"
                        />
                        <div className={s.form__wrap}>
                            <label htmlFor="name">Name </label>
                            <Field name="name" />
                            <ErrorMessage
                                name="name"
                                render={msg => (
                                    <span className={s.error}>*{msg}</span>
                                )}
                            />
                        </div>

                        <div className={s.form__wrap}>
                            <label htmlFor="email">Email </label>
                            <Field name="email" />
                            <ErrorMessage
                                name="email"
                                render={msg => (
                                    <span className={s.error}>*{msg}</span>
                                )}
                            />
                        </div>

                        <div className={s.form__wrap}>
                            <label htmlFor="message">Message </label>
                            <Field
                                name="message"
                                component="textarea"
                                rows={16}
                            />
                            <ErrorMessage
                                name="message"
                                render={msg => (
                                    <span className={s.error}>*{msg}</span>
                                )}
                            />
                        </div>
                        <div
                            style={{
                                opacity: 0,
                                zIndex: -1,
                                position: 'absolute',
                            }}
                            className={s.form__wrap}
                        >
                            <label htmlFor="bucket">Bucket </label>
                            <Field name="bucket" component="textarea" />
                        </div>
                        <button className={s.button} type="submit">
                            Send
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ContactForm

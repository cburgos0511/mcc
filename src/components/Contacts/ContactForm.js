import React from 'react'
import s from './form.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const ContactForm = () => {
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
                    message: '',
                }}
                onSubmit={(values, actions) => {
                    fetch('/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: encode({
                            'form-name': 'contact-demo',
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
                    <Form name="mcc-contact-form" data-netlify={true}>
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

/* <form
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
</form> */

import React, { useState, useRef, useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import s from './cart.scss'
import Remove from '../../assets/svg/remove.svg'
const Cart = () => {
    const [cartState, setCartState] = useContext(StoreContext)
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        buckets: cartState.cartItems,
    })
    const [step, setStep] = useState(1)
    const isOpen = cartState.isCartOpen === true ? s.open : 'nope'
    const total =
        cartState.cartItems
            .map(item => item.tickets)
            .reduce((total, amount) => total + amount, 0) * 5
    const removeItem = index => {
        const cartList = cartState.cartItems
        cartList.splice(index, 1)
        setCartState({ ...cartState, cartItems: cartList })
    }
    const closeCart = () => {
        setCartState({ ...cartState, isCartOpen: !cartState.isCartOpen })
    }
    const cleanArray = cartState.cartItems
        .map((item, i) => `${item.name} － ${item.tickets}`)
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
    const handleDeets = e => {
        e.preventDefault()
        setStep(2)
    }
    const handleBackDeets = e => {
        e.preventDefault()
        setStep(1)
    }
    return (
        <div className={`${s.cart} ${isOpen}`}>
            <div className={s.close} onClick={closeCart}>
                <Remove />
            </div>
            <div className={s.cart__wrapper}>
                {formState.buckets.length > 0 && (
                    <div className={s.copy}>
                        <p>
                            Thank you for supporting the Goodbuddies. To submit
                            payment, please Venmo your total to
                            @John-Hillebrandt. If you are unable to Venmo,
                            please email goodbuddies9136@gmail.com. We'll enter
                            all your tickets into the raffle. Be sure to catch
                            the Zoom on Oct. 3 at 2pm to see if you've won. A
                            link to the Zoom is on the homepage. Thanks!
                        </p>
                    </div>
                )}
                {formState.buckets.length < 1 && (
                    <div className={s.copy}>
                        <p>
                            You currently have 0 tickets in your cart! Why are
                            you even looking in here...
                        </p>
                    </div>
                )}
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
                        bucket: cleanArray,
                    }}
                    onSubmit={(values, actions) => {
                        console.log(values)
                        fetch('/', {
                            method: 'POST',
                            headers: {
                                'Content-Type':
                                    'application/x-www-form-urlencoded',
                            },
                            body: encode({
                                'form-name': 'raffle-form',
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
                            name="raffle-form"
                            data-netlify={true}
                            data-netlify-honeypot="bot-field"
                        >
                            <input type="hidden" name="bot-field" />
                            <input
                                type="hidden"
                                name="form-name"
                                value="raffle-form"
                            />
                            {step < 2 && (
                                <fieldset>
                                    {formState.buckets.map((bucket, index) => (
                                        <div
                                            className={s.lineItem}
                                            key={bucket.id}
                                        >
                                            <div
                                                className={s.remove}
                                                onClick={index =>
                                                    removeItem(index)
                                                }
                                            >
                                                <Remove />
                                            </div>
                                            <p>
                                                <strong>{bucket.name}</strong>
                                            </p>
                                            <p style={{ marginLeft: `auto` }}>
                                                Tickets: {bucket.tickets}
                                            </p>
                                        </div>
                                    ))}
                                    <div className={s.total}>
                                        <p>
                                            <strong>Total:</strong>
                                        </p>
                                        <p>${total}.00</p>
                                    </div>
                                </fieldset>
                            )}
                            {step > 1 && (
                                <fieldset>
                                    <div className={s.row}>
                                        <label htmlFor="name">Name</label>
                                        <Field
                                            type="text"
                                            name="name"
                                            id="name"
                                        />
                                    </div>
                                    <div className={s.row}>
                                        <label htmlFor="email">Email</label>
                                        <Field
                                            type="text"
                                            name="email"
                                            id="email"
                                        />
                                    </div>
                                    <div className={s.row}>
                                        <label htmlFor="phone">
                                            Phone Number
                                        </label>
                                        <Field
                                            type="tel"
                                            name="phone"
                                            id="phone"
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
                                        <Field
                                            name="bucket"
                                            component="textarea"
                                        />
                                    </div>
                                </fieldset>
                            )}
                            <fieldset>
                                {step === 1 && (
                                    <button onClick={e => handleDeets(e)}>
                                        Enter your deets
                                    </button>
                                )}
                                {step > 1 && (
                                    <button onClick={e => handleBackDeets(e)}>
                                        Back
                                    </button>
                                )}
                                {step > 1 && (
                                    <button type="submit">Submit</button>
                                )}
                            </fieldset>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
export default Cart

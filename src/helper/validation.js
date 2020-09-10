export default function validate(values) {
    const err = {}
    if (!values.email) {
        err.email = 'Email Address is Required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        err.email = 'Email Address is Invalid'
    }
    if (!values.name) {
        err.name = 'Name is Required'
    }
    if (!values.message) {
        err.message = 'Message is Required.'
    } else if (values.message.lenth < 50) {
        err.message = 'Message must more than 50 characters'
    }
    return err
}

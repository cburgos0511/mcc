import { useState, useEffect } from 'react'

const useUserForm = (callback, validate) => {
    const [state, setState] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [errors, setErrors] = useState({})

    const [hasSubmited, setHasSubmited] = useState(false)

    const handleChange = evt => {
        const { value, name } = evt.target
        setState({
            ...state,
            [name]: value,
        })
    }

    const onSubmit = () => {
        console.log('HELLO')
        setErrors(validate(state))
        setHasSubmited(true)
    }

    useEffect(() => {
        if (hasSubmited && Object.keys(errors).length === 0) {
            callback()
            setState({
                name: '',
                email: '',
                message: '',
            })
        }
    }, [errors, callback, hasSubmited])

    return {
        state,
        errors,
        handleChange,
        onSubmit,
    }
}

export default useUserForm

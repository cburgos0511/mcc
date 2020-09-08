import React from 'react'
import s from '../Beliefs/header.scss'

const Header = () => {
    return (
        <section className={s.header}>
            <div className={s.header__wrapper}>
                <div className={s.headerContent}>
                    <h4>GET IN TOUCH</h4>
                    <h1>Contact</h1>
                </div>
            </div>
        </section>
    )
}

export default Header

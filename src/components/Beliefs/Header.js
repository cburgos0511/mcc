import React from 'react'
import s from './header.scss'

const Header = () => {
    return (
        <section className={s.header}>
            <div className={s.header__wrapper}>
                <div className={s.headerContent}>
                    <h4>WHAT WE BELIEVE</h4>
                    <h1>Principles & Practices</h1>
                </div>
            </div>
        </section>
    )
}

export default Header

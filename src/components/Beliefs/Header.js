import React from 'react'
import s from './header.scss'
import articles from '../../data/articles'

const Header = ({ subtitle, title }) => {
    return (
        <section className={s.header}>
            <div className={s.header__wrapper}>
                <div className={s.headerContent}>
                    <h4>{subtitle}</h4>
                    <h1>{title}</h1>
                </div>
            </div>
        </section>
    )
}

export default Header

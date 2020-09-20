import React from 'react'
import s from './burger.scss'

const HeaderBurger = ({ toggleNav, isMenuOpen }) => {
    const openClass = isMenuOpen ? s.open : ''
    return (
        <div
            tabIndex="0"
            role="button"
            className={`${s.burger} ${openClass}`}
            onClick={() => toggleNav()}
        >
            <span className={s.burger__line}></span>
            <span className={s.burger__line}></span>
            <span className={s.burger__line}></span>
        </div>
    )
}

export default HeaderBurger

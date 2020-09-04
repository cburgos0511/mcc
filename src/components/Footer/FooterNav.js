import React from 'react'
import TransitionLink from 'gatsby-plugin-transition-link'
import s from './footer-nav.scss'

export const FooterNav = ({ items }) => {
    return (
        <nav className={s.nav}>
            {items.map((item, index) => (
                <TransitionLink
                    to={item.slug}
                    key={item.key}
                    className={s.nav__items}
                >
                    {item.name}
                </TransitionLink>
            ))}
        </nav>
    )
}

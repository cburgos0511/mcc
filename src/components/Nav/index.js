import TransitionLink from 'gatsby-plugin-transition-link'
import React from 'react'

import s from './nav.scss'

const Nav = React.forwardRef(({ header, items, isMenuOpen }, ref) => {
    const navModifier = header ? s.navHeader : s.navFooter
    const navItemModifier = header ? s.nav__itemHeader : s.nav__itemFooter

    const openClass = isMenuOpen ? s.open : ''

    return (
        <nav className={`${s.nav} ${navModifier} ${openClass}`} ref={ref}>
            {items.map((item, index) => (
                <TransitionLink
                    to={item.slug}
                    key={item.id}
                    className={`${s.nav__item} ${navItemModifier}`}
                    ref={items[index].ref}
                >
                    {item.name}
                </TransitionLink>
            ))}
        </nav>
    )
})

export default Nav

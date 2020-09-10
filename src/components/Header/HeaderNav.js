import TransitionLink from 'gatsby-plugin-transition-link'
import React from 'react'

import s from './header-nav.scss'

const HeaderNav = React.forwardRef(({ items, isMenuOpen, toggleNav }, ref) => {
    const openClass = isMenuOpen ? s.open : ''
    return (
        <nav className={`${s.nav} ${openClass}`} ref={ref}>
            {items.map((item, index) => (
                <TransitionLink
                    to={item.slug}
                    key={item.id}
                    className={`${s.nav__item}`}
                    ref={items[index].ref}
                    onClick={() => toggleNav()}
                >
                    {item.name}
                </TransitionLink>
            ))}
        </nav>
    )
})

export default HeaderNav

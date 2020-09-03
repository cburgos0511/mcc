import React, { useState, useRef, createRef, useEffect } from 'react'
import TransitionLink from 'gatsby-plugin-transition-link'
import { gsap } from 'gsap'
import Logo from '../../assets/svg/mcc-type.svg'
import HeaderNav from './HeaderNav'
import HeaderBurger from './HeaderBurger'
import pages from '../../data'
import { useMediaQuery } from '../../hooks'
import useScrollLock from 'use-scroll-lock'

import s from './header.scss'

const Header = () => {
    //Setup state to determine if menu is open or not
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const isSmallScreen = useMediaQuery('(max-width: 989px)')

    //Loop through the pages and create a state of items with refs
    //to use for our animation
    const [items] = useState(
        pages.map(page => {
            return {
                slug: page.uid,
                name: page.name,
                id: page.id,
                ref: createRef(),
            }
        })
    )

    //Setup a timeline to use
    const [menuTL] = useState(
        gsap.timeline({
            paused: true,
            defaults: { duration: 1, ease: 'expo.out' },
        })
    )

    //Setup the Nav ref
    const navRef = useRef()

    //Setup menuTL things and account for window resize events
    useEffect(() => {
        //Create an array with just the ref of the nav items
        const itemsRefs = items.map(item => item.ref.current)

        //Build the timeline
        if (isSmallScreen) {
            menuTL
                .fromTo(navRef.current, { opacity: 0 }, { opacity: 1 })
                .fromTo(
                    itemsRefs,
                    { autoAlpha: 0, y: 48 },
                    { autoAlpha: 1, y: 0, stagger: 0.1 },
                    '-=0.4'
                )
                .reverse()
        } else {
            menuTL
                .seek(0)
                .clear()
                .pause()
            gsap.set([navRef.current, itemsRefs], { clearProps: 'all' })
        }
    }, [isSmallScreen])

    //Run menuTL base on Menu State
    useEffect(() => {
        menuTL.reversed(!isMenuOpen)
    }, [isMenuOpen])

    //ScrollLock the body when the menu is open
    useScrollLock(isMenuOpen)

    const toggleNav = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className={s.header}>
            <div className={s.header__wrapper}>
                <div className={s.header__logo}>
                    <Logo />
                </div>
                <HeaderNav
                    header
                    items={items}
                    ref={navRef}
                    isMenuOpen={isMenuOpen}
                    toggleNav={toggleNav}
                />
                <HeaderBurger toggleNav={toggleNav} isMenuOpen={isMenuOpen} />
            </div>
        </header>
    )
}

export default Header

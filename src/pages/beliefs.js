import React from 'react'

import SEO from '../components/Seo'
import Header from '../components/Beliefs/Header'
import PrincipalsAndBeliefs from '../components/Beliefs/PrinciplesAndBeliefs'
import pages from '../data'
const Beliefs = () => {
    const data = pages[1].data
    return (
        <>
            <SEO title="Our Beliefs" />
            <Header subtitle="WHAT WE BELIEVE" title="Principles & Practices" />
            <PrincipalsAndBeliefs principles={data} />
        </>
    )
}

export default Beliefs

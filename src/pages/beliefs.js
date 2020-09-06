import React from 'react'

import SEO from '../components/Seo'
import Header from '../components/Beliefs/Header'
import PrincipalsAndBeliefs from '../components/Beliefs/PrinciplesAndBeliefs'
import principles from '../data/principles'

const Beliefs = () => (
    <>
        <SEO title="Our Beliefs" />
        <Header />
        <PrincipalsAndBeliefs principles={principles} />
    </>
)

export default Beliefs

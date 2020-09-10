import React from 'react'

import SEO from '../components/Seo'
import Header from '../components/Beliefs/Header'
import Articles from '../components/Articles'

const SecondPage = () => (
    <>
        <SEO title="Articles" />
        <Header subtitle="FURTHER YOUR UNDERSTANDING" title="Articles" />
        <Articles />
    </>
)

export default SecondPage

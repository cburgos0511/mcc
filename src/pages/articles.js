import React from 'react'
import SEO from '../components/Seo'
import Header from '../components/Beliefs/Header'
import Articles from '../components/Articles'
import articles from '../data/articles'

const articlesPage = () => (
    <>
        <SEO title="Articles" />
        <Header subtitle="FURTHER YOUR UNDERSTANDING" title="Articles" />
        <Articles articles={articles} />
    </>
)

export default articlesPage

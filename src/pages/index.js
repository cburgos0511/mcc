import React from 'react'
import { Link } from 'gatsby'

import Image from '../components/image'
import SEO from '../components/Seo'
import Hero from '../components/Hero'
import MeetingTimes from '../components/MeetingTimes'
import HomeBeliefs from '../components/OurBeliefsSection'

import pages from '../data'

const IndexPage = () => {
    const data = pages[0].data
    return (
        <>
            <SEO title="Home" />
            <Hero home data={data.HomeHero} />
            <MeetingTimes times={data.MeetingTimes} />
            <HomeBeliefs data={data.OurBeliefsSection} />
        </>
    )
}

export default IndexPage

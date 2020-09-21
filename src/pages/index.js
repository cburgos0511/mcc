import React from 'react'
import SEO from '../components/Seo'
import Hero from '../components/Hero'
import MeetingTimes from '../components/MeetingTimes'
import HomeBeliefs from '../components/OurBeliefsSection'
import { graphql, useStaticQuery } from 'gatsby'
import pages from '../data'
import FeaturedMessages from '../components/FeaturedMessages'

const query = graphql`
    query {
        allPodcastRssFeedEpisode(limit: 5) {
            edges {
                node {
                    id
                    item {
                        creator
                        title
                        isoDate(formatString: "MMM DD YYYY")
                        enclosure {
                            url
                        }
                    }
                }
            }
        }
    }
`
const IndexPage = () => {
    const { allPodcastRssFeedEpisode } = useStaticQuery(query)
    const pageData = pages[0].data

    return (
        <>
            <SEO title="Home" />
            <Hero home data={pageData.HomeHero} />
            <MeetingTimes times={pageData.MeetingTimes} />
            <HomeBeliefs data={pageData.OurBeliefsSection} />
            <FeaturedMessages podcast={allPodcastRssFeedEpisode} />
        </>
    )
}

export default IndexPage

import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import TransitionLink from 'gatsby-plugin-transition-link'
import Img from 'gatsby-image'
import s from './home-beliefs.scss'

const HERO_IMG_QUERY = graphql`
    query HomeBeliefsQuery {
        beliefsImage: file(relativePath: { eq: "beliefs-bg.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

const HomeBeliefs = ({ data }) => {
    const image = useStaticQuery(HERO_IMG_QUERY)
    return (
        <section className={`${s.homeBeliefs}`}>
            <div className={s.homeBeliefs__img}>
                <Img fluid={image.beliefsImage.childImageSharp.fluid} />
            </div>
            <div className={s.homeBeliefs__wrapper}>
                <div className={`${s.verse}`}>
                    <div className={`${s.verse__bg}`}></div>
                    <blockquote>{data.verse}</blockquote>
                </div>
                <div className={s.content}>
                    <h4>{data.heading}</h4>
                    <p>{data.content}</p>
                    <TransitionLink to="/beliefs" className="cta">
                        <span></span>
                        Learn More
                    </TransitionLink>
                </div>
            </div>
        </section>
    )
}

export default HomeBeliefs

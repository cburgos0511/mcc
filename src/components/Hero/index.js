import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import s from './hero.scss'

const HERO_IMG_QUERY = graphql`
    query {
        heroImage: file(relativePath: { eq: "home-hero.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

const Hero = ({ data, home }) => {
    const image = useStaticQuery(HERO_IMG_QUERY)
    const modifier = home ? s.heroHome : ''

    return (
        <section className={`${s.hero} ${modifier}`}>
            {home && (
                <div className={s.heroImg}>
                    <Img
                        fluid={image.heroImage.childImageSharp.fluid}
                        style={{ width: `100%`, height: `100%` }}
                    />
                </div>
            )}
            <div className={s.hero__wrapper}>
                {home && (
                    <div className={s.homeHeroContent}>
                        <h1>Millard Community Church</h1>

                        <div className={s.homeHeroContent__about}>
                            <h4>About US</h4>
                            <p>{data.about}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Hero

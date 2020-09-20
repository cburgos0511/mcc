import React from 'react'
import TransitionLink from 'gatsby-plugin-transition-link'
import s from './article.scss'

const Article = ({ article }) => {
    return (
        <div className={s.article}>
            {!article.resource ? (
                <TransitionLink to={article.link} className={s.linkWrap}>
                    <h1>{article.title}</h1>
                    <p>{article.description}</p>
                </TransitionLink>
            ) : (
                <a
                    target="_blank"
                    href={article.link}
                    rel="noreferrer"
                    className={s.linkWrap}
                >
                    <h1>{article.title}</h1>
                    <p>{article.description}</p>
                </a>
            )}

            <div className={s.info}>
                <p className={s.author}>{article.author}</p>
                <div className={s.divider} />
                <p className={s.date}>{article.date_published}</p>
            </div>
        </div>
    )
}

export default Article

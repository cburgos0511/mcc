import React from 'react'
import articles from '../../data/articles'
import Article from './Article'
import s from './article.scss'

const Articles = () => {
    return (
        <div className={s.container}>
            {articles.map(article => (
                <Article key={article.id} article={article} />
            ))}
        </div>
    )
}

export default Articles

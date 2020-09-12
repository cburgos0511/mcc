import React from 'react'
import Article from './Article'
import s from './article.scss'

const Articles = ({ articles }) => {
    return (
        <div className={s.container}>
            {articles.map(article => (
                <Article key={article.id} article={article} />
            ))}
        </div>
    )
}

export default Articles

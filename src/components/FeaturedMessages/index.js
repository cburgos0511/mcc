import React from 'react'
import s from './featured.scss'
import Message from './Message'

const FeaturedMessages = ({ podcast }) => {
    console.log(podcast)

    return (
        <section className={s.feature}>
            <h1 className={s.feature__h1}>Featured Messages</h1>
            {podcast.edges.map(pc => (
                <Message
                    key={pc.node.id}
                    title={pc.node.item.title}
                    published={pc.node.item.isoDate}
                    speaker={pc.node.item.creator}
                />
            ))}
        </section>
    )
}

export default FeaturedMessages

import React, { useState } from 'react'
import s from './featured.scss'
import Message from './Message'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import Close from '../../assets/svg/cancel.svg'

const FeaturedMessages = ({ podcast }) => {
    const [mp4, setMp4] = useState(null)
    const [player, setPlayer] = useState(false)

    const onHandlePlayer = url => {
        console.log('OnHandlePlayer: ' + url)

        setMp4(url)
        setPlayer(true)
    }
    console.log(mp4)

    return (
        <section className={s.feature}>
            <h1 className={s.feature__h1}>Featured Messages</h1>
            {podcast.edges.map(pc => (
                <Message
                    key={pc.node.id}
                    title={pc.node.item.title}
                    published={pc.node.item.isoDate}
                    speaker={pc.node.item.creator}
                    url={pc.node.item.enclosure.url}
                    onHandlePlayer={onHandlePlayer}
                />
            ))}
            {player && (
                <div className={s.player}>
                    <div class={s.close} onClick={() => setPlayer(false)}>
                        <Close />
                    </div>
                    <AudioPlayer
                        className={s.player__inner}
                        src={mp4}
                        autoPlay
                        layout="horizontal-reverse"
                        progressJumpSteps={{ backward: 15000, forward: 15000 }}
                    />
                </div>
            )}
        </section>
    )
}

export default FeaturedMessages

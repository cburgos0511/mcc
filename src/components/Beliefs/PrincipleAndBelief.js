import React from 'react'
import s from './principle.scss'

const PrincipleAndBelief = ({ principle, number }) => {
    return (
        <div className={s.principle__wrapper}>
            <div>
                <p className={s.number}>0{number}</p>
                <h3 className={s.principle}>{principle.principle}</h3>
                {principle.supporting_scripture.map((scripture, index) => (
                    <p className={s.scripture}>{scripture}</p>
                ))}
            </div>
            <div>
                {principle.belief.split('\n').map((paragraph, key) => {
                    return <p className={s.paragraph}>{paragraph}</p>
                })}
            </div>
        </div>
    )
}

export default PrincipleAndBelief

import React from 'react'
import s from './principle.scss'

const PrincipleAndBelief = ({ principle, number }) => {
    return (
        <div className={s.principle__wrapper}>
            <div>
                <h1 className={s.number}>0{number}</h1>
                <h3 className={s.principle}>{principle.principle}</h3>
                {principle.supporting_scripture.map((scripture, index) => (
                    <p className={s.scripture}>{scripture}</p>
                ))}
            </div>
            <div>
                {principle.belief.split('\n').map((paragraph, key) => {
                    return (
                        <p className={s.paragraph} key={key}>
                            {paragraph}
                        </p>
                    )
                })}
            </div>
        </div>
    )
}

export default PrincipleAndBelief

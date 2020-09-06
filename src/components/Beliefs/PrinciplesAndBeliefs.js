import React from 'react'
import PrincipleAndBelief from './PrincipleAndBelief'
import s from './principle.scss'

const PrinciplesAndBeliefs = ({ principles }) => {
    return (
        <div className={s.container}>
            {principles.map((principle, index) => (
                <PrincipleAndBelief
                    key={index}
                    principle={principle}
                    number={index + 1}
                />
            ))}
        </div>
    )
}

export default PrinciplesAndBeliefs

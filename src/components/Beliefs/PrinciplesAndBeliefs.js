import React from 'react'
import PrincipleAndBelief from './PrincipleAndBelief'
import s from './principle.scss'

const PrinciplesAndBeliefs = ({ principles }) => {
    console.log(principles)

    return (
        <div className={s.container}>
            {principles.map((principle, index) => (
                <PrincipleAndBelief
                    key={principle.id}
                    principle={principle}
                    number={index + 1}
                />
            ))}
        </div>
    )
}

export default PrinciplesAndBeliefs

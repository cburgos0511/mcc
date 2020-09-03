import React from 'react'
import s from './meeting-times.scss'

const MeetingDay = ({ day }) => {
    return (
        <div className={s.meetingDay}>
            <p className={s.meetingDay__header}>{day.day}</p>
            {day.times.map((item, index) => (
                <div className={s.meetingDay__time} key={index}>
                    <span>
                        <strong>{item.time}</strong>
                    </span>
                    <span>{item.description}</span>
                </div>
            ))}
        </div>
    )
}

export default MeetingDay

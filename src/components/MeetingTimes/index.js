import React from 'react'
import MeetingDay from './MeetingDay'
import s from './meeting-times.scss'

const MeetingTimes = ({ times }) => {
    return (
        <section className={s.meetingTimes}>
            <div className={s.meetingTimes__wrapper}>
                <div className={s.meetingTimes__header}>
                    <h3>Meeting Times</h3>
                </div>
                <div className={s.meetingTimes__body}>
                    {times.map((day, index) => (
                        <MeetingDay key={index} day={day} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MeetingTimes

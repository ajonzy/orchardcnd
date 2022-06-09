import React from 'react'
import RegisterModal from '../modals/register-modal'

import Loading from '../utils/loading'

export default function Register(props) {
    const renderClasses = () => {
        const currentYear = new Date().getFullYear()

        return Object.keys(props.classesData).length > 0
        ? props.classesData.sort((a,b) =>`${a.month} ${a.start_date}, ${a.year}` -`${b.month} ${b.start_date}, ${b.year}`).map(classData => (
            <div className="class-info-wrapper" key={`classInfo-${classData.id}`}>
                <div className="class-info">
                    <p className='info'>{classData.month} {classData.start_date}{classData.year != currentYear ? `, ${classData.year}` : null}</p>
                    <p className={`availabliity ${30 - classData.signups > 0 ? "open" : "full"}`}>{30 - classData.signups > 0 ? "Open" : "Full"}</p>
                </div>
                <div className="subsection">
                    <div className="times">
                        <p>Lectures: {classData.lecture_time}</p>
                        <p>Clinicals: {classData.clinical_time}</p>
                    </div>
                    <RegisterModal class={classData} />
                </div>
            </div>
        ))
        : <Loading message="Loading Classes" />
    }

    return (
        <div className='register-page-wrapper page-wrapper'>
            <div className="upcoming-classes-wrapper section-wrapper">
                <h2>Upcoming Classes</h2>
                <p>All classes are 104 hours long</p>
                <p>A current TB test, covid vaccination card and a set of scrubs will be required for clinicals</p>
                {renderClasses()}
            </div>
        </div>
    )
}
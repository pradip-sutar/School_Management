import React from 'react'
import SolutionCard from './utils/SolutionCard'
import { faUserPlus, faCalendarCheck, faEdit, faComments } from '@fortawesome/free-solid-svg-icons'

const Solution = () => {
  return (
    <div className="solution-container">
      <div className="solution-content">
        <h1>Why Aswini school</h1>
        <p>
        Our school management system provides an extensive suite of services aimed at optimizing school operations and enriching the educational experience.
        </p>
        <div className="solution-grid">
        <SolutionCard
            cardtitle="Student Enrollment"
            content="Simplify the enrollment process with our easy-to-use online registration system. Manage student data efficiently and securely."
            color="black"
            icon={faUserPlus}
          />
          <SolutionCard
            cardtitle="Attendance Tracking"
            content="Keep track of student attendance with real-time updates. Generate reports and manage absences effortlessly."
            color="black"
            icon={faCalendarCheck}
          />
          <SolutionCard
            cardtitle="Grade Management"
            content="Streamline grade entry and report generation. Ensure accurate and timely grading with our integrated system."
            color="black"
            icon={faEdit}
          />
          <SolutionCard
            cardtitle="Communication Tools"
            content="Enhance communication between teachers, students, and parents with our messaging and notification features."
            color="black"
            icon={faComments}
          />
        </div>


      </div>
    </div>
  )
}

export default Solution
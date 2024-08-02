import React from "react";
import WhatweserveCard from "./utils/WhatweserveCard";

const Whatweserve = () => {
  return (
    <div className="serve-container">
      <div className="serve-content">
        <h1>Browse Other service</h1>
        <p>
          From student enrollment to faculty management, our platform simplifies
          administrative tasks and fosters a more effective learning
          environment.
        </p>
        <div className="serve-grid">
          <WhatweserveCard
            cardtitle={"Student Enrollment"}
            image={
              "https://static.vecteezy.com/system/resources/thumbnails/007/008/825/small/grey-stethoscope-and-paper-plate-with-a-sheet-of-white-paper-with-text-open-enrollment-light-blue-backround-medical-concept-free-photo.jpg"
            }
          />
          <WhatweserveCard
            cardtitle={"Teacher Management"}
            image={
              "https://www.shutterstock.com/image-photo/four-diverse-multiracial-young-professional-600nw-2021619692.jpg"
            }
          />
          <WhatweserveCard
            cardtitle={"Class Scheduling"}
            image={
              "https://static.vecteezy.com/system/resources/previews/010/886/898/non_2x/school-timetable-weekly-classes-schedule-for-students-or-pupils-illustration-includes-many-education-elements-and-school-equipment-schedule-program-for-pupils-vector.jpg"
            }
          />
          <WhatweserveCard
            cardtitle={"Attendance Tracking"}
            image={
              "https://img.freepik.com/premium-vector/time-attendance-tracking-system-abstract-concept-vector-illustration_107173-33366.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722384000&semt=ais_hybrid"
            }
          />
          <WhatweserveCard
            cardtitle={"Grade Management"}
            image={
              "https://img.freepik.com/free-vector/preparing-test-together-learning-studying-with-friends-effective-revision-revision-timetables-planning-how-revise-exams-concept_335657-825.jpg"
            }
          />
          <WhatweserveCard
            cardtitle={"Parent Communication"}
            image={
              "https://media.istockphoto.com/id/1197654394/vector/vector-of-happy-children-students-runnning-on-a-bridge-handshake.jpg?s=612x612&w=0&k=20&c=cIeXiSUxJ9ZJzIQNpXTCu_mdOlwJWjXbGxCcJqIn9Tc="
            }
          />
          <WhatweserveCard
            cardtitle={"Library Management"}
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8HaI3pcKpgJuHBdL9VYDzfw2Jnn1QLfO2Tw&s"
            }
          />
          <WhatweserveCard
            cardtitle={"Financial Administration"}
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ysOjJhSQQE7Tu7k9jIdjRgo6nXbQzPelVQ&s"
            }
          />
          <WhatweserveCard
            cardtitle={"Health Records"}
            image={
              "https://media.istockphoto.com/id/1065782564/photo/electronic-medical-record-with-patient-data-and-health-care-information-in-tablet-doctor.jpg?s=612x612&w=0&k=20&c=BeTN2FUR7xHx-dz36BAEIhnojxhGbAGSc5eWmmnfiVo="
            }
          />
          <WhatweserveCard
            cardtitle={"Extracurricular Activities"}
            image={
              "https://media.istockphoto.com/id/1195381561/photo/extracurricular-activities-text-on-sticky-notes-at-office-desk.jpg?s=612x612&w=0&k=20&c=KSy7u4B_-CQhZAEWxYagJDJtyRsGM5QnHrG4b_Cj_2M="
            }
          />
          <WhatweserveCard
            cardtitle={"Curriculum Planning"}
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8T5h03PMgM4NL3majRavfVnJDbBBbG3XUpg&s"
            }
          />
          <WhatweserveCard
            cardtitle={"Event Management"}
            image={
              "https://img.freepik.com/premium-vector/event-management-wedding-planner-manager-planning-event-conference-party_501813-2157.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Whatweserve;

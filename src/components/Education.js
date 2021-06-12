import React from "react";
import { Container } from "react-bootstrap";
import { Event } from "react-timeline-scribble";

const Education = ({ education, courses }) => {
  return (
    <>
      {education ? (
        <Event title={education.qualification} interval={education.date} subtitle={education.school}>
          {education.description}
        </Event>
      ) : (
        <Event title={courses.title} interval={courses.date} subtitle={courses.site}>
          {courses.description}
        </Event>
      )}
    </>
  );
};

export default Education;

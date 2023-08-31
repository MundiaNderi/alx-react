import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import "./CourseList.css";

function CourseList({ listCourses }) {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <tr>
            <td colSpan="2">No course available yet</td>
          </tr>
        ) : (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit.toString()}
              isHeader={false}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      credit: PropTypes.number.isRequired,
    })
  ),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;

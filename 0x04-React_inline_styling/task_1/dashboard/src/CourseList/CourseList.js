import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  courseList: {
    width: '100%',
    borderCollapse: 'collapse',
    border: '1px solid #ccc',
  },
  tableCell: {
    padding: '10px',
    textAlign: 'left',
    border: '1px solid #ccc',
  },
  tableHeader: {
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
  },
  courseListRowHeader: {
    backgroundColor: '#d8d8d8',
  },
  emptyRow: {
    fontStyle: 'italic',
    color: '#8b8b8b',
  },
});

function CourseList({ listCourses }) {
  return (
    <table className={css(styles.courseList)} id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} className={css(styles.tableHeader)} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} className={css(styles.tableHeader)} />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <tr className={css(styles.emptyRow)}>
            <td colSpan="2">No course available yet</td>
          </tr>
        ) : (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit.toString()}
              isHeader={false}
              className={css(styles.tableCell)}
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

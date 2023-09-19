import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

// Define styles using Aphrodite
const styles = StyleSheet.create({
  row: {
    borderBottom: '#f2f2f2',
  },
  headerRow: {
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
  },
  headerCell: {
    padding: '10px',
    textAlign: 'left',
    border: '1px solid #ccc',
  },
  defaultCell: {
    padding: '10px',
    textAlign: 'left',
    border: '1px solid #ccc',
    fontStyle: 'italic',
    color: '#8e8e8e',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
  checkbox: {
    marginRight: '10px',
  },
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  // Determine which styles to apply based on the type of row
  const rowStyles = isHeader ? styles.headerRow : styles.row;
  const cellStyles = isHeader
    ? styles.headerCell
    : textSecondCell === null
    ? styles.nullCell
    : styles.defaultCell;

  // Use state to track whether the checkbox is checked
  const [isChecked, setIsChecked] = useState(false);

  const toggleRowChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <tr className={css(rowStyles, isChecked && styles.rowChecked)}>
      {!isHeader ? (
        <>
          <td className={css(cellStyles)}>
            <input
              type="checkbox"
              className={css(styles.checkbox)}
              onChange={toggleRowChecked}
              checked={isChecked}
            />
            {textFirstCell}
          </td>
          <td className={css(cellStyles)}>
            {textSecondCell !== null ? textSecondCell : 'null'}
          </td>
        </>
      ) : (
        <th className={css(cellStyles)} colSpan="2">
          {textFirstCell}
        </th>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;

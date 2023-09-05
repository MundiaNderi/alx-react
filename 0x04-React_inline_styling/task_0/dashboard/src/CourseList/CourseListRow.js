import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader textFirstCell, textSecondCell }) => {
    // Define styles for header and regular rows
    const headerStyle = {
        backgroundColor: '#deb5b545',
    };

    const rowStyle = {
        backgroundColor: '#f5f5f5ab',
    };

    return (
        <tr style={isHeader ? headerStyle : rowStyle}>
            {isHeader ? (
                <>
                <th colSpan="2">{textFirstCell}</th>
                </>
            ) : (
                <>
                <td>{textFirstCell}</td>
                <td>{textSecondCell !== null ? textSecondCell : 'null'}</td>
                </>
            )}
        </tr>
    );
};

CourseListRow.PropTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
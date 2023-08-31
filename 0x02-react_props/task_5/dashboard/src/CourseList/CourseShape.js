import PropTypes from 'prop-types';

const CourseShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    credit: PropTypes.number.isRequired,
});

const courses = [
    {
        id: 1,
        name: 'ES6',
        credit: 60,
    },
    {
        id: 2,
        name: 'webpack',
        credit: 20,
    },
    {
        id: 3,
        name: 'React',
        credit: 40,
    },
];

export { CourseShape, courses }
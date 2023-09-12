import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection/BodySection';
import './BodySection.css'


const BodySectionWithMarginBottom = ({ children, ...rest }) => {
    return (
        <div className='bodySectionWithMargin'>
            <BodySection title={...rest}>
                {children}
            </BodySection>
        </div>
    );
};

BodySectionWithMarginBottom. PropTypes = {
    children: PropTypes.node.isRequired,
};

export default BodySectionWithMarginBottom;

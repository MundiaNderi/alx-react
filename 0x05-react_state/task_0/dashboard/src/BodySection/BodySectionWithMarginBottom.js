import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px', // Set the margin-bottom
  },
});

const BodySectionWithMarginBottom = ({ children, ...rest }) => {
  return (
    <div className={css(styles.bodySectionWithMargin)}>
      <BodySection title={...rest}>
        {children}
      </BodySection>
    </div>
  );
};

BodySectionWithMarginBottom.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BodySectionWithMarginBottom;

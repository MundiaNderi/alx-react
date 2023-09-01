import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type = 'default', html, value }) => {
  return (
    <li data-notification-type={type}>
      {value && <p>{value}</p>}
      {html && <div dangerouslySetInnerHTML={{ __html: html.__html }} />}
    </li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  value: PropTypes.string.isRequired,
};

export default NotificationItem;

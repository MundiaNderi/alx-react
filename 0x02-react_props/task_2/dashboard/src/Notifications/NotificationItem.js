import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value }) => {
  return (
    <li data-notification-type={type}>
      {value && <p>{value}</p>}
      {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
    </li>
  );
};


NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default NotificationItem;

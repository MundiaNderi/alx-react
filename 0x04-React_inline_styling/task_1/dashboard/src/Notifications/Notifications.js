import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';

const styles = StyleSheet.create({
  notifications: {
    padding: '50px',
    border: '3px dashed var(--color-brand)',
  },
  closeButton: {
    color: '#3a3a3a',
    fontWeight: 'bold',
    background: 'none',
    border: 'none',
    fontSize: '10px',
    position: 'absolute',
    right: '2px',
    top: '2px',
    cursor: 'pointer',
  },
  notificationTypeDefault: {
    color: '#210a61',
  },
  notificationTypeUrgent: {
    color: '#e01d3f',
  },
});

class Notifications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: this.props.listNotifications,
    };

    // Bind the markAsRead function to avoid unnecessary re-rendering
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    // Only update if the new listNotifications prop has more elements than the current state
    return nextProps.listNotifications.length > this.state.notifications.length;
  }

  markAsRead(id) {
    // Log the message when a notification is marked as read
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer } = this.props;
    const { notifications } = this.state;

    return (
      <div className={css(styles.notifications)}>
        <div className={`menuItem ${displayDrawer ? 'display-menu' : ''}`}></div>
        <button
          className={css(styles.closeButton)}
          aria-label="Close"
          onClick={() => console.log('Close button has been clicked')}
        >
          <img src={closeIcon} alt="closeIcon" width="20px" />
        </button>
        <p>Here is the list of notifications</p>
        <ul>
          {notifications.length === 0 ? (
            <li>No new notification for now</li>
          ) : (
            notifications.map((notification) => (
              <NotificationItem
                key={notification._id}
                type={notification.type}
                value={notification.value}
                html={notification.html}
                markAsRead={this.markAsRead} // Pass mark as read function as a property
              />
            ))
          )}
        </ul>
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired, // Changed id to _id to match the PropTypes definition
      html: PropTypes.objectOf({ __html: PropTypes.string }),
      type: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;

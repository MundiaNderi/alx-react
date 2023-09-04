import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";

class Notifications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: this.props.listNotifications,
    };

    // Bind the markAsRead function to avoid unnecessary re-rendering
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    // Log the message when a notification is marked as read
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer } = this.props;
    const { notifications } = this.state;

    return (
      <div className="Notifications">
        <div className={`menuItem${displayDrawer ? " display-menu" : ""}`}></div>
        <button
          style={{
            color: "#3a3a3a",
            fontWeight: "bold",
            background: "none",
            border: "none",
            fontSize: "10px",
            position: "absolute",
            right: "2px",
            top: "2px",
            cursor: "pointer",
          }}
          aria-label="Close"
          onClick={() => console.log("Close button has been clicked")}
        >
          <img src={closeIcon} alt="closeIcon" width="10px" />
        </button>
        <p>Here is the list of notifications</p>
        <ul>
          {notifications.length === 0 ? (
            <li>No new notification for now</li>
          ) : (
            notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                type={notification.type}
                value={notification.value}
                html={notification.html}
                markAsRead={this.markAsRead} // Pass markAsRead function as a property
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
      id: PropTypes.number.isRequired,
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

import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import closeIcon from "./assets/close-icon.png";
import NotificationItem from "./NotificationItem"; // Import the NotificationItem component

function Notifications({ displayDrawer, listNotifications }) {
  return (
    <div className="Notifications">
      <div className={`menuItem${displayDrawer ? " display-menu" : ""}`}>
      </div>
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
        onClick={() => console.log("Close button has been clicked")} // Wrap the log in a function to avoid immediate execution
      >
        <img src={closeIcon} alt="closeIcon" width="10px" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        {listNotifications.length === 0 ? (
          <li>No new notification for now</li>
        ) : (
          listNotifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              type={notification.type}
              value={notification.value}
              html={notification.html}
            />
          ))
        )}
      </ul>
    </div>
  );
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

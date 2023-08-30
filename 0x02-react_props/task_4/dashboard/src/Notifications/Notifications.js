import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils.js";
import NotificationItem from "./NotificationItem"; // Import the NotificationItem component

function Notifications({ displayDrawer }) {
  return (
    <div className="Notifications">
      <div className={`menuItem${displayDrawer ? " display-menu" : ""}`}>
        Your notifications
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
        onClick={console.log("Close button has been clicked")}
      >
        <img src={closeIcon} alt="closeIcon" width="10px" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" value="requirement - complete by EOD" />
      </ul>
    </div>
  );
}

export default Notifications;

import { normalizedData } from './notifications';

// Modify the function to use the normalized data 
export function getAllNotificationsByUser(userId) {
    const notifications = normalizedData.entities.notifications;

    if (notifications) {
        return Object.values(notifications).filter((notifications) => notification.author ===userId);
    } else {
        return[];
    }
    }
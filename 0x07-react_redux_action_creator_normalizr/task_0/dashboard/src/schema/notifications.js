import * as notificationsData from '../../notifications.json';

// Define a function to get notifications as user ID
export function getAllNotificationsByUser(userId) {
    return notificationsData.default.filter((notification) => notification.author.id === userId);
}
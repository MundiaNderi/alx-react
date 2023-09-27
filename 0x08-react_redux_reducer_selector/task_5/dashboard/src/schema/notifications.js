import { schema } from 'normalizr';

// Define the notification schema using normalizr
export const notificationSchema = new schema.Entity('notifications', {}, { idAttribute: 'id'});

// Create a function to normalize the data with  the schema
export function notificationsNormalizer(data) {
    return normalize(data, [notificationSchema]);
}
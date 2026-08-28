import { useEffect } from 'react';
import { notificationPermission, notificationsSupported, requestNotificationPermission } from '../lib/notifications';

export default function NotificationPermissionPrompt() {
  useEffect(() => {
    if (!notificationsSupported()) return;
    if (notificationPermission() !== 'default') return;
    void requestNotificationPermission();
  }, []);
  return null;
}

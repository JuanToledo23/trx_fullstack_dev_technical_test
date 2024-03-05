import {
  NotificationState,
  addNotification,
  clearNotification,
} from "@/app/store/features/systemNotificationSlice";
import { useAppDispatch } from "@/app/store/hooks";

export const useSystemNotification = () => {
  const dispatch = useAppDispatch();

  const displayNotification = (notification: NotificationState) => {
    dispatch(addNotification(notification));
  };

  const removeNotification = () => {
    dispatch(clearNotification());
  };

  return {
    displayNotification,
    removeNotification,
  };
};

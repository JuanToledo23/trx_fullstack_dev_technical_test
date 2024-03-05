import { useAppSelector } from "@/app/store/hooks";
import { Alert, Snackbar, SnackbarCloseReason } from "@mui/material";
import { useSystemNotification } from "./useSystemNotification";

export const SystemNotification = () => {
  const { open, timeout, type, message } = useAppSelector(
    (state) => state.notification,
  );
  const { removeNotification } = useSystemNotification();

  const handleClose = (_: unknown, reason?: SnackbarCloseReason) =>
    reason != "clickaway" && removeNotification();
  return (
    <Snackbar
      open={open}
      autoHideDuration={timeout}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Alert variant="filled" onClose={handleClose} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
};

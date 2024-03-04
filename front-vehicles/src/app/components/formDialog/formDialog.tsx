import { useAppSelector } from "@/app/store/hooks";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Fragment } from "react";
import { useFormDialogActions } from "./useFormDialogActions";
import { useVehicleActions } from "@/app/pages/vehicles/actions/useVehicleActions";
import { Input } from "../input/input";
import { FormProvider, useForm } from "react-hook-form";
import { Vehicle } from "@/app/pages/vehicles/components/vehicleList/vehicleTypes";

const FormDialog = () => {
  const methods = useForm();

  const { showFormDialog, dialogProps } = useAppSelector((state) => state.form);
  const { removeVehicle, addVehicle, updateVehicle } = useVehicleActions();
  const { controlFormDialog } = useFormDialogActions();
  const handleClose = () => {
    controlFormDialog();
  };

  const onSubmit = methods.handleSubmit((data) => {
    if (dialogProps.type === "ADD") {
      addVehicle(data as Vehicle);
    } else {
      dialogProps.vehicle &&
        updateVehicle({
          id: dialogProps.vehicle._id as string,
          body: data as Vehicle,
        });
    }
    controlFormDialog();
  });

  const handleOk = () => {
    switch (dialogProps.type) {
      case "DELETE":
        if (dialogProps.vehicle && dialogProps.vehicle._id)
          removeVehicle(dialogProps.vehicle._id);
        controlFormDialog();
        break;
      case "ADD":
      case "EDIT":
        onSubmit();
        break;

      default:
        controlFormDialog();
        break;
    }
  };

  return (
    <Fragment>
      <Dialog
        open={showFormDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        color="#7e7e7e"
      >
        <DialogTitle id="alert-dialog-title" className="text-center">
          <label className="text-slate-400 text-center">
            {dialogProps.title}
          </label>
          <label className="font-extrabold text-slate-300">
            {dialogProps.type === "DELETE" &&
              dialogProps.vehicle &&
              dialogProps.vehicle._id}
          </label>
        </DialogTitle>
        {(dialogProps.type === "ADD" || dialogProps.type === "EDIT") && (
          <DialogContent>
            <FormProvider {...methods}>
              <form
                onSubmit={(e) => e.preventDefault()}
                noValidate
                autoComplete="off"
                className="container"
              >
                <div className="grid grid-cols-2 gap-3 w-full">
                  <Input
                    label="brand"
                    type="text"
                    id="brand"
                    placeholder="Isuzu"
                    value={dialogProps.vehicle && dialogProps.vehicle.brand}
                  />
                  <Input
                    label="model"
                    type="text"
                    id="model"
                    placeholder="Hombre Space"
                    value={dialogProps.vehicle && dialogProps.vehicle.model}
                  />
                  <Input
                    label="year"
                    type="number"
                    id="year"
                    placeholder="2000"
                    value={dialogProps.vehicle && "" + dialogProps.vehicle.year}
                  />
                  <Input
                    label="color"
                    type="text"
                    id="color"
                    placeholder="Fuscia"
                    value={dialogProps.vehicle && dialogProps.vehicle.color}
                  />
                  <Input
                    label="plate"
                    type="text"
                    id="plate"
                    placeholder="2433676568"
                    value={dialogProps.vehicle && dialogProps.vehicle.plate}
                  />
                  <Input
                    label="vim"
                    type="text"
                    id="vim"
                    placeholder="WAUSF78E38A691446"
                    value={dialogProps.vehicle && dialogProps.vehicle.vim}
                  />
                  <Input
                    label="seats"
                    type="number"
                    id="seats"
                    placeholder="39"
                    value={
                      dialogProps.vehicle && "" + dialogProps.vehicle.seats
                    }
                  />
                  <Input
                    label="insurance"
                    type="text"
                    id="insurance"
                    placeholder="Baumbach-Bernhard"
                    value={dialogProps.vehicle && dialogProps.vehicle.insurance}
                  />
                  <Input
                    label="insurance number"
                    type="text"
                    id="insuranceNumber"
                    placeholder="9647531435"
                    value={
                      dialogProps.vehicle && dialogProps.vehicle.insuranceNumber
                    }
                  />
                  <Input
                    label="economic number"
                    type="text"
                    id="economicNumber"
                    placeholder="4026699048"
                    value={
                      dialogProps.vehicle && dialogProps.vehicle.economicNumber
                    }
                  />
                </div>
              </form>
            </FormProvider>
          </DialogContent>
        )}
        <DialogActions>
          <Button variant="outlined" color="error" onClick={handleClose}>
            {dialogProps.cancelText}
          </Button>
          <Button variant="outlined" onClick={handleOk} autoFocus>
            {dialogProps.okText}
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default FormDialog;

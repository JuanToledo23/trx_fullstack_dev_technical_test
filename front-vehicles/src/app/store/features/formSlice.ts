import { FormDialogProps } from "@/app/components/formDialog/formDialogProps";
import { createSlice } from "@reduxjs/toolkit";

export interface formSliceState {
  showFormDialog: boolean;
  dialogProps: FormDialogProps;
}

const initialState: formSliceState = {
  showFormDialog: false,
  dialogProps: {
    title: "",
    type: "",
    okText: "",
    cancelText: "",
    vehicle: undefined,
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    handleFormDialog: (state) => {
      state.showFormDialog = !state.showFormDialog;
    },
    setDialogProps: (state, actions) => {
      state.dialogProps = actions.payload;
    },
  },
});

export const { handleFormDialog, setDialogProps } = formSlice.actions;
export default formSlice;

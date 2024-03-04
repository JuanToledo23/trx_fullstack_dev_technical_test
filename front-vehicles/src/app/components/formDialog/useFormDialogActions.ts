"use client";
import {
  handleFormDialog,
  setDialogProps,
} from "@/app/store/features/formSlice";
import { useAppDispatch } from "@/app/store/hooks";
import { FormDialogProps } from "./formDialogProps";

export const useFormDialogActions = () => {
  const dispatch = useAppDispatch();

  const controlFormDialog = () => {
    dispatch(handleFormDialog());
  };
  const putDialogProps = (props: FormDialogProps) => {
    dispatch(setDialogProps(props));
    controlFormDialog();
  };

  return {
    controlFormDialog,
    putDialogProps,
  };
};

import { findInputError } from "@/app/utils/findInputError";
import { isFormInvalid } from "@/app/utils/isFormInvalid";
import { AnimatePresence, motion } from "framer-motion";
import { useFormContext } from "react-hook-form";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useEffect } from "react";

type InputProps = {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  value?: string;
};

export const Input = ({ label, type, id, placeholder, value }: InputProps) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  const inputError: any = findInputError(errors, id);
  const isInvalid = isFormInvalid(inputError);

  useEffect(() => {
    setValue(id, value);
  }, [id, setValue, value]);

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex justify-between">
        <label htmlFor={id} className="capitalize">
          {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && <InputError key={inputError.error.message} />}
        </AnimatePresence>
      </div>
      <input
        id={id}
        type={type}
        className={`w-full p-2 font-medium border rounded-md border-slate-300 placeholder:opacity-60 text-black ${
          isInvalid && "border-red-500 border-2"
        }`}
        placeholder={placeholder}
        {...register(id, {
          required: {
            value: true,
            message: "required",
          },
        })}
      />
    </div>
  );
};

const InputError = () => {
  return (
    <motion.p {...framer_error}>
      <ErrorOutlineIcon fontSize="small" color="error" />
    </motion.p>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

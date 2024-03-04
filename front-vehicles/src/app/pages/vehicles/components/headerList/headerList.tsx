"use client";
import Button from "@mui/material/Button";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useFormDialogActions } from "@/app/components/formDialog/useFormDialogActions";
import { useEffect, useState } from "react";
import TablePagination from "@mui/material/TablePagination";
import { useVehicleActions } from "../../actions/useVehicleActions";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { fetchVehicles } from "@/app/store/features/asyncThunks";

const HeaderList = () => {
  const dispatch = useAppDispatch();
  const { putDialogProps } = useFormDialogActions();
  const { changePage, changePerPage } = useVehicleActions();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchText, setSearchText] = useState("");

  const { allVehicles } = useAppSelector((state) => state.vehicles);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    changePage(newPage + 1);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPage(0);
    changePage(0);
    changePerPage(parseInt(event.target.value, 10));
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const [showClearIcon, setShowClearIcon] = useState("none");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
    setSearchText(event.target.value);
    if (event.target.value === "") {
      dispatch(fetchVehicles({ page: 1, perPage: 10 }));
    }
  };

  const handleClick = () => {
    setSearchText("");
    dispatch(fetchVehicles({ page: 1, perPage: 10 }));
  };

  const handleKeyDown = (event: { target: any; key: string }) => {
    if (event.key === "Enter") {
      dispatch(fetchVehicles({ page: 1, perPage: 10, search: searchText }));
    }
  };

  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-1.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Image
              src="/logo.svg"
              width={180}
              height={180}
              alt="Picture of the author"
              className="mr-3 h-6 sm:h-9"
            />
            {allVehicles && (
              <TablePagination
                component="div"
                count={allVehicles.total}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                size="small"
              />
            )}
            <FormControl>
              <TextField
                onKeyDown={handleKeyDown}
                size="small"
                variant="outlined"
                onChange={handleChange}
                value={searchText}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      style={{ display: showClearIcon }}
                      onClick={handleClick}
                      className="cursor-pointer"
                    >
                      <ClearIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <div className="flex items-center lg:order-1">
              <Button
                variant="outlined"
                size="medium"
                color="primary"
                startIcon={<AddIcon />}
                onClick={() =>
                  putDialogProps({
                    title: "ADD VEHICLE",
                    type: "ADD",
                    okText: "SAVE",
                    cancelText: "CANCEL",
                  })
                }
              >
                Add
              </Button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderList;

"use client";
import { useAppSelector } from "@/lib/hooks";
import Button from "@mui/material/Button";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";

const HeaderList = () => {
  const { selectedVehicle } = useAppSelector((state) => state.vehicles);
  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Image
              src="/logo.svg"
              width={180}
              height={180}
              alt="Picture of the author"
              className="mr-3 h-6 sm:h-9"
            />
            <div className="flex items-center lg:order-1">
              <Button
                variant="outlined"
                size="medium"
                color="primary"
                startIcon={<AddIcon />}
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

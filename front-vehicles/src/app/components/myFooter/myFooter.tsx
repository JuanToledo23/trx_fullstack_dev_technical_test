import { useEffect, useState } from "react";
import Image from "next/image";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import IconButton from "@mui/material/IconButton";

function MyFooter() {
  const [showFooter, setShowFooter] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setShowFooter(false);
    }, 5000);
  }, []);

  const handleClose = () => {
    setShowFooter(false);
  };

  return (
    <div>
      {showFooter && (
        <div className="fixed w-[280px] bg-[#494949] bottom-0 left-[50%] translate-x-[-50%] h-[100px] flex flex-col items-center justify-center rounded-t-lg">
          <b>Developed by</b>
          <Image
            src="/logoJuan.svg"
            width={200}
            height={200}
            alt="Picture of the author"
          />
          <IconButton
            aria-label="delete"
            size="small"
            className="absolute top-[-10px] right-[-10px]"
            onClick={handleClose}
          >
            <HighlightOffIcon fontSize="small" />
          </IconButton>
        </div>
      )}
    </div>
  );
}

export default MyFooter;

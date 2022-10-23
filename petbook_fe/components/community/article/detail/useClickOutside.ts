import React, { useEffect } from "react";

const useClickOutside = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  onClose: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
};

export default useClickOutside;

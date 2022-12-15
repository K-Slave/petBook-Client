import React, { useEffect } from "react";

export default function useClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T>,
  onClose: () => void
) {
  const handleClickOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      onClose();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
}

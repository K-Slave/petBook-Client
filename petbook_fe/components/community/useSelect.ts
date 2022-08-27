import { useState } from "react";

export const useSelect = (
  initialState: number
): [number, (key: number) => void] => {
  const [selected, setSelected] = useState(initialState);
  const handleSelect = (key: number) => {
    setSelected(key);
  };
  return [selected, handleSelect];
};

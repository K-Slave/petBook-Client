import { useState } from "react";

export default function useSelect(
  initialState: number
): [number, (key: number) => void] {
  const [selected, setSelected] = useState(initialState);
  const handleSelect = (key: number) => {
    setSelected(key);
  };
  return [selected, handleSelect];
}

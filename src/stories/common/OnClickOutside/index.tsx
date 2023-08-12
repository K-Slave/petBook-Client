import { useEffect, useRef } from "react";

interface Props {
  trigger: () => void;
}
const OnClickOutside = ({
  trigger,
  children,
}: React.PropsWithChildren<Props>) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node | null)) {
      trigger();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return <div ref={ref}>{children}</div>;
};

export default OnClickOutside;

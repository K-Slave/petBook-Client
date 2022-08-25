import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export const useOnScreen = (
  target: MutableRefObject<HTMLDivElement | null>
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isInterseting, setIsInterseting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsInterseting(entry.isIntersecting);
      });
    });
    const el = target && target.current;
    if (!el) return;
    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  }, [target.current]);
  return [isInterseting, setIsInterseting];
};

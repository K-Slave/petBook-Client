import { SkeletonProps } from "@components/common/Skeleton/Skeleton";

export const templateBgColor = (template: SkeletonProps["template"]) => {
  switch (template) {
    case "normal": {
      return "rgba(200, 200, 200, 0.3)";
    }

    case "white": {
      return "#fff";
    }

    default:
      break;
  }
};

export const getSkeletonCopy = (copy: number) => {
  const copyArray = [];
  let idx = 0;

  while (idx < copy) {
    copyArray.push("");
    idx += 1;
  }

  return copyArray;
};

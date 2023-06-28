export const ChevronLeftRounded = ({ width, height, viewBox }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 13L1 7L7 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeftRounded.defaultProps = {
  width: "8",
  height: "14",
  viewBox: "0 0 8 14",
};

export const ChevronLeftThin = ({ width, height, viewBox }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 13L1 7L7 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeftThin.defaultProps = {
  width: "8",
  height: "14",
  viewBox: "0 0 8 14",
};

export const ChevronLeftSharp = ({ width, height, viewBox }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 2L3 13L14 24" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
};

ChevronLeftSharp.defaultProps = {
  width: "16",
  height: "26",
  viewBox: "0 0 16 26",
};

export const ChevronRightRounded = ({ width, height, viewBox }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 13L7 7L1 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightRounded.defaultProps = {
  width: "8",
  height: "14",
  viewBox: "0 0 8 14",
};

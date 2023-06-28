export const ChevronDownRounded = ({ width, height, viewBox }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 1L5 5L1 1"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownRounded.defaultProps = {
  width: "10",
  height: "6",
  viewBox: "0 0 10 6",
};

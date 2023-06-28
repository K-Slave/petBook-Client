export const ChevronUpRounded = ({ width, height, viewBox }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 5L5 1L9 5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpRounded.defaultProps = {
  width: "10",
  height: "6",
  viewBox: "0 0 10 6",
};

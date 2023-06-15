const ThreeDotsVertical = ({ width, height, viewBox }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="6" r="2" fill="currentColor" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <circle cx="12" cy="18" r="2" fill="currentColor" />
    </svg>
  );
};

ThreeDotsVertical.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
};

export default ThreeDotsVertical;

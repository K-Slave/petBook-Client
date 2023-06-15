const FaceHappy = ({ width, height, viewBox }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.1 5.9H10.107M5.9 5.9H5.907M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM10.45 5.9C10.45 6.0933 10.2933 6.25 10.1 6.25C9.9067 6.25 9.75 6.0933 9.75 5.9C9.75 5.7067 9.9067 5.55 10.1 5.55C10.2933 5.55 10.45 5.7067 10.45 5.9ZM6.25 5.9C6.25 6.0933 6.0933 6.25 5.9 6.25C5.7067 6.25 5.55 6.0933 5.55 5.9C5.55 5.7067 5.7067 5.55 5.9 5.55C6.0933 5.55 6.25 5.7067 6.25 5.9ZM8 11.85C9.75035 11.85 11.15 10.5669 11.15 9.4H4.85C4.85 10.5669 6.24965 11.85 8 11.85Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

FaceHappy.defaultProps = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
};

export default FaceHappy;

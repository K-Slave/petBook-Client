export const HeartFilled = ({ width, height, viewBox }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99521 2.43711C6.59566 0.86435 4.26182 0.441282 2.50829 1.88146C0.754751 3.32164 0.507877 5.72955 1.88494 7.43286C3.02987 8.84904 6.49484 11.8359 7.63047 12.8026C7.75752 12.9108 7.82105 12.9648 7.89515 12.9861C7.95982 13.0046 8.03059 13.0046 8.09526 12.9861C8.16936 12.9648 8.23289 12.9108 8.35994 12.8026C9.49557 11.8359 12.9605 8.84904 14.1055 7.43286C15.4825 5.72955 15.2658 3.30649 13.4821 1.88146C11.6984 0.456431 9.39475 0.86435 7.99521 2.43711Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

HeartFilled.defaultProps = {
  width: "16",
  height: "14",
  viewBox: "0 0 16 14",
};

export const HeartOutline = ({ width, height, viewBox }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99521 2.43711C6.59566 0.86435 4.26182 0.441282 2.50829 1.88146C0.754751 3.32164 0.507877 5.72955 1.88494 7.43286C3.02987 8.84904 6.49484 11.8359 7.63047 12.8026C7.75752 12.9108 7.82105 12.9648 7.89515 12.9861C7.95982 13.0046 8.03059 13.0046 8.09526 12.9861C8.16936 12.9648 8.23289 12.9108 8.35994 12.8026C9.49557 11.8359 12.9605 8.84904 14.1055 7.43286C15.4825 5.72955 15.2658 3.30649 13.4821 1.88146C11.6984 0.456431 9.39475 0.86435 7.99521 2.43711Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

HeartOutline.defaultProps = {
  width: "16",
  height: "14",
  viewBox: "0 0 16 14",
};

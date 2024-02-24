const Chevron = ({ width = 16, height = 16, color = "black", sx = {} }) => {
  return (
    <svg
      {...{ width, height, ...sx }}
      stroke={color}
      fill="none"
      viewBox="0 0 10 6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.00018 1L5.00018 5L9.00018 1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Chevron;

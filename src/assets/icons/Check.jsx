const Check = ({ width = 16, height = 16, color = "black", sx = {} }) => {
  return (
    <svg
      fill={color}
      {...{ width, height, ...sx }}
      viewBox="0 0 15 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.0272217" width="15" height="15" rx="7.5" />
      <path
        d="M10.6196 5.06628L6.32275 9.36316L4.36963 7.41003"
        stroke="white"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Check;

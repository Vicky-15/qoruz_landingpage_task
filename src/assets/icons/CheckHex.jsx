const CheckHex = ({ width = 16, height = 16, color = "black", sx = {} }) => {
  return (
    <svg
      fill={color}
      {...{ width, height, ...sx }}
      viewBox="0 0 19 19"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2 1.82679C10.148 1.21944 8.85196 1.21944 7.8 1.82679L3.70481 4.19115C2.65285 4.79851 2.00481 5.92094 2.00481 7.13564V11.8644C2.00481 13.0791 2.65285 14.2015 3.70481 14.8088L7.8 17.1732C8.85196 17.7806 10.148 17.7806 11.2 17.1732L15.2952 14.8088C16.3472 14.2015 16.9952 13.0791 16.9952 11.8644V7.13564C16.9952 5.92094 16.3472 4.79851 15.2952 4.19115L11.2 1.82679Z"
        // fill="#02AC5B"
        stroke="#FFFBF6"
        strokeWidth="2"
      />
      <path
        d="M12.5 7L8.375 11.5L6.5 9.45455"
        stroke="#FFFBF6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckHex;

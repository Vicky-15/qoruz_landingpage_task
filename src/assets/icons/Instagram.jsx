const Instagram = ({ width = 16, height = 16, color = "black", sx = {} }) => {
  return (
    <svg
      {...{ width, height, ...sx }}
      stroke={color}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_3849)">
        <path
          d="M14.9404 2.06464H6.48806C4.154 2.06464 2.26187 3.95677 2.26187 6.29083V14.7432C2.26187 17.0773 4.154 18.9694 6.48806 18.9694H14.9404C17.2745 18.9694 19.1666 17.0773 19.1666 14.7432V6.29083C19.1666 3.95677 17.2745 2.06464 14.9404 2.06464Z"
          //   stroke="#FF6435"
          strokeWidth="2.02857"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.0955 9.98439C14.1998 10.6878 14.0796 11.4063 13.7521 12.0375C13.4246 12.6687 12.9064 13.1806 12.2711 13.5003C11.6359 13.82 10.9161 13.9313 10.214 13.8183C9.51187 13.7054 8.86326 13.3739 8.36041 12.871C7.85756 12.3682 7.52607 11.7196 7.41309 11.0175C7.30011 10.3153 7.4114 9.59549 7.73112 8.96028C8.05084 8.32507 8.56271 7.80684 9.19394 7.47931C9.82516 7.15178 10.5436 7.03163 11.247 7.13594C11.9646 7.24234 12.6289 7.5767 13.1418 8.08963C13.6547 8.60255 13.9891 9.26685 14.0955 9.98439Z"
          //   stroke="#FF6435"
          strokeWidth="2.02857"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.3634 5.8681H15.3722"
          //   stroke="#FF6435"
          strokeWidth="2.02857"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_3849">
          <rect
            width="20.2857"
            height="20.2857"
            fill="white"
            transform="translate(0.571442 0.374207)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Instagram;

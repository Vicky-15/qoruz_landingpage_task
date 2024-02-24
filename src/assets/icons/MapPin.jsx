export default function MapPin({
  width = 16,
  height = 16,
  color = "black",
  sx = {},
}) {
  return (
    <svg
      stroke={color}
      {...{ width, height, ...sx }}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 6.66675C13 11.3334 7 15.3334 7 15.3334C7 15.3334 1 11.3334 1 6.66675C1 5.07545 1.63214 3.54933 2.75736 2.42411C3.88258 1.29889 5.4087 0.666748 7 0.666748C8.5913 0.666748 10.1174 1.29889 11.2426 2.42411C12.3679 3.54933 13 5.07545 13 6.66675Z"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 8.66675C8.10457 8.66675 9 7.77132 9 6.66675C9 5.56218 8.10457 4.66675 7 4.66675C5.89543 4.66675 5 5.56218 5 6.66675C5 7.77132 5.89543 8.66675 7 8.66675Z"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

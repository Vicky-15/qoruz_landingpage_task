export default function HamMenu({
  width = 16,
  height = 16,
  color = "black",
  sx = {},
}) {
  return (
    <svg
      {...{ width, height, ...sx }}
      fill={color}
      stroke={color}
      viewBox="0 0 24 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12.6465H21"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 6.64648H21"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 18.6465H21"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const Button = ({
  children,
  iconLeft,
  iconRight,
  onClick,
  className,
  sx = {},
}) => {
  return (
    <button
      {...sx}
      onClick={onClick}
      className={`inline-flex items-center justify-center outline-0 whitespace-nowrap	${className}`}
    >
      {iconLeft && <span className="mr-[10px]">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-[10px]">{iconRight}</span>}
    </button>
  );
};

export default Button;

// example

{
  /* <Button
iconRight={<Arrow color="#fff" width={12} height={12} />}
onClick={() => {}}
additionalStyles={`bg-primary-orange-600 hover:bg-primary-orange-700 `}
>
Post Brief
</Button> */
}

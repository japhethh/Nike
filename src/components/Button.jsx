const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth
}) => {
  return (
    <button
      className={` flex justify-center items-center gap-2 px-7 py-4 border font-monserrat text-lg leading-none  ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}  `
          : "bg-coral-red border-coral-red text-white"
      } rounded-full ${fullWidth && 'w-full'}"}`}
    >
      {label}
      {iconUrl && (
        <img className="ml-2 rounded-full  h-5 w-5" src={iconUrl} alt={label} />
      )}
    </button>
  );
};

export default Button;

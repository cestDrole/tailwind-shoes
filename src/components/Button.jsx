const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  link,
}) => {
  return (
    <a
      href={link}
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none w-max transition duration-150 ease-in hover:bg-white hover:text-coral-red hover:border-coral-red
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red text-white border-coral-red"
    } rounded-full ${fullWidth && "wfull"}`}
    >
      {label}

      {iconUrl && (
        <img
          src={iconUrl}
          alt='arrow right icon'
          className='ml-2 rounded-full w-5 h-5'
        />
      )}
    </a>
  );
};

export default Button;

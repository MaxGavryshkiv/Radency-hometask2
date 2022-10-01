const Button = ({
  handleClick,
  text,
}: {
  handleClick: () => void;
  text: string;
}) => {
  return (
    <button
      onClick={handleClick}
      className="absolute right-cent w-36 h-12 rounded-3xl border-solid border border-black bg-white active:bg-gray-200 "
    >
      {text}
    </button>
  );
};

export default Button;

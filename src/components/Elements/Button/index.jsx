const Button = (props) => {
  // konsep distructuring
  const {
    children,
    onClick = () => {},
    classname = "bg-black",
    type = "button",
  } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      type={type}
      onClick={onClick} // Event Handler
    >
      {children}
    </button>
  );
};

export default Button;

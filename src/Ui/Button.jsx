function Button({ children, background, border, color }) {
  return (
    <button
      className={`px-4 py-2 text-base font-normal font-outfit leading-6 border-2 border-${border} bg-${background} text-${color} rounded-full`}
    >
      {children}
    </button>
  );
}

export default Button;

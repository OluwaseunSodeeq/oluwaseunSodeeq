function Container({ background = "", children }) {
  return (
    <div
      className={`w-full md:w-full lg:w-full lg:max-w-full bg-${background}`}
    >
      {children}
    </div>
  );
}

export default Container;

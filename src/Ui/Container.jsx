function Container({ background = "", children }) {
  return (
    <div
      className={`w-full mx-auto my-0 min-h-auto`}
      // className={`w-full mx-auto my-0 min-h-auto`}
      style={{ backgroundColor: background }}
    >
      {children}
    </div>
  );
}

export default Container;
